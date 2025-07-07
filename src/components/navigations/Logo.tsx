import React from "react";
import { motion } from "framer-motion";

const Logo: React.FC = () => {
          return (
                    <div className="flex items-center gap-2">
                              <motion.div
                                        className="w-4 h-4 bg-gray-500 rounded-full"
                                        animate={{
                                                  opacity: [1, 0, 1], 
                                                  scale: [1, 1.2, 1], 
                                        }}
                                        transition={{
                                                  duration: 1, // full cycle duration
                                                  repeat: Infinity, // infinite loop
                                                  ease: "easeInOut",
                                        }}
                              />
                              <span className="font-bold tracking-widest">Akpamgbo</span>
                    </div>
          );
};

export default Logo;
