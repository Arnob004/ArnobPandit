import React from 'react';
import { motion } from "framer-motion";

const Description = ({ DarkMode }) => {
    const buttons = ["about me"];

    return (
        <div>
            {/* Heading */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        },
                    },
                }}
                className="flex flex-wrap"
            >
                {"Hi, I'm Arnob Pandit".split("").map((char, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { x: 0, opacity: 0 },
                            visible: {
                                x: [0, -5, 5, 0],
                                opacity: 1,
                                transition: {
                                    duration: 1,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 1.5,
                                },
                            },
                        }}
                        className={`inline-block text-[28px] sm:text-5xl font-inter font-medium ${DarkMode ? "text-gray-900" : "text-white"}`}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            {/* Subheading */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className={`font-inter text-[32px] mt-1.5 font-medium sm:text-7xl ${DarkMode ? "text-gray-00" : "text-white"}`}
            >
                I turn logic into pixels
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                className={`font-inter font-medium mt-4 max-w-2xl ${DarkMode ? "text-gray-700" : "text-white"} text-lg`}
            >
                I am a Creative Developer and Web Designer specializing in creating web
                apps with clean user interface and optimized user experience.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex mt-6 gap-4">
                {buttons.map((text, index) => (
                    <motion.div
                        key={text}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 1 + index * 0.7 }}
                        className={`relative group overflow-hidden w-[150px] h-[50px] rounded ${!DarkMode ? "bg-white text-black" : "bg-black text-white"} font-medium flex items-center justify-center cursor-pointer`}
                    >
                        {/* Button Text */}
                        <span className="relative z-10 capitalize">{text}</span>
                        {/* Overlay Reveal Effect */}
                        <motion.div
                            initial={{ y: 0 }}
                            animate={{ y: "-100%" }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: 1.1 + index * 0.2 }}
                            className="absolute inset-0 bg-[#f3e8e0] z-0"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Description;
