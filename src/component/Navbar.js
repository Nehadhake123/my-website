import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (position / maxScroll) * 100; 
      setScrollPosition(scrollPercent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-800 to-black p-4 md:p-6 text-white shadow-lg fixed w-full z-50 backdrop-filter backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Brand Logo */}
        <motion.a
          href="https://github.com/Nehadhake123"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl font-bold tracking-tight cursor-pointer flex items-center space-x-2"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 15px rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="text-5xl mr-2" />
        </motion.a>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <motion.a
            href="#about"
            className="flex items-center space-x-2 text-lg font-semibold transition-transform duration-300 ease-in-out hover:underline hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser className="text-2xl" />
            <span>About</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="flex items-center space-x-2 text-lg font-semibold transition-transform duration-300 ease-in-out hover:underline hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaProjectDiagram className="text-2xl" />
            <span>Projects</span>
          </motion.a>
          <motion.a
            href="#Skills"
            className="flex items-center space-x-2 text-lg font-semibold transition-transform duration-300 ease-in-out hover:underline hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTools className="text-2xl" />
            <span>Skills</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="flex items-center space-x-2 text-lg font-semibold transition-transform duration-300 ease-in-out hover:underline hover:text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-2xl" />
            <span>Contact</span>
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center space-x-4 relative">
          <motion.div
            className="text-3xl cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </motion.div>
          {isMenuOpen && (
            <motion.div
              className="absolute top-14 right-0 bg-gradient-to-r from-blue-800 via-purple-700 to-black text-white rounded-lg shadow-xl flex flex-col items-start space-y-4 py-4 px-6 z-40"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href="#about"
                className="flex items-center space-x-2 text-xl font-medium transition-transform duration-300 hover:text-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="text-2xl" />
                <span>About</span>
              </motion.a>
              <motion.a
                href="#projects"
                className="flex items-center space-x-2 text-xl font-medium transition-transform duration-300 hover:text-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaProjectDiagram className="text-2xl" />
                <span>Projects</span>
              </motion.a>
              <motion.a
                href="#Skills"
                className="flex items-center space-x-2 text-xl font-medium transition-transform duration-300 hover:text-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaTools className="text-2xl" />
                <span>Skills</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center space-x-2 text-xl font-medium transition-transform duration-300 hover:text-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <FaEnvelope className="text-2xl" />
                <span>Contact</span>
              </motion.a>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Border with Scroll-based Animation */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
        style={{ width: `${scrollPosition}%` }}
        transition={{ ease: "linear", duration: 0.5 }}
      />
    </nav>
  );
};

export default Navbar;
