'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left - Logo */}
        <div>
          <img
            src="/images/car.png" // Replace with your logo image path
            alt="Logo"
            style={{
              height: '40px', // Set logo height
              transform: 'scale(1.3)', // Apply scale transform
            }}
          />
        </div>

        {/* Center - Text */}
        <div className="text-center">
          <a className="text-white text-decoration-none">
            All Rights Reserved to CarGo 2025
          </a>
        </div>

        {/* Right - Social Media Icons */}
        <div>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}