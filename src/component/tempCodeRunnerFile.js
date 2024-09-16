import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <div>
          <a href="#about" className="mx-4 hover:text-yellow-300">About</a>
          <a href="#projects" className="mx-4 hover:text-yellow-300">Projects</a>
          <a href="#contact" className="mx-4 hover:text-yellow-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
