import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedIn from "../assets/icons/linkedin.png";
import Github from "../assets/icons/github-sign.png";
import Aditya from "../assets/icons/aditya.jpg";
import Pranav from "../assets/icons/pranav.jpg";
import Shourya from "../assets/icons/shourya.jpg";
import Soham from "../assets/icons/soham.jpg";

const teamMembers = [
  {
    name: "Aditya Pillai",
    image: Aditya,
    linkedin: "https://www.linkedin.com/in/aditya-pillai-3a92522b4",
    github: "https://github.com/A23droid",
  },
  {
    name: "Pranav Shewale",
    image: Pranav,
    linkedin: "https://www.linkedin.com/in/pranav-shewale",
    github: "https://github.com/B",
  },
  {
    name: "Shourya Agrawal",
    image: Shourya,
    linkedin: "https://www.linkedin.com/in/shourya-agrawal-54a5522b0",
    github: "https://github.com/quwrof00",
  },
  {
    name: "Soham Chakraborty",
    image: Soham,
    linkedin: "https://www.linkedin.com/in/soham-chakraborty-b35107289",
    github: "https://github.com/sohamchakro",
  },
];

const About = () => {
  return (
    <motion.div
      className="bg-gradient-to-b from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      

      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl text-black dark:text-white font-bold text-center mt-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Meet Team Pluto 🚀
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg dark:text-gray-400 text-gray-700 mt-3 text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        A team of innovators, problem-solvers, and dreamers pushing boundaries to create meaningful solutions.
      </motion.p>

      {/* Team Grid (2x2 layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 max-w-4xl w-full">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="dark:bg-gray-700 bg-white dark:text-white hover:bg-gray-300 text-black p-6 rounded-lg shadow-lg text-center dark:hover:bg-gray-700 transition"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
          >
            <img
              src={member.image}
              alt={member.name}
              onError={(e) => (e.target.src = "https://via.placeholder.com/100")}
              className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-2 border-black dark:border-white object-cover"
            />
            <h2 className="mt-4 text-lg sm:text-xl font-semibold">{member.name}</h2>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-4">
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 justify-center hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-5 h-5" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 justify-center hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={Github} alt="GitHub" className="w-5 h-5" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        className="mt-10 text-gray-400 text-sm text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Made with ❤ by Team Pluto | Innovating for the Future
      </motion.p>
    </motion.div>
  );
};

export default About;
