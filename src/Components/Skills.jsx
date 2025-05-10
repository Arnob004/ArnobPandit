import React from 'react';
import {
    Code, Server, Database, Palette, Zap, ShieldCheck, Atom,
    Braces, TerminalSquare, LayoutDashboard, GitBranch, Wrench, Cloud, Network
} from 'lucide-react';

const skills = [
    { name: "HTML", icon: <Code size={32} className="text-orange-400" /> },
    { name: "CSS", icon: <Palette size={32} className="text-blue-400" /> },
    { name: "JavaScript", icon: <Zap size={32} className="text-yellow-400" /> },
    { name: "React", icon: <Atom size={32} className="text-cyan-400" /> },
    { name: "Node.js", icon: <Server size={32} className="text-green-400" /> },
    { name: "MongoDB", icon: <Database size={32} className="text-green-500" /> },
    { name: "Express.js", icon: <TerminalSquare size={32} className="text-gray-400" /> },
    { name: "TailwindCSS", icon: <Braces size={32} className="text-teal-400" /> },
    { name: "Git & GitHub", icon: <GitBranch size={32} className="text-red-400" /> },
    { name: "REST API", icon: <Network size={32} className="text-blue-500" /> },
    { name: "Firebase", icon: <Cloud size={32} className="text-orange-300" /> },
    { name: "JWT/Auth", icon: <ShieldCheck size={32} className="text-purple-400" /> },
];
const Skills = ({ DarkMode }) => {
    return (
        <section
            className={`w-full min-h-screen px-6 py-20 transition-colors duration-500 ${!DarkMode ? "bg-[#0f172a] text-white" : "bg- text-gray-900"
                }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className={`text-4xl md:text-5xl font-extrabold mb-4`}>
                    My Tech Stack
                </h2>
                <p className={`mb-12 text-base md:text-lg ${!DarkMode ? "text-gray-400" : "text-gray-600"
                    }`}>
                    Tools and technologies I work with every day
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`rounded-xl p-6 flex flex-col items-center justify-center transition duration-300 transform hover:scale-105 border shadow-md ${!DarkMode
                                ? "bg-[#1e293b] border-[#334155] hover:bg-[#1f2937] hover:border-cyan-400 hover:shadow-cyan-500/30"
                                : "bg-gray-100 border-gray-300 hover:bg-white hover:border-blue-400 hover:shadow-blue-300/30"
                                }`}
                        >
                            <div className="mb-3">{skill.icon}</div>
                            <p className={`text-sm font-semibold ${!DarkMode ? "text-gray-100" : "text-gray-800"
                                }`}>
                                {skill.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
