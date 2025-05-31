import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NoPage = () => {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/contact'); // Change to '/' if you want to redirect to home
    }, 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 text-gray-800" style={{marginTop: "15em"}}>
      <div className="text-center p-8 bg-white rounded-2xl shadow-md max-w-md w-full mx-4">
        <img
          src="https://img.icons8.com/ios-filled/100/error--v1.png"
          alt="404 Icon"
          className="mx-auto mb-6 w-20 h-20 opacity-70"
        />
        <h1 className="text-4xl font-bold text-red-600 mb-2">404</h1>
        <p className="text-xl font-semibold mb-4">Oops! Page not found.</p>
        <p className="text-gray-600 mb-6">
          It seems the page you’re looking for doesn't exist. But don’t worry — we’re here to help!
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 text-gray-800 px-5 py-2 rounded-xl hover:bg-gray-300 transition"
          >
            Contact Us
          </Link>
        </div>
        <h1 className="text-sm text-red-500">Redirecting in {seconds} second{seconds !== 1 && 's'}...</h1>
        <p className="text-sm text-gray-400 mt-4">Together, we make a difference.</p>
      </div>
    </div>
  );
};

export default NoPage;
