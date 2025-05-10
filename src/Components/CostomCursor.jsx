import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
const CostomCursor = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    useEffect(() => {
        if (window.innerWidth < 768) return; // skip on mobile
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);
    return (
        <div>
            <motion.div
                animate={{ scale: [0.9, 1.5, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: pos.y - 14, left: pos.x - 14 }}
                className="fixed w-8 h-8 hidden md:block rounded-full border-black bg-teal-400"
            ></motion.div>
        </div >
    );
}

export default CostomCursor;
