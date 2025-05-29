// import { useEffect } from 'react';

// const TawkTo = () => {
//   useEffect(() => {
//     // Prevent duplicate script injection
//     if (window.Tawk_API && window.Tawk_API.visitor) return;

//     // Create script element
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://embed.tawk.to/681fb501f9a53b190b2904f1/1iqttm46s';
//     script.charset = 'UTF-8';
//     script.setAttribute('crossorigin', '*');
    
//     // Insert script
//     const firstScript = document.getElementsByTagName('script')[0];
//     firstScript.parentNode.insertBefore(script, firstScript);

//     // Cleanup function
//     return () => {
//       const tawkEl = document.getElementById('tawkId');
//       if (tawkEl) tawkEl.remove();
//     };
//   }, []);

//   return null; // This component doesn't render anything
// };

// export default TawkTo;