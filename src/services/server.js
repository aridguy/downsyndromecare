import express from "express";
import crypto from "crypto";
import nodemailer from "nodemailer";

const app = express();

// IMPORTANT (for Paystack)
app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.post("/paystack-webhook", async (req, res) => {
  const secret = "YOUR_SECRET_KEY";

  const hash = crypto
    .createHmac("sha512", secret)
    .update(req.rawBody)
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.sendStatus(401);
  }

  const event = req.body;

  if (event.event === "charge.success") {
    const data = event.data;

    const email = data.customer.email;
    const amount = data.amount / 100;

    console.log("Payment success:", email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your@email.com",
        pass: "your-app-password",
      },
    });

    await transporter.sendMail({
      from: "your@email.com",
      to: email,
      subject: "Donation Successful ❤️",
      html: `
        <h2>Thank You for Your Donation 🎉</h2>
        <p>Amount: ₦${amount}</p>
      `,
    });

    console.log("Email sent!");
  }

  res.sendStatus(200);
});

app.listen(5000, () => console.log("Webhook running on port 5000"));