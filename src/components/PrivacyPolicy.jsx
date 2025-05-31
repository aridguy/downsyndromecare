import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#1976d2',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      marginBottom: '25px',
      fontWeight: '600',
      textDecoration: 'underline',
      padding: 0,
    },
    backIcon: {
      marginRight: '8px',
      stroke: '#1976d2',
    },
    header: {
      textAlign: 'center',
      paddingBottom: '25px',
      borderBottom: '2px solid #e0e0e0',
      marginBottom: '30px',
    },
    title: {
      color: '#1976d2',
      fontSize: '2.2rem',
      margin: 0,
      fontWeight: '700',
    },
    subtitle: {
      color: '#555',
      fontSize: '1rem',
      marginTop: '8px',
      fontStyle: 'italic',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      color: '#1976d2',
      fontSize: '1.25rem',
      fontWeight: '600',
      borderBottom: '2px solid #e0e0e0',
      paddingBottom: '8px',
      marginBottom: '15px',
    },
    paragraph: {
      marginBottom: '12px',
    },
    list: {
      marginLeft: '20px',
      marginBottom: '12px',
      color: '#444',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f5f7fa',
      borderRadius: '12px',
      fontSize: '0.95rem',
      color: '#666',
      fontStyle: 'italic',
    },
    contactButton: {
      display: 'inline-block',
      marginTop: '15px',
      padding: '10px 24px',
      backgroundColor: '#1976d2',
      color: '#fff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/')}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={styles.backIcon}
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Home
      </button>

      <header style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>Effective Date: May 31, 2025</p>
        <p style={styles.subtitle}>Your trust is important to us. Learn how we protect your data.</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Who We Are</h2>
        <p style={styles.paragraph}>
          C21Down Syndrome Care is a registered non-governmental organization based in Nigeria.
          For any privacy-related concerns, contact us at:
        </p>
        <ul style={styles.list}>
          <li>📩 Email: <em>your@email.com</em></li>
          <li>📞 Phone: <em>+234 08035881312</em></li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>2. What We Collect</h2>
        <p style={styles.paragraph}>
          We collect your name, email, phone number, address, and location when you fill out forms on our website
          (e.g., newsletter or volunteer registration). We do not collect passwords, financial information, or sensitive biometric data.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Why We Collect It</h2>
        <p style={styles.paragraph}>
          We use your data to create volunteer accounts, onboard you, and conduct background checks as part of our volunteer process.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>4. Third-Party Services</h2>
        <p style={styles.paragraph}>
          We use Google Forms to collect data and Google Analytics to analyze website traffic.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>5. Data Storage & Retention</h2>
        <p style={styles.paragraph}>
          Data is stored securely in Google Cloud and retained only during your engagement with us. It is deleted after your involvement ends.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>6. Your Rights</h2>
        <p style={styles.paragraph}>
          You can request access to or deletion of your data anytime by contacting us.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>7. Security</h2>
        <p style={styles.paragraph}>
          We use encryption, restricted access, and secure systems to protect your data.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>8. Cookies</h2>
        <p style={styles.paragraph}>
          Our website uses essential cookies and Google Analytics. You can disable cookies in your browser settings.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>9. Children’s Privacy</h2>
        <p style={styles.paragraph}>
          Our services are intended for adults. We do not knowingly collect data from children.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>10. Policy Updates</h2>
        <p style={styles.paragraph}>
          We may update this policy. Continued use of our site means you accept any changes.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>Thank you for trusting <strong>C21Down Syndrome Care</strong> 💙</p>
        <Link to="/contact" style={styles.contactButton}>
          Contact Us
        </Link>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
