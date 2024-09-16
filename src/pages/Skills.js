import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaJs, FaBootstrap, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', description: 'A powerful library for building dynamic user interfaces.', icon: <FaReact className="text-5xl md:text-6xl text-blue-500" /> },
  { name: 'Next.js', description: 'A React framework for server-side rendering and static site generation.', icon: <SiNextdotjs className="text-5xl md:text-6xl text-black" /> },
  { name: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid UI development.', icon: <SiTailwindcss className="text-5xl md:text-6xl text-blue-400" /> },
  { name: 'CSS', description: 'Cascading Style Sheets for styling and layout of web pages.', icon: <FaCss3Alt className="text-5xl md:text-6xl text-blue-600" /> },
  { name: 'HTML', description: 'The standard language for creating web pages and web applications.', icon: <FaHtml5 className="text-5xl md:text-6xl text-orange-600" /> },
  { name: 'JavaScript', description: 'A versatile programming language for web development.', icon: <FaJs className="text-5xl md:text-6xl text-yellow-500" /> },
  { name: 'Bootstrap', description: 'A framework for developing responsive, mobile-first websites.', icon: <FaBootstrap className="text-5xl md:text-6xl text-purple-600" /> },
  { name: 'MySQL', description: 'A popular relational database management system.', icon: <FaDatabase className="text-5xl md:text-6xl text-blue-800" /> },
];

const Skills = () => {
  return (
    <section id="Skills" className="relative py-20 md:py-24 bg-gradient-to-br from-blue-800 via-purple-800 to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto text-center relative z-20 px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          As a developer, I have honed my skills in various technologies to build robust and scalable web applications. Here’s a showcase of the technologies I use and what makes them stand out.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center transform transition-transform duration-500 ease-in-out hover:scale-110 group"
              whileHover={{ scale: 1.15 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-full mb-3 md:mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600 transition duration-500">
                {skill.icon}
              </div>
              <motion.span
                className="text-sm md:text-xl font-bold text-gray-200 group-hover:text-white transition duration-500"
              >
                {skill.name}
              </motion.span>
             
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 z-10" />
        <motion.div
          className="absolute top-32 left-6 md:top-20 md:left-10 text-7xl md:text-9xl text-blue-500 opacity-20"
          animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <FaReact />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-6 md:bottom-32 md:right-16 text-7xl md:text-9xl text-yellow-500 opacity-20"
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <FaJs />
        </motion.div>
      </div>

      {/* Animated Particles */}
      <motion.div
        className="absolute -bottom-20 right-0 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-30 rounded-full filter blur-2xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Wave SVG at Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-40 text-gray-900 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,256L1440,160L1440,320L0,320Z"
        />
      </svg>
    </section>
  );
}

export default Skills;
