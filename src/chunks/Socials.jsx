import React, { useState } from 'react';
// import './Socials.css'; // We'll create this CSS file

const Socials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      'https://feedburner.google.com/fb/a/mailverify?uri=barreldotim',
      'popupwindow',
      'scrollbars=yes,width=550,height=520'
    );
    return true;
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
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
            />
            <br />
            <input className="logo-ani" name="submit" type="submit" value="Subscribe" />
            <input name="uri" type="hidden" value="barreldotim" />
          </form>
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