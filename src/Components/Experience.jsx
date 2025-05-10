import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react'; // Icons for job title and duration

const experiences = [
    {
        title: 'Frontend Developer',
        company: 'TechVision Inc.',
        duration: 'Jan 2023 - Present',
        description: 'Developed responsive user interfaces using React, Tailwind CSS, and optimized performance across devices.',
    },
    {
        title: 'UI/UX Designer',
        company: 'Creative Coders',
        duration: 'Jul 2021 - Dec 2022',
        description: 'Designed intuitive user experiences and collaborated with developers to bring designs to life.',
    },
    {
        title: 'Intern - Web Developer',
        company: 'CodeSprint',
        duration: 'Jan 2021 - Jun 2021',
        description: 'Built small components and contributed to open-source frontend libraries.',
    },
];
const Experience = ({ DarkMode }) => {
    const bgColor = !DarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    const cardBg = !DarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black";

    return (
        <section className={`w-full py-20 px-8 ${bgColor}`}>
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Professional Experience
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`rounded-lg shadow-lg p-8 border ${cardBg} border-gray-200`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <Briefcase className="text-teal-400 text-xl" />
                                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                            </div>

                            <div className="flex items-center space-x-2 text-sm text-teal-500 font-medium">
                                <Calendar className="text-teal-400" />
                                <span>{exp.company} | {exp.duration}</span>
                            </div>

                            <p className="mt-4 text-base text-center text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
