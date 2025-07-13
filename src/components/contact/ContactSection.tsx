import React from 'react';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
          backgroundImage?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
          backgroundImage = './images/contactMe.jpg'
}) => {
          return (
                    <section className="relative w-full font-orbitron">
                              {/* Top section with background image - exactly half of viewport height */}
                              <div
                                        className="h-[50vh] w-full bg-cover bg-center bg-no-repeat relative"
                                        style={{ backgroundImage: `url(${backgroundImage})` }}
                              >
                                        {/* Dark overlay for better text readability */}
                                        <div className="absolute inset-0 bg-black/50"></div>

                                        {/* Content container */}
                                        <div className="relative z-10 h-full w-full px-4 sm:px-6 lg:px-8">
                                                  <div className="max-w-7xl mx-auto h-full flex flex-col">
                                                            {/* Logo - scales from medium on mobile to large on desktop */}
                                                            <div className="pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-10 lg:pb-12">
                                                                      <h1 className="text-gray-400 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider sm:text-center lg:text-left">
                                                                                Sage[Art]
                                                                      </h1>
                                                            </div>

                                                            {/* Main content with overlapping form */}
                                                            <div className="flex-1 flex items-center">
                                                                      {/* Left column - Text content */}
                                                                      <div className="w-full lg:w-1/2 pr-0 sm:pr-4 lg:pr-8 xl:pr-12">
                                                                                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                                                                                          <div>
                                                                                                    <h2 className="text-slate-300 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.7rem] font-bold leading-snug sm:leading-tight md:leading-tight mb-3 sm:mb-5 md:mb-6">
                                                                                                              Do you need a <br />digital solution
                                                                                                    </h2>
                                                                                                    <p className="text-slate-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                                                                                                              you can trust?
                                                                                                    </p>
                                                                                          </div>
                                                                                </div>
                                                                      </div>

                                                                      {/* Right side - Contact form positioned to overlap */}
                                                                      <div className="hidden sm:block absolute right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 top-[100%] transform -translate-y-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl lg:w-auto z-20">
                                                                                <ContactForm />
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </div>
                              </div>

                              {/* Bottom section with slate-800 background */}
                              <div className="min-h-[50vh] w-full bg-slate-800">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                  <div className="py-12 sm:py-16">
                                                            {/* Mobile-only form (appears when desktop form is hidden) */}
                                                            <div className="sm:hidden w-full max-w-xs mx-auto mt-8">
                                                                      <ContactForm />
                                                            </div>
                                                            {/* Additional content can go here */}
                                                  </div>
                                        </div>
                              </div>
                    </section>
          );
};

export default ContactSection;