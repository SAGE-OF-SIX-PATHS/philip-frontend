import React from "react";
import ThemeToggle from "./ThemeToggle";

const Footer: React.FC = () => (
          <footer className="w-full py-6 mt-12 flex justify-center items-center border-t border-gray-400 dark:border-gray-600 font-montserrat bg-black text-white dark:bg-white dark:text-black">
                    <ThemeToggle />
          </footer>
);

export default Footer;
