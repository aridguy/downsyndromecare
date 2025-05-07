import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Welcome to My App</h1>
            <p className="text-center">This is a simple React application.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <img src="./logo.svg" alt="Logo" className="logo" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
