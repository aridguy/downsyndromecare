// FOR NEWS LETTER ONLY
export const subscribeToNewsletter = async (email) => {
    // Validate email input
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        success: false,
        error: 'Please provide a valid email address'
      };
    }
  
    try {
      // Check if the API key is available
      if (!process.env.REACT_APP_NEWSLETTER_API_KEY) {
        console.error('Newsletter API key is missing');
        return {
          success: false,
          error: 'Service configuration error'
        };
      }
  
      const response = await fetch(process.env.REACT_APP_NEWSLETTER_API_KEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            email: email,
            timestamp: new Date().toISOString()
          }]
        }),
      });
  
      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Subscription failed:', response.status, errorData);
        return {
          success: false,
          status: response.status,
          error: errorData.message || 'Subscription failed'
        };
      }
  
      const data = await response.json();
      return {
        success: data.created === 1,
        data
      };
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return {
        success: false,
        error: error.message || 'Network error occurred'
      };
    }
  };

