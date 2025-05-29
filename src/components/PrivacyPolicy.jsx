import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      lineHeight: '1.6',
      color: '#333'
    },
    header: {
      textAlign: 'center',
      padding: '20px 0',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      marginBottom: '30px'
    },
    title: {
      color: '#1976d2',
      margin: '0'
    },
    subtitle: {
      color: '#555',
      margin: '10px 0 0'
    },
    section: {
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#1976d2',
      borderBottom: '2px solid #eee',
      paddingBottom: '10px',
      marginBottom: '15px'
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
      fontSize: '16px'
    },
    footer: {
      textAlign: 'center',
      marginTop: '40px',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px'
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
      marginTop: '10px'
    }
  };

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
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>Your trust is important to us. Learn how we protect your data.</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and contact details when you:</p>
        <ul>
          <li>Register for events or programs</li>
          <li>Make a donation</li>
          <li>Subscribe to our newsletter</li>
          <li>Contact us for support</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>2. How We Use Your Information</h2>
        <p>Your information helps us provide better services and support to the Down syndrome community.</p>
      </div>

      {/* Add more sections following the same pattern */}

      <div style={styles.footer}>
        <h3>Need help or have questions about our privacy policy?</h3>
        <Link style={styles.contactButton} to="/contact">Contact Us</Link>
        
      </div>
    </div>
  );
};

export default PrivacyPolicy;