import React from 'react';

interface AnimatedButtonProps {
          children: React.ReactNode;
          className?: string;
          onClick?: () => void;
          href?: string;
          type?: 'button' | 'submit' | 'reset';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
          children,
          className = '',
          onClick,
          href,
          type = 'button'
}) => {
          const baseClasses = `
    relative overflow-hidden
    bg-gray-600 hover:bg-gray-900 
    dark:bg-gray-700 dark:hover:bg-gray-700
    text-white transition-all duration-200
    before:absolute before:top-0 before:left-0 before:w-0 before:h-full
    before:bg-gray-900 dark:before:bg-gray-900
    before:transition-all before:duration-300 before:ease-out
    hover:before:w-full
    after:absolute after:top-0 after:right-0 after:w-0 after:h-full
    after:bg-gray-700 dark:after:bg-gray-700
    after:transition-all after:duration-300 after:ease-out
    after:delay-0
  `;

          const combinedClasses = `${baseClasses} ${className}`.trim();

          const buttonContent = (
                    <span className="relative z-10 transition-colors duration-300">
                              {children}
                    </span>
          );

          if (href) {
                    return (
                              <a href={href}>
                                        <button className={combinedClasses} onClick={onClick} type={type}>
                                                  {buttonContent}
                                        </button>
                              </a>
                    );
          }

          return (
                    <button className={combinedClasses} onClick={onClick} type={type}>
                              {buttonContent}
                    </button>
          );
};

export default AnimatedButton;