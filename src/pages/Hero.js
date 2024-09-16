import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const firstLine = "Hi, I'm";
  const secondLine = "Neha  Dhake"; // Added extra space between "Neha" and "Dhake"

  // Animation for each letter
  const springs = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 50 },
    reset: true
  });

  return (
    <section className="relative h-screen bg-[#121212] text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-[#FF6F00] to-[#FF3D00] opacity-30 rounded-full filter blur-xl"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#00BFFF] to-[#1E90FF] opacity-20 rounded-full filter blur-xl"
          animate={{ rotate: [0, -360] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-32">
        <div className="mb-6 max-w-xl text-shadow-md">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-2"
            initial={{ opacity: 0, y: -60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <div>
              {firstLine.split('').map((letter, index) => (
                <animated.span
                  key={index}
                  style={{
                    ...springs,
                    display: 'inline-block',
                    transitionDelay: `${index * 75}ms`,
                  }}
                >
                  {letter}
                </animated.span>
              ))}
            </div>
            <div className="mt-3">
              {secondLine.split('').map((letter, index) => (
                <animated.span
                  key={index}
                  style={{
                    ...springs,
                    display: 'easein-out',
                    transitionDelay: `${index * 75}ms`,
                  }}
                >
                  {letter}
                </animated.span>
              ))}
            </div>
          </motion.h1>
        </div>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wider max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
          whileHover={{ 
            x: 5, 
            color: "#FF6F00", 
            textShadow: "0 0 20px rgba(255, 111, 0, 0.8)" 
          }}
        >
          Crafting Innovative Digital Experiences
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-6 md:gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
        >
          <motion.a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF3D00] text-white font-semibold rounded-lg shadow-lg hover:from-[#FF3D00] hover:to-[#FF6F00] transition-transform transform hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-[#FF6F00] text-[#FF6F00] font-semibold rounded-lg hover:bg-[#FF6F00] hover:text-white transition-transform transform hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.1, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)" }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <div className="mt-8 flex flex-col gap-4">
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1G0jB5HDAPLiyXyRQg3eFpGGWMOgnB6b5"
            className="flex items-center text-base md:text-lg text-gray-300 hover:text-white transition-transform transform hover:scale-105"
            download
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, color: "#FF6F00" }}
          >
            <FaDownload className="text-xl md:text-2xl" />
            <span className="ml-3">Download Resume</span>
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1G0jB5HDAPLiyXyRQg3eFpGGWMOgnB6b5/view?usp=drivesdk"
            className="flex items-center text-base md:text-lg text-gray-300 hover:text-white transition-transform transform hover:scale-105"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05, color: "#FF6F00" }}
          >
            <FaEye className="text-xl md:text-2xl" />
            <span className="ml-3">View Resume</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
