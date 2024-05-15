import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Big(O) Project. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy-policy" className="text-white hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="text-white hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
