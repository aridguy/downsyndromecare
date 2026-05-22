import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './NoPage';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Volunteer from './routes/Volunteer/Volunteer';
import Faq from './routes/faq/Faq';
import Articles from './routes/articles/Articles';
import Projects from './routes/projects/Projects'
// import TawkTo from './components/TawkTo';
import Donation from './routes/donation/Donation';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import TermsConsentPopup from './components/TermsConsentPopup';

function App() {
  return (
    <BrowserRouter>
      {/* Popup is now INSIDE Router so it can detect routes */}
      <TermsConsentPopup />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="faq" element={<Faq />} />
        <Route path="articles" element={<Articles />} />
        <Route path="donation" element={<Donation />} />
        <Route path="projects" element={<Projects />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
        {/* Fixed: changed from 'termsandcondition' to match your component name */}
        <Route path="termsandconditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;