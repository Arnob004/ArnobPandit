import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({
  imgSrc,
  Projectlink,
  title,
  description,
  bgColor = "bg-white",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative w-full sm:w-80 md:w-96 lg:w-[28rem] p-5 ${bgColor} shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.03]`}
    >
      {/* Image Section */}
      <div className="relative group rounded-xl overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-60 sm:h-72 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 text-sm sm:text-base mb-4">
            {description}
          </p>
          <a href={`${Projectlink}`}>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold py-2 px-5 rounded-full flex items-center gap-2 hover:brightness-110 transition duration-300">
              View Project <ArrowRight size={18} />
            </button>
          </a>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["React", "Node.js", "TailwindCSS", "MongoDB"].map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
