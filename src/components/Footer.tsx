import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Creatyv.io. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Legal Entity: José Antonio Duran Herrera · Business Type: Sole Proprietor · Brand Name: Creatyv.io
        </p>
      </div>
    </footer>
  );
};

export default Footer;
