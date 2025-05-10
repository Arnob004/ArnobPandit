import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useBtnContext } from '../Context/BtnContext';
import { Moon, Sun } from 'lucide-react';
const Navber = ({ DarkMode }) => {
    const { isActive, DrakMode, toggleMode, toggleBtn } = useBtnContext();

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: -5 }}
                transition={{ duration: 1.3 }}
                className="w-full justify-between flex sm:px-28 px-5 items-center h-24 z-50 fixed top-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0">
                <div className={`w-10 h-10 rounded-full z-0 cursor-pointer ${DarkMode ? "text-gray-700" : "text-white"} border-3 flex items-center justify-center`}>
                    <div className={`w-6 h-6 hover:border-none duration-300 animate-pulse ${DarkMode ? "text-gray-700" : "text-white"} rounded-full border-2`}></div>
                </div>
                <div className="">
                    <div className="flex justify-center sm:gap-7 gap-2">
                        <motion.div
                            whileTap={{ scale: 1.1 }}
                            onClick={toggleMode} className={`w-8 h-8 duration-300 flex justify-center items-center border ${DarkMode ? "text-gray-700" : "text-white"} rounded-full`}>
                            {DrakMode ? <Sun /> : <Moon />}
                        </motion.div>
                        <div
                            onClick={toggleBtn}
                            className="w-10 h-10 relative hover:animate-pulse cursor-pointer z-50 group"
                        >
                            {/* Top Line */}
                            <span
                                className={`absolute left-0 h-[4px] w-8 ${DarkMode ? "bg-gray-700" : "bg-white"} rounded-md transition-all duration-300 ${isActive ? "rotate-45 top-4" : "top-2"}`}
                            ></span>

                            {/* Bottom Line */}
                            <span
                                className={`absolute left-0 h-[4px] w-8 ${DarkMode ? "bg-gray-700" : "bg-white"} rounded-md transition-all duration-300 ${isActive ? "-rotate-45 top-4" : "top-5"}`}
                            ></span>
                        </div>

                    </div>
                </div>

            </motion.div >
        </div >
    );
}

export default Navber;