import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // To display success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwpejajo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: data,
      });

      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message');
      }
    } catch (error) {
      setStatus('Failed to send message');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-600 opacity-30"></div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <form className="max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
          <motion.input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name" 
            className="w-full p-4 text-black rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email" 
            className="w-full p-4 text-black rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 transition duration-300"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            className="w-full p-4 text-black rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 transition duration-300" 
            rows="4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          ></motion.textarea>
          <motion.button 
            type="submit" 
            className="px-6 py-3 md:px-8 md:py-4 bg-purple-600 text-white font-bold rounded-full shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Send Message
          </motion.button>
        </form>
        {status && <p className="mt-4 text-lg">{status}</p>}
      </div>
    </section>
  );
}

export default Contact;
