"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = (e: { currentTarget: { contains: (arg0: any) => any; }; relatedTarget: any; }) => {
    // Check if the mouse cursor is not over the menu or its children
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <div
        className="flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
      >
        <div className="hamburger-icon cursor-pointer">
          <div
            className={`hamburger-line w-6 h-0.5 bg-white my-1 ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`hamburger-line w-6 h-0.5 bg-white my-1 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`hamburger-line w-6 h-0.5 bg-white my-1 ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </div>
      </div>

      {isOpen && (
        <ul className="menu-list absolute top-12 right-0 bg-blue-200 text-blue-800 shadow-md w-40">
          <li>
            <Link href="/about">
              <div className="block py-2 px-4 hover:text-purple-400 duration-300">About</div>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className="block py-2 px-4 hover:text-purple-400 duration-300">Projects</div>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
