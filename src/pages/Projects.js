import React from 'react';

const projects = [
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A classic tic-tac-toe game designed using HTML, CSS, and JavaScript. Play against the computer or with a friend!',
    link: 'https://tic-tac-toe-funproject.netlify.app/',
  },
  {
    title: 'E-commerce Website',
    description: 'An immersive e-commerce platform showcasing a range of electronic products. Explore the latest gadgets and deals!',
    link: 'https://digitalux-hub.netlify.app',
  },
  {
    title: 'Real Estate Web Application Development',
    description: 'A dynamic real estate web application that showcases property listings, interactive maps, and contact forms for inquiries.',
    link: 'https://housing-web.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10  bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Header with Glow */}
        <h2 className="text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-glow">
          My Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block relative p-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500 to-indigo-500 transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative bg-white text-center bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg transition-transform group-hover:scale-105 group-hover:translate-y-[-10px]">
                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-100 mb-3 group-hover:text-purple-300 transition-colors duration-300 ease-in-out">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Button */}
                <span className="relative justify-center inline-block px-6 py-2 font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-lg hover:bg-gradient-to-l hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 ease-in-out">
                  View Project
                </span>
              </div>

              {/* Advanced Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
