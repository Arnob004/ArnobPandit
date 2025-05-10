import React, { createContext, useContext, useState, useEffect } from "react";

const BtnContext = createContext();

export const BtnProvider = ({ children }) => {
    const [isActive, setIsActive] = useState(false);

    // Get dark mode preference from localStorage, default to true
    const [DarkMode, setDrakMode] = useState(() => {
        const storedMode = localStorage.getItem("DarkMode");
        return storedMode ? JSON.parse(storedMode) : true;
    });

    const toggleBtn = () => {
        setIsActive(prev => !prev);
    };

    const toggleMode = () => {
        setDrakMode(prev => !prev);
    };

    // Update localStorage whenever DarkMode changes
    useEffect(() => {
        localStorage.setItem("DarkMode", JSON.stringify(DarkMode));
    }, [DarkMode]);

    return (
        <BtnContext.Provider value={{ toggleMode, DarkMode, isActive, toggleBtn }}>
            {children}
        </BtnContext.Provider>
    );
};

export const useBtnContext = () => useContext(BtnContext);
