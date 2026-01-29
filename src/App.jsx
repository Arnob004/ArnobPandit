import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navber from "./Components/Navber";
import MenuBox from "./Components/MenuBox";
import Description from "./Components/Description";
import { useBtnContext } from "./Context/BtnContext";
import Project from "./Components/Project";
import CostomCursor from "./Components/CostomCursor";
import Lenis from "@studio-freight/lenis";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";


const App = () => {
  const { isActive, DarkMode } = useBtnContext();
  const [scrollInstance, setScrollInstance] = useState(null);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    setScrollInstance(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className={`relative md:w-full duration-300 ${DarkMode ? "bg-[#f3e8e0]" : "bg-[#0f172a]"} min-h-screen`}>
        <CostomCursor />
        {/* Navigation and Menu */}
        <Navber DarkMode={DarkMode} />
        <AnimatePresence>{isActive && <MenuBox DarkMode={DarkMode} scroll={scrollInstance} />}</AnimatePresence>
        {/* Main Scrollable Content */}
        <div className="w-full overflow-hidden  max-w-7xl sm:px-36 px-6 pt-36 sm:pt-36 relative">
          {/* Animated Circles */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: [250, 140, 40, 250, 100, 250],
              y: [-100, -100, 10, 0, -100, 50, -100],
            }}
            transition={{
              scale: { delay: 2, duration: 1.5, ease: "easeOut" },
              opacity: { delay: 2, duration: 1.5, ease: "easeOut" },
              x: { delay: 2, duration: 25, repeat: Infinity, ease: "easeInOut" },
              y: { delay: 2, duration: 40, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute rounded-full border-[0.2px]
          h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]
          z-0 pointer-events-none top-20 sm:top-40 left-[-100px] sm:left-[200px]
          ${DarkMode ? "border-gray-500" : "border-white"}`}
          />
           
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              x: [550, 450, 450, 550, 450, 550],
              y: [200, 100, 150, 200, 150, 200],
            }}
            transition={{
              scale: { delay: 2.2, duration: 1.5, ease: "easeOut" },
              opacity: { delay: 2.2, duration: 1.5, ease: "easeOut" },
              x: { delay: 2.2, duration: 20, repeat: Infinity, ease: "easeInOut" },
              y: { delay: 2.2, duration: 20, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`absolute rounded-full border-[0.2px]
          h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]
          z-0 pointer-events-none top-10 left-[-150px] sm:left-[-300px] md:top-20 md:left-60
          ${DarkMode ? "border-gray-500" : "border-white"}`}
          />
          {/* Page Sections */}
          <Description DarkMode={DarkMode} />
          <Project DarkMode={DarkMode} />
          <Skills DarkMode={DarkMode} />
          <Experience DarkMode={DarkMode} />
          <Contact DarkMode={DarkMode} />
        </div>
      </div>
    </>
  );
};
export default App;
