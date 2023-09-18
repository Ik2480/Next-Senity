
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div
          className="hamburger-icon cursor-pointer"
          onClick={toggleMenu}
        >
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
        <div className="menu-container absolute top-14 right-0">
          <div className="menu-item bg-white text-black">
            <Link href="/about">
              <div className="block py-3 px-6 mt-2 hover:text-purple-400 font-bold duration-300">
                About
              </div>
            </Link>
          </div>
          <div className="menu-item mt-2 bg-white text-black">
            <Link href="/projects">
              <div className="block py-3 px-6 font-bold hover:text-purple-400 duration-300">
                Projects
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
