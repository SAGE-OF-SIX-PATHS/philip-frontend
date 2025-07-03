import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle: React.FC = () => {
          const [darkMode, setDarkMode] = useState(true); // ✅ default: dark mode ON

          useEffect(() => {
                    document.body.className = darkMode ? "dark" : "";
          }, [darkMode]);

          return (
                    <div
                              onClick={() => setDarkMode(!darkMode)}
                              className={`w-12 h-6 flex items-center rounded-full cursor-pointer px-1 ${darkMode ? "bg-gray-200" : "bg-gray-800"
                                        }`}
                    >
                              <motion.div
                                        className={`w-5 h-5 rounded-full shadow-md ${darkMode ? "bg-black" : "bg-white"
                                                  }`}
                                        layout
                                        transition={{
                                                  type: "spring",
                                                  stiffness: 300,
                                                  damping: 20,
                                        }}
                                        style={{
                                                  x: darkMode ? 24 : 0,
                                        }}
                              />
                    </div>
          );
};

export default ThemeToggle;
