"use client";
import { useState } from "react";
import UseWindowSize from "./components/UseWindowSize";
import { CLOSE_ICON, MENU_ICON } from "./constants";

export default function Header() {
  const size = UseWindowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const isMobile = size.width !== undefined && size.width <= 768;
  return (
    <>
      {!isMobile ? (
        <header className="font-nunito-sans grid-cols grid grid-flow-col gap-4">
          <div className="col-span-5 flex flex-row justify-center">
            <a
              href="#introduce"
              className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="font-semibold uppercase">About</p>
            </a>

            <a
              href="#introduce"
              className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="font-semibold uppercase">Working experience</p>
            </a>
            <a
              href="#skill"
              className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="font-semibold uppercase">Skills</p>
            </a>
            <a
              href="#experience"
              className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="font-semibold uppercase">Work</p>
            </a>

            <a
              href="#certificate"
              className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="font-semibold uppercase">Certification</p>
            </a>
          </div>

          <div className="flex items-center justify-center">
            <a
              href="#footer"
              className="group rounded-lg border border-gray-400 bg-black px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
            >
              <p className="text-sm font-semibold uppercase text-white hover:text-black md:text-xs">
                Contact me
              </p>
            </a>
          </div>
        </header>
      ) : (
        <div className="fixed left-0 right-0 top-0 z-50 flex w-full justify-between bg-white p-4 shadow-md">
          <img
            src={isMenuOpen ? CLOSE_ICON : MENU_ICON}
            alt="Menu Icon"
            className="h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
      {isMenuOpen && isMobile && (
        <nav
          className={`fixed left-0 top-16 z-40 w-2/5 bg-custom-bg bg-opacity-90 px-4 transition-transform duration-300 ease-in-out ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <a
            href="#introduce"
            className="block py-2"
            onClick={handleNavItemClick}
          >
            About
          </a>
          <a
            href="#experience"
            className="block py-2"
            onClick={handleNavItemClick}
          >
            Working experience
          </a>
          <a href="#skill" className="block py-2" onClick={handleNavItemClick}>
            Skills
          </a>
          <a
            href="#experience"
            className="block py-2"
            onClick={handleNavItemClick}
          >
            Work
          </a>
          <a
            href="#certificate"
            className="block py-2"
            onClick={handleNavItemClick}
          >
            Certification
          </a>
          <a href="#footer" className="block py-2" onClick={handleNavItemClick}>
            Contact me
          </a>
        </nav>
      )}
    </>
  );
}
