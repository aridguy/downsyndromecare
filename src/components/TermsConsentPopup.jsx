// components/TermsConsentPopup.jsx
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const TermsConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const colors = {
    green: "#2D6A4F",
    darkGreen: "#1B4332",
    lightGreen: "#40916C",
    cream: "#FEFAE0",
    gray: "#5A5A5A",
    lightGray: "#F8F9FA",
    white: "#FFFFFF",
    darkGray: "#333333",
  };

  // Listen for route changes (popstate and pushState)
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for browser back/forward buttons
    window.addEventListener("popstate", handleRouteChange);

    // Override pushState and replaceState to detect route changes
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      handleRouteChange();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      handleRouteChange();
    };

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  // List of pages where popup should NOT show (legal pages)
  const exemptPages = ["/termsandconditions", "/privacypolicy"];

  // Check if current page is exempt from showing popup
  const isExemptPage = exemptPages.includes(currentPath);

  // Check if user has already consented
  useEffect(() => {
    // Don't check or show popup on exempt pages
    if (isExemptPage) {
      setShowPopup(false);
      return;
    }

    const consentData = localStorage.getItem("termsConsent");

    if (consentData) {
      try {
        const parsed = JSON.parse(consentData);
        const consentDate = new Date(parsed.date);
        const now = new Date();
        const daysSinceConsent = (now - consentDate) / (1000 * 60 * 60 * 24);

        if (daysSinceConsent < 365 && parsed.agreed === true) {
          setConsentGiven(true);
          setShowPopup(false);
        } else {
          localStorage.removeItem("termsConsent");
          setShowPopup(true);
        }
      } catch (e) {
        setShowPopup(true);
      }
    } else {
      setShowPopup(true);
    }
  }, [isExemptPage, currentPath]);

  const handleAgree = () => {
    const consentRecord = {
      agreed: true,
      date: new Date().toISOString(),
      sessionId: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userAgent: navigator.userAgent,
      version: "1.0",
    };

    localStorage.setItem("termsConsent", JSON.stringify(consentRecord));
    setConsentGiven(true);
    setShowPopup(false);

    Swal.fire({
      title: "Welcome!",
      text: "Thank you for agreeing to our Terms & Conditions.",
      icon: "success",
      confirmButtonColor: colors.green,
      timer: 2500,
      showConfirmButton: false,
    });
  };

  const handleDecline = () => {
    // Close the popup first
    setShowPopup(false);

    Swal.fire({
      title: "Unable to Proceed",
      text: "You must accept our Terms & Conditions and Privacy Policy to continue using this website.",
      icon: "info",
      confirmButtonColor: colors.green,
      confirmButtonText: "Accept Terms",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        handleAgree();
      } else {
        // If user closes the alert without accepting, show popup again
        setShowPopup(true);
      }
    });
  };

  // Don't show on exempt pages or if consented
  if (isExemptPage || !showPopup || consentGiven) return null;

  return (
    <>
      {/* Overlay */}
      <div className="consent-overlay">
        {/* Popup Container */}
        <div className="consent-popup">
          {/* Close button */}
          <button className="consent-close" onClick={handleDecline}>
            ✕
          </button>

          {/* Icon */}
          <div className="consent-icon">
            <span>🔒</span>
          </div>

          {/* Title */}
          <h2 className="consent-title">We Value Your Privacy</h2>

          {/* Description */}
          <p className="consent-description">
            To continue using <strong>Cromosome 21 Down Syndrome Care</strong>,
            please review and accept our terms.
          </p>

          {/* Links */}
          <div className="consent-links">
            <a
              href="/termsandconditions"
              target="_blank"
              rel="noopener noreferrer"
              className="consent-link"
            >
              Terms & Conditions
            </a>
            <span className="link-separator">•</span>
            <a
              href="/privacypolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="consent-link"
            >
              Privacy Policy
            </a>
          </div>

          {/* What you agree to */}
          <div className="consent-summary">
            <div className="summary-item">
              <span className="summary-check">✓</span>
              <span>
                I agree to the{" "}
                <a href="/termsandconditions" target="_blank">
                  Terms & Conditions
                </a>
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-check">✓</span>
              <span>
                I have read the{" "}
                <a href="/privacypolicy" target="_blank">
                  Privacy Policy
                </a>
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-check">✓</span>
              <span>
                I understand my data will be used for communication and programs
              </span>
            </div>
            <div className="summary-item">
              <span className="summary-check">✓</span>
              <span>
                I consent to receive email updates (unsubscribe anytime)
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="consent-buttons">
            <button className="btn-decline" onClick={handleDecline}>
              Decline
            </button>
            <button className="btn-accept" onClick={handleAgree}>
              I Agree & Continue
            </button>
          </div>

          <p className="consent-footer">
            You can withdraw consent anytime by clearing your browser cookies.
          </p>
        </div>
      </div>

      <style>{`
        .consent-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          z-index: 10000;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 0;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .consent-popup {
          background: ${colors.white};
          max-width: 480px;
          width: 100%;
          border-radius: 24px 24px 0 0;
          padding: 2rem 1.5rem 1.5rem;
          position: relative;
          box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.15);
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .consent-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.2rem;
          cursor: pointer;
          color: ${colors.gray};
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s;
        }

        .consent-close:hover {
          background: ${colors.lightGray};
          color: ${colors.darkGray};
        }

        .consent-icon {
          text-align: center;
          margin-bottom: 1rem;
        }

        .consent-icon span {
          font-size: 2.5rem;
          background: ${colors.lightGray};
          width: 70px;
          height: 70px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .consent-title {
          text-align: center;
          font-size: 1.4rem;
          font-weight: 700;
          color: ${colors.darkGreen};
          margin-bottom: 0.5rem;
        }

        .consent-description {
          text-align: center;
          color: ${colors.gray};
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .consent-links {
          text-align: center;
          margin-bottom: 1.25rem;
        }

        .consent-link {
          color: ${colors.green};
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .consent-link:hover {
          color: ${colors.lightGreen};
          text-decoration: underline;
        }

        .link-separator {
          color: ${colors.gray};
          margin: 0 0.5rem;
          font-size: 0.85rem;
        }

        .consent-summary {
          background: ${colors.lightGray};
          border-radius: 16px;
          padding: 1rem;
          margin-bottom: 1.5rem;
        }

        .summary-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: ${colors.darkGray};
          padding: 0.35rem 0;
        }

        .summary-check {
          color: ${colors.green};
          font-weight: bold;
          font-size: 0.9rem;
        }

        .consent-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .btn-decline {
          flex: 1;
          padding: 0.7rem;
          background: transparent;
          border: 1px solid ${colors.lightGray};
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 500;
          color: ${colors.gray};
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-decline:hover {
          background: ${colors.lightGray};
          border-color: ${colors.gray};
        }

        .btn-accept {
          flex: 2;
          padding: 0.7rem;
          background: #07263b;
          border: none;
          border-radius: 40px;
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-accept:hover {
          background: #095588;
          transform: translateY(-1px);
        }

        .consent-footer {
          text-align: center;
          font-size: 0.65rem;
          color: ${colors.gray};
          margin: 0;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .consent-overlay {
            align-items: center;
          }
          
          .consent-popup {
            border-radius: 24px;
            max-width: 450px;
            animation: slideUpModal 0.3s ease-out;
          }
          
          @keyframes slideUpModal {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }

        @media (max-width: 480px) {
          .consent-popup {
            padding: 1.5rem 1.25rem 1.25rem;
          }
          
          .consent-title {
            font-size: 1.2rem;
          }
          
          .consent-buttons {
            flex-direction: column;
          }
          
          .btn-decline, .btn-accept {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default TermsConsentPopup;
