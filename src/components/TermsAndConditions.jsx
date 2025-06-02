import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from './Loader';

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      padding: '20px 0',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      marginBottom: '30px',
    },
    title: {
      color: '#1976d2',
      margin: '0',
    },
    subtitle: {
      color: '#555',
      margin: '10px 0 0',
      fontStyle: 'italic',
    },
    section: {
      marginBottom: '25px',
    },
    sectionTitle: {
      color: '#1976d2',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px',
      marginBottom: '15px',
    },
    backButton: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#1976d2',
      textDecoration: 'none',
      marginBottom: '20px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      fontSize: '16px',
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
    },
    contactButton: {
      backgroundColor: '#1976d2',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      marginTop: '10px',
    },
  };

   const [delayed, setDelayed] = useState(true)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
        setDelayed(false)
        setLoading(false)
      }, 1000)
      return () => clearTimeout(timer)
    }, [])
  
    if (delayed || loading) return <Loader message="" />
  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={() => navigate('/')}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1976d2"
          strokeWidth="2"
          style={{ marginRight: '8px' }}
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </button>

      <div style={styles.header}>
        <h1 style={styles.title}>Terms and Conditions</h1>
        <p style={styles.subtitle}>Effective Date: May 31, 2025</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with these Terms and Conditions. If you do not agree,
          please do not use our services.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>2. Use of the Website</h2>
        <p>
          You may use this site for lawful purposes related to volunteering and engaging with our NGO. Unauthorized use or
          misuse of content is strictly prohibited.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Volunteer Information</h2>
        <p>
          Information submitted through our forms must be accurate and truthful. We do not collect passwords or financial
          data. All personal data is handled in accordance with our Privacy Policy.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>4. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and logos, is the property of C21Down Syndrome Care and
          may not be reproduced without permission.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites (e.g., Google Forms). We are not responsible for their
          content or privacy practices.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>6. Disclaimer</h2>
        <p>
          We make every effort to ensure our website is accurate and functional, but we do not guarantee uninterrupted
          access or error-free content.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>7. Limitation of Liability</h2>
        <p>
          C21Down Syndrome Care is not liable for any damages arising from your use of this website or your participation
          as a volunteer.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>8. Termination</h2>
        <p>We reserve the right to suspend or terminate your access to the website or volunteer program at our discretion.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>9. Changes to Terms</h2>
        <p>
          We may revise these Terms and Conditions at any time. Continued use of the website constitutes acceptance of any
          changes.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>10. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
          <br />
          📩 Email: <a href="mailto:contact@c21downsyndromecare.org">contact@c21downsyndromecare.org</a>
          <br />
          📞 Phone: +234 08035881312
        </p>
      </div>

      <div style={styles.footer}>
        <h3>Need assistance or have questions?</h3>
        <Link style={styles.contactButton} to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
