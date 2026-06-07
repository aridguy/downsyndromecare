// server/webhook.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const emailjs = require('@emailjs/nodejs');
const crypto = require('crypto');

const app = express();

// --- 1. Raw body parsing (required for Paystack signature verification) ---
app.use(express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }));

// --- 2. Webhook endpoint ---
app.post("/api/paystack-webhook", async (req, res) => {
  // Verify that the request came from Paystack (security)
  const hash = crypto.createHmac('sha512', process.env.SK_KEY_TEST)
                     .update(req.rawBody)
                     .digest('hex');
  if (hash !== req.headers['x-paystack-signature']) {
    console.error("Invalid signature – request not from Paystack");
    return res.status(401).send('Unauthorized');
  }

  const event = req.body;

  // Only act on successful charge events
  if (event.event === "charge.success") {
    const data = event.data;
    const donorEmail = data.customer.email;
    const donorName = data.customer.customer_name || "Valued Donor";
    const amountInKobo = data.amount;
    const amountNaira = amountInKobo / 100; // Convert to Naira
    const transactionDate = new Date(data.paid_at).toLocaleDateString('en-NG');
    const transactionId = data.reference;

    // Prepare the email parameters (must match your EmailJS template variables)
    const emailParams = {
      donor_name: donorName,
      amount: `₦${amountNaira.toLocaleString()}`,
      date: transactionDate,
      transaction_id: transactionId,
      to_email: donorEmail
    };

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID_DONATION_EMAIL,
        emailParams,
        {
          publicKey: process.env.EMAILJS_PUBLIC_KEY,
          privateKey: process.env.EMAILJS_PRIVATE_KEY_DONATION_EMAIL
        }
      );
      console.log(`✅ Thank you email sent to ${donorEmail}`);
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);
      // Do not return an error to Paystack – we already processed the webhook
    }
  }

  // Always respond quickly to acknowledge receipt (Paystack requires 200 OK)
  res.sendStatus(200);
});

// --- 3. Start the server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Paystack webhook listener running on port ${PORT}`);
});