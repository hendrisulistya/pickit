import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-violet-200">
      <svg viewBox="0 0 1024 1024" className="icon w-1/12 h-1/12" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M425.176 123.4h554.432v424.992H425.176z" fill="#E6246B"></path>
    <path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V543.624H425.976V241.288l-234.064-0.768L40.92 492.192V723.36c0 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#F6B246"></path>
    <path d="M893.832 809.152c47.384 0 85.784-38.392 85.784-85.784V603.832H40.92V723.36c0 47.392 38.392 85.784 85.752 85.784h767.16z" fill="#DB7711"></path>
    <path d="M853.728 824.552c0 56.152-45.504 101.592-101.6 101.592-56.152 0-101.592-45.448-101.592-101.592 0-56.096 45.448-101.6 101.592-101.6 56.088 0 101.6 45.512 101.6 101.6zM379.584 824.552c0 56.152-45.48 101.592-101.6 101.592s-101.6-45.448-101.6-101.592c0-56.096 45.48-101.6 101.6-101.6s101.6 45.512 101.6 101.6z" fill="#0093D3"></path>
    <path d="M264.192 454.568H62.848l109.128-178.736h92.216z" fill="#E09431"></path>
  </g>
</svg>
      <h1 className="text-violet-700 text-3xl font-semibold mt-4">PICK IT Service</h1>
      <p className="text-violet-700 text-lg mt-2">Experience fast and reliable pickup services.</p>
      <button className="mt-6 px-6 py-3 bg-violet-700 text-violet-50 font-semibold rounded-full hover:bg-violet-500">
      <Link to="/request" className="flex items-center space-x-2">Launch App</Link>
      </button>
    </div>
  );
};

export default Home;
