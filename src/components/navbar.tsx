'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    // Dark mode toggle logic here
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    const isHovered = hoveredLink === href;

    return (
      <Link 
        href={href} 
        className={`px-3 py-2 rounded-md relative`}
        onMouseEnter={() => setHoveredLink(href)}
        onMouseLeave={() => setHoveredLink(null)}
      >
        {children}
        <span 
          className={`absolute bottom-0 left-0 w-full h-[1px] bg-current transform origin-left transition-transform duration-300 ease-out ${
            isActive ? 'scale-x-100' : 'scale-x-0'
          }`}
        ></span>
        {!isActive && (
          <span 
            className={`absolute bottom-0 left-0 w-full h-[1px] bg-current transform origin-left transition-transform duration-300 ease-out ${
              isHovered ? 'scale-x-100' : 'scale-x-0'
            }`}
          ></span>
        )}
      </Link>
    );
  };

  return (
    <nav 
      className="w-full px-4 py-8 bg-white dark:bg-black dark:hover:bg-black text-gray-950 dark:text-white font-inter tracking-wider transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-1 md:space-x-8 font-light text-base md:text-xl">
          <NavLink href="/">home</NavLink>
          <NavLink href="/work">projects & experience</NavLink>
          <NavLink href="/resume">resume</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;