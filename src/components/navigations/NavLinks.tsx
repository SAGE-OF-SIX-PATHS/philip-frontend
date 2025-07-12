import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedButton from "./AnimatedBottonProps";

interface Props {
          mobile?: boolean;
}

const NavLinks: React.FC<Props> = ({ mobile = false }) => {
          const links = ["Home", "About", "Projects", "Blogs"];
          const [activeLink, setActiveLink] = useState("Home");

          return (
                    <ul
                              className={`flex ${mobile ? "flex-col gap-4 text-sm" : "gap-2 text-sm md:text-base"
                                        } items-center`}
                    >
                              {links.map((link) => (
                                        <li key={link} className="relative">
                                                  {link === "Blogs" ? (
                                                            <NavLink
                                                                      to="https://medium.com/@nzubeakpamgbo"
                                                                      onClick={() => setActiveLink(link)}
                                                                      className="block"
                                                            >
                                                                      <AnimatedButton
                                                                                className={`px-4 py-2 rounded-md border-2 border-gray-500 ${activeLink === link && !mobile
                                                                                                    ? "!bg-black border-yellow-500"
                                                                                                    : !mobile
                                                                                                              ? "border-gray-500"
                                                                                                              : ""
                                                                                          }`}
                                                                      >
                                                                                {link}
                                                                      </AnimatedButton>
                                                            </NavLink>
                                                  ) : (
                                                            <a
                                                                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                                                                      onClick={() => setActiveLink(link)}
                                                                      className="block"
                                                            >
                                                                      <AnimatedButton
                                                                                className={`px-4 py-2 rounded-md border-2 border-gray-500 ${activeLink === link && !mobile
                                                                                                    ? "!bg-black border-yellow-500"
                                                                                                    : !mobile
                                                                                                              ? "border-gray-500"
                                                                                                              : ""
                                                                                          }`}
                                                                      >
                                                                                {link}
                                                                      </AnimatedButton>
                                                            </a>
                                                  )}
                                        </li>
                              ))}
                    </ul>
          );
};

export default NavLinks;