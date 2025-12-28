import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Project = ({ DarkMode }) => {
  const sectionTextColor = DarkMode ? "text-gray-900" : "text-white";

  const projects = [
    {
      imgSrc:
        "https://s.tmimgcdn.com/scr/1200x627/203100/marketkit-multipurpose-ecommerce-html-website-template_203166-original.jpg",
      projectLink: "https://cloudsensy.vercel.app",
      bgColor: "bg-white",
    },
    {
      imgSrc: "https://themesbrand.com/chatvia/images/demo/light.png",
      projectLink: "https://fs.vercel.app/",
      bgColor: "bg-white",
    },
    {
      imgSrc:
        "https://wrapmarketusercontent.com/assets/items/thumb/1c24602646588855a73729768ab99a4b5ba7b782b5faba3f8fbf16d5d3e3bf55.webp?v=1710580878",
      projectLink: "https://freshvage.vercel.app/",
      bgColor: "bg-white",
    },
    {
      imgSrc: "https://s3.envato.com/files/346085631/00-Vodi-Preview.jpg",
      projectLink: "https://fastee.vercel.app/",
      bgColor: "bg-white",
    },
  ];

  return (
    <section
      className="w-full mt-32 px-4 sm:px-8 md:px-12 lg:px-20"
      id="projects"
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={`font-inter text-4xl sm:text-5xl md:text-6xl font-bold mb-20 ${sectionTextColor} text-center`}
      >
        Projects
      </motion.h2>

      {/* Project Cards in Grid */}
      <div className="grid gap-16 lg:gap-20 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <ProjectCard imgSrc={project.imgSrc} Projectlink={project.projectLink} bgColor={project.bgColor} />
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8 }}
        className={`w-full text-center mt-20 text-3xl md:text-4xl font-semibold font-inter ${sectionTextColor} animate-pulse`}
      >
        <span className="px-5 text-2xl sm:px-10 sm:text-4xl hover:font-extralight duration-300 py-1.5 border rounded-full">
          + More Projects
        </span>
      </motion.div>
    </section>
  );
};

export default Project;
