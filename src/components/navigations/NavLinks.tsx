import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AnimatedButton from "./AnimatedBottonProps";

interface Props {
          mobile?: boolean;
}

const NavLinks: React.FC<Props> = ({ mobile = false }) => {
          const links = ["Home", "About", "Projects", "Blogs", "CV"];
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
                                                  ) : link === "CV" ? (
                                                            <a
                                                                                href="https://my.microsoftpersonalcontent.com/personal/4026fd38627f1e3e/_layouts/15/Doc.aspx?sourcedoc=%7B69e56c33-d5d7-4d2a-aa04-d7e1e0976b88%7D&action=default"
                                                                      rel="noopener noreferrer"
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
