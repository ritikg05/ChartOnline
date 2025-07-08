import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 px-6 py-12 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm"
      >
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Chart Online</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Easily convert Excel data to beautiful charts. Designed for clarity, speed, and simplicity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#converter" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">Excel to Graph</a></li>
            <li><a href="#features" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">Features</a></li>
            <li><a href="#pricing" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">Pricing</a></li>
            <li><a href="#faq" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">FAQs</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-md font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">About Us</a></li>
            <li><a href="#contact" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a></li>
            <li><a href="#privacy" className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-md font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-lg mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-400"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-400"><FaGithub /></a>
            <a href="#" aria-label="Twitter" className="hover:text-indigo-600 dark:hover:text-indigo-400"><FaTwitter /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Chart Online. All rights reserved.
      </div>

      {/* Back to top button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md transition"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
