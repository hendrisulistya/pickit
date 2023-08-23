import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-400">
      <svg
        className="w-64 h-64 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <h1 className="text-white text-3xl font-semibold mt-4">Delivery Service App</h1>
      <p className="text-white text-lg mt-2">Experience fast and reliable delivery services.</p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-400 font-semibold rounded-full hover:bg-blue-100">
      <Link to="/request" className="flex items-center space-x-2">Launch App</Link>
      </button>
    </div>
  );
};

export default Home;
