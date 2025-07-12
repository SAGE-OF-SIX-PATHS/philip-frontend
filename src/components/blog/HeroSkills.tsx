import React from 'react';

const HeroSkills: React.FC = () => {
          return (
                    <div className="flex-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-0 ">
                              <div className="text-left">
                                        <p className="text-lime-400 text-sm md:text-base leading-relaxed">
                                                  Highly skilled at progressive enhancement, design systems & UI Engineering.
                                        </p>
                              </div>

                              <div className="text-left">
                                        <p className="text-lime-400 text-sm md:text-base leading-relaxed">
                                                  Proven experience building successful products for clients across several countries.
                                        </p>
                              </div>
                    </div>
          );
};

export default HeroSkills;