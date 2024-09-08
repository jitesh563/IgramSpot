import React from 'react';
import { FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://x.com/JiteshKumar173" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/jiteshkumar_017/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:jitesh8545@gmail.com" className="hover:text-yellow-400 transition-colors">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;