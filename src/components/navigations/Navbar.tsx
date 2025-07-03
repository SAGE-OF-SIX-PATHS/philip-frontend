import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
          const [menuOpen, setMenuOpen] = useState(false);

          const sidebarVariants = {
                    closed: {
                              clipPath: "circle(0% at 90% 20%)",
                              transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 40,
                              },
                    },
                    open: {
                              clipPath: "circle(150% at 90% 20%)",
                              transition: {
                                        type: "spring",
                                        stiffness: 20,
                                        restDelta: 2,
                              },
                    },
          } as const; // ✅ Fix TypeScript type checking

          return (
                    <header
                              className="
        flex justify-between items-center 
        p-4 border border-gray-400 dark:border-gray-600 
        rounded-full mx-auto max-w-6xl 
        bg-white text-black dark:bg-black dark:text-white 
        overflow-x-hidden
        text-sm md:text-base
      "
                    >
                              <Logo />

                              <nav className="hidden md:flex gap-6 items-center">
                                        <NavLinks />
                                        <ThemeToggle />
                                        <button className="px-4 py-1.5 border border-black dark:border-white rounded-full">
                                                  Get in Touch
                                        </button>
                              </nav>

                              {/* Mobile menu toggle */}
                              <div className="md:hidden flex items-center gap-3">
                                        <ThemeToggle />
                                        <button
                                                  onClick={() => setMenuOpen(!menuOpen)}
                                                  className="p-2 border border-black dark:border-white rounded text-sm"
                                        >
                                                  ☰
                                        </button>
                              </div>

                              <AnimatePresence>
                                        {menuOpen && (
                                                  <motion.div
                                                            initial="closed"
                                                            animate="open"
                                                            exit="closed"
                                                            variants={sidebarVariants}
                                                            className="
              fixed top-0 right-0 bottom-0 left-0
              bg-white text-black dark:bg-gray-800 dark:text-white
              p-6 flex flex-col gap-6 z-50
              overflow-x-hidden text-sm
            "
                                                  >
                                                            <button
                                                                      onClick={() => setMenuOpen(false)}
                                                                      className="self-end mb-6 text-sm"
                                                            >
                                                                      ✕
                                                            </button>
                                                            <NavLinks mobile />
                                                            <button className="px-4 py-1.5 border border-black dark:border-white rounded-full w-fit text-sm">
                                                                      Get in Touch
                                                            </button>
                                                  </motion.div>
                                        )}
                              </AnimatePresence>
                    </header>
          );
};

export default Navbar;
