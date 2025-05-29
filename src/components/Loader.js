import React from 'react';
// import './Loader.css'; // We'll place the CSS in this file

const Loader = ({ message = "Loading, please wait..." }) => {
  return (
    <div
      style={{
        height: '100vh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 9999,
      }}
    >
      <span className="loader"></span>
      <p style={{ marginTop: '1rem' }}>{message}</p>
    </div>
  );
};

export default Loader;
