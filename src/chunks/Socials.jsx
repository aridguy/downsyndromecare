import React, { useState } from 'react';
import { subscribeToNewsletter } from '../services/GlobalFunctions'; // Update the import path

const Socials = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First try using your API
      const result = await subscribeToNewsletter(email);
      
      if (result.success) {
        setSubscriptionStatus({ success: true, message: 'Subscription successful!' });
        // Optionally open FeedBurner as fallback or for verification
        // window.open(
        //   'https://feedburner.google.com/fb/a/mailverify?uri=barreldotim',
        //   'popupwindow',
        //   'scrollbars=yes,width=550,height=520'
        // );
      } else {
        // If API fails, fall back to FeedBurner
        console.error('API subscription failed, falling back to FeedBurner');
        setSubscriptionStatus({ 
          success: false, 
          message: result.error || 'Subscription failed, trying alternative...' 
        });
        // window.open(
        //   'https://feedburner.google.com/fb/a/mailverify?uri=barreldotim',
        //   'popupwindow',
        //   'scrollbars=yes,width=550,height=520'
        // );
      }
    } catch (error) {
      console.error('Error in subscription process:', error);
      setSubscriptionStatus({ 
        success: false, 
        message: 'An error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
    // Clear status when closing/opening
    if (!isOpen) setSubscriptionStatus(null);
  };

  return (
    <div className="socials-container">
      <div className={`ba-we-love-subscribers-wrap ${isOpen ? 'active' : ''}`}>
        <div className={`ba-we-love-subscribers popup-ani ${isOpen ? 'open' : ''}`}>
          <header>
            <h1>We<span className="img love"></span>subscribers</h1>
          </header>
          <form
            onSubmit={handleSubmit}
            target="popupwindow"
            method="post"
            action="https://feedburner.google.com/fb/a/mailverify"
          >
            <input
              name="email"
              placeholder="hello@barrel.im"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input 
              className="logo-ani" 
              name="submit" 
              type="submit" 
              value={isSubmitting ? 'Subscribing...' : 'Subscribe'} 
              disabled={isSubmitting}
            />
            <input name="uri" type="hidden" value="barreldotim" />
          </form>
          
          {/* Subscription status message */}
          {subscriptionStatus && (
            <div className={`subscription-status ${subscriptionStatus.success ? 'success' : 'error'}`}>
              {subscriptionStatus.message}
            </div>
          )}
          
          <div className="img ba-logo logo-ani"></div>
        </div>
        
        <div className="ba-we-love-subscribers-fab" onClick={toggleForm}>
          <div className={`wrap ${isOpen ? 'ani' : ''}`}>
            <div className={`img-fab img ${isOpen ? 'close' : ''}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;