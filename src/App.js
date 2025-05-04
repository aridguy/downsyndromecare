import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './NoPage';
import Home from './routes/home/Home';
import About from './routes/about/About';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;
