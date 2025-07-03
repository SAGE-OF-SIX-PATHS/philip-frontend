import React from "react";

interface Props {
          mobile?: boolean;
}

const NavLinks: React.FC<Props> = ({ mobile = false }) => {
          const links = ["Home", "About", "Services", "Works", "Blogs"];

          return (
                    <ul className={`flex ${mobile ? "flex-col gap-4 text-sm" : "gap-6 text-sm md:text-base"} items-center`}>
                              {links.map((link) => (
                                        <li key={link} className="relative">
                                                  <a href={`#${link.toLowerCase()}`} className="hover:underline">
                                                            {link}
                                                  </a>
                                                  {link === "Home" && !mobile && (
                                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"></span>
                                                  )}
                                        </li>
                              ))}
                    </ul>
          );
};

export default NavLinks;
