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
import Blog from './routes/blog/Blog';
import Projects from './routes/projects/Projects'
import TawkTo from './components/TawkTo';
import Donation from './routes/donation/Donation';

function App() {
  return (
    <main>
      <TawkTo />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="donation" element={<Donation />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
