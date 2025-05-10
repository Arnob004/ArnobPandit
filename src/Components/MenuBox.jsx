import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useBtnContext } from '../Context/BtnContext';
import { Facebook, Github, icons, Instagram, Linkedin, Menu, X } from "lucide-react";

const MenuBox = ({ scroll, DarkMode }) => {
    const { toggleBtn } = useBtnContext();
    useEffect(() => {
        if (scroll) scroll.stop(); // Pause scroll on mount
        return () => {
            if (scroll) scroll.start(); // Resume on unmount
        };
    }, [scroll]);
    const containerVariants = {
        hidden: { opacity: 0, y: -1000 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                when: "beforeChildren",
                staggerChildren: 0.5, // delay between child animations
            },
        },
        exit: {
            opacity: 0,
            y: -1000,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };
    return (
        <div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`fixed top-0 left-0 w-full h-screen overflow-x-hidden ${!DarkMode ? "bg-gray-900" : "bg-white"} z-50 flex flex-col`}
            >
                {/* Close Button */}
                <div className="flex justify-end sm:py-7 py-5 px-5 sm:px-34 bg--400">
                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        onClick={toggleBtn}
                        className="w-10 h-10 relative cursor-pointer group"
                    >
                        <span className={`absolute left-0 top-4 h-[4px] w-8 ${DarkMode ? "bg-gray-700" : "bg-white"} rounded-md rotate-45 transition-all duration-300`}></span>
                        <span className={`absolute left-0 top-4 h-[4px] w-8 ${DarkMode ? "bg-gray-700" : "bg-white"} rounded-md -rotate-45 transition-all duration-300`}></span>
                    </motion.div>
                </div>
                {/* Menu Content */}
                <motion.div
                    variants={containerVariants}
                    className="flex-1 grid grid-cols-1 md:grid-cols-2 items-center justify-center bg--400 p-4 gap-4"
                >
                    {/* Left side: Menu Items */}
                    <div className="flex flex-col gap-7 items-center justify-center">
                        {["home", "project", "about me"].map((text) => (
                            <motion.div
                                key={text}
                                variants={itemVariants}
                                // onClick={() => alert("click")}
                                className={`underline-animation ${!DarkMode ? "underline-animation-white text-white" : "text-black underline-animation-black"} cursor-pointer  text-center text-4xl font-inter capitalize p-3`}
                            >
                                {text}
                            </motion.div>
                        ))}
                    </div>
                    {/* Right side: Social Icons */}
                    <div className="flex flex-wrap justify-center sm:gap-1 gap-4">
                        {[Github, Linkedin, Instagram, Facebook].map((Icon, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                    delay: 2.5,
                                }}
                                className="sm:w-72 w-16 h-16 sm:h-60 sm:p-9 duration-1000 flex items-end p-4 sm:rounded-none hover:bg-cyan-500 rounded-full text-white bg-black"
                            >
                                <div className="flex flex-col gap-0.5">
                                    <Icon size={35} />
                                    <span className="capitalize hidden sm:block text-4xl">email</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default MenuBox;
