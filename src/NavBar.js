import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-suisei-blue/70 text-suisei-yellow backdrop-blur-md">
        <div className="py-6 px-4 border-b-2 border-suisei-yellow flex gap-8 justify-center">
          <div className="flex items-start mb-4">
            <Link
              to="/"
              className="text-suisei-yellow font-display text-7xl rounded-full focus:outline-none focus:underline decoration-2 underline-offset-4 hover:underline"
            >
              itsJayyEll
            </Link>
          </div>
          <div className="flex gap-4 items-center text-lg font-bold">
            <Link
              to="/profile"
              className="px-5 py-2 rounded-full focus:outline-none focus:bg-suisei-yellow focus:text-suisei-blue  hover:bg-suisei-yellow hover:text-suisei-blue"
            >
              Profile
            </Link>
            <Link
              to="/projects"
              className="px-5 py-2 rounded-full focus:outline-none focus:bg-suisei-yellow focus:text-suisei-blue  hover:bg-suisei-yellow hover:text-suisei-blue"
            >
              Projects
            </Link>
            <Link
              to="/practicum"
              className="px-5 py-2 rounded-full focus:outline-none focus:bg-suisei-yellow focus:text-suisei-blue  hover:bg-suisei-yellow hover:text-suisei-blue"
            >
              Practicum
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full focus:outline-none focus:bg-suisei-yellow focus:text-suisei-blue  hover:bg-suisei-yellow hover:text-suisei-blue"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 rounded-full focus:outline-none focus:bg-suisei-yellow focus:text-suisei-blue  hover:bg-suisei-yellow hover:text-suisei-blue"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
