"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex bg-[#2C3E50] text-[#ECF0F1] h-16 items-center justify-between px-8">
      <div className="logo font-bold text-lg">Siddhesh Chavan</div>

      {/* Hamburger button visible on small screens */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Links: hidden on small screens, flex on medium and above */}
      <div
        className={`flex-col md:flex-row md:flex gap-10 p-5 md:p-0 absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-[#2C3E50] md:bg-transparent transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:gap-10`}
      >
        <a href="#hero" className="block md:inline-block" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#abt" className="block md:inline-block" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#prj" className="block md:inline-block" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a href="#skills" className="block md:inline-block" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a href="#contact" className="block md:inline-block" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}
