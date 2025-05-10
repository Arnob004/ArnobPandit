import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ DarkMode }) => {
    return (
        <section
            className={`w-full min-h-screen py-1 transition-colors duration-300 ${!DarkMode ? "bg-gray-900 text-white" : "bg- text-black"}`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Get In Touch
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* Contact Form */}
                    <motion.form
                        className={`rounded-3xl p-8 shadow-2xl space-y-3 border ${!DarkMode ? "bg-white/10 border-white/20" : "bg-white border-gray-200"}`}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <label className={`block text-sm mb-1 ${!DarkMode ? "text-white" : "text-gray-800"}`}>Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className={`w-full p-3 rounded-xl border placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${!DarkMode
                                    ? "bg-white/20 text-white border-white/30 placeholder-white"
                                    : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"
                                    }`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm mb-1 ${!DarkMode ? "text-white" : "text-gray-800"}`}>Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className={`w-full p-3 rounded-xl border placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${!DarkMode
                                    ? "bg-white/20 text-white border-white/30 placeholder-white"
                                    : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"
                                    }`}
                            />
                        </div>

                        <div>
                            <label className={`block text-sm mb-1 ${!DarkMode ? "text-white" : "text-gray-800"}`}>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Your message..."
                                className={`w-full p-3 rounded-xl border placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${!DarkMode
                                    ? "bg-white/20 text-white border-white/30 placeholder-white"
                                    : "bg-gray-100 text-black border-gray-300 placeholder-gray-500"
                                    }`}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold py-3 rounded-xl text-white"
                        >
                            Send Message
                        </button>
                    </motion.form>

                    {/* Contact Info */}
                    <motion.div
                        className={`flex flex-col justify-center gap-6 rounded-3xl p-8 shadow-2xl border ${!DarkMode ? "bg-white/10 border-white/20" : "bg-white border-gray-200"}`}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 text-lg">
                            <Mail className="text-cyan-400" /> <span>you@example.com</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <Phone className="text-cyan-400" /> <span>+91 12345 67890</span>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <MapPin className="text-cyan-400" /> <span>Kolkata, India</span>
                        </div>

                        <div className="mt-8">
                            <p className="mb-3 font-semibold">Follow Me</p>
                            <div className="flex gap-5 text-cyan-400 text-2xl">
                                <a href="#" className="hover:scale-110 transition"><Github /></a>
                                <a href="#" className="hover:scale-110 transition"><Linkedin /></a>
                                <a href="#" className="hover:scale-110 transition"><Facebook /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
