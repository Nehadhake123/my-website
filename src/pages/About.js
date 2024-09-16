import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-black min-h-screen py-16 px-6 lg:px-24 text-gray-100">
      {/* Page Title */}
      <motion.h1
       id="about"
        className="text-4xl md:text-6xl font-extrabold text-center mb-12 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-blue-200 to-purple-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        About Me
      </motion.h1>

      {/* Work Experience Section */}
      <div className="mb-6 md:mb-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-300 flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FaBriefcase className="text-green-400 text-2xl md:text-3xl" />
          Work Experience
        </motion.h2>

        {/* Horizontal Timeline */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-1 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 h-full"></div>
          <div className="relative space-y-8 md:space-y-12 pl-8 md:pl-10">
            {/* Timeline Item: Internship */}
            <motion.div
              className="flex flex-col md:flex-row items-start gap-4 md:gap-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg w-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Frontend Developer Internship</h3>
                <p className="text-lg text-gray-300">AditayaKiran Entertainment & Hospitality Technologies LLC</p>
                <p className="text-sm text-gray-500 mb-2">May 2024 - Present</p>
                <p className="text-gray-400 leading-relaxed">
                  Contributed to a responsive real estate web application, focusing on UI design, interactive components, 
                  and enhancing user experience. Used Tailwind CSS and React.js to create reusable components for a seamless 
                  experience across devices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div>
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-300 flex items-center gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <FaUniversity className="text-blue-400 text-2xl md:text-3xl" />
          Education
        </motion.h2>

        {/* Education Cards */}
        <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
          {/* Education Card 1 */}
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Bachelor of Technology (B.Tech)</h3>
            <p className="text-lg text-gray-300 mb-2">Godavari College Of Engineering, Jalgaon</p>
            <p className="text-sm text-gray-400">CGPA: 8.19</p>
          </motion.div>

          {/* Education Card 2 */}
          <motion.div
            className="p-4 md:p-6 bg-gradient-to-r from-purple-800 to-pink-800 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Full Stack Developer Training</h3>
            <p className="text-lg text-gray-300 mb-2">Online Certification</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
