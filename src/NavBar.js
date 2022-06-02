import React from "react";
import { useReducer } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBar = () => {
  const [toggleNav, toggle] = useReducer((toggleNav) => !toggleNav, false);

  return (
    <>
      <nav className="bg-suisei-blue/70 text-suisei-yellow backdrop-blur-md z-50 h-28 lg:h-32 ">
        <div className="h-full flex gap-8 justify-center items-center ">
          {/* Icon */}
          <div className="flex items-start mb-0">
            <Link
              to="/"
              className="flex text-suisei-yellow font-display text-7xl rounded-full focus:outline-none focus:underline decoration-2 underline-offset-4 hover:underline"
            >
              <FontAwesomeIcon
                icon={solid("meteor")}
                className="mt-0 xl:mt-2"
              />
              <span className="ml-2 hidden mb-4 xl:inline">itsJayyEll</span>
            </Link>
          </div>

          {/* Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button className="flex text-3xl p-4 mr-6" onClick={toggle}>
              <FontAwesomeIcon icon={solid("bars")} />
            </button>
          </div>

          <div className="gap-4 items-center text-lg font-bold hidden lg:flex">
            <Link
              to="/profile"
              className="px-5 py-2 rounded-full pt-3 hover:bg-suisei-yellow hover:text-suisei-blue transition-colors ease-in-out duration-300"
            >
              Profile
            </Link>
            <Link
              to="/projects"
              className="px-5 py-2 rounded-full pt-3 hover:bg-suisei-yellow hover:text-suisei-blue transition-colors ease-in-out duration-300"
            >
              Projects
            </Link>
            <Link
              to="/practicum-overview"
              className="px-5 py-2 rounded-full pt-3 hover:bg-suisei-yellow hover:text-suisei-blue transition-colors ease-in-out duration-300"
            >
              Practicum
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full pt-3 hover:bg-suisei-yellow hover:text-suisei-blue transition-colors ease-in-out duration-300"
            >
              Contact
            </Link>
            {/* <Link
              to="/about"
              className="px-5 py-2 rounded-full pt-3 hover:bg-suisei-yellow hover:text-suisei-blue transition-colors ease-in-out duration-300"
            >
              About
            </Link> */}
          </div>
        </div>
      </nav>
      <div className="bg-suisei-blue/70 text-suisei-yellow backdrop-blur-md border-b-2 border-suisei-yellow">
        <ul
          className={
            "flex flex-col justify-center items-center text-xl lg:hidden" +
            (toggleNav ? " " : " hidden")
          }
        >
          <li className="w-full">
            <Link
              to="/profile"
              className="mt-1 font-bold hover:bg-suisei-yellow hover:text-suisei-blue flex justify-center items-center h-16 transition-colors ease-in-out duration-300"
              onClick={toggle}
            >
              Profile
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/projects"
              className="mt-1 font-bold hover:bg-suisei-yellow hover:text-suisei-blue flex justify-center items-center h-16 transition-colors ease-in-out duration-300"
              onClick={toggle}
            >
              Projects
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/practicum-overview"
              className="mt-1 font-bold hover:bg-suisei-yellow hover:text-suisei-blue flex justify-center items-center h-16 transition-colors ease-in-out duration-300"
              onClick={toggle}
            >
              Practicum
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/contact"
              className="mt-1 font-bold hover:bg-suisei-yellow hover:text-suisei-blue flex justify-center items-center h-16 transition-colors ease-in-out duration-300"
              onClick={toggle}
            >
              Contact
            </Link>
          </li>
          {/* <li className="w-full">
            <Link
              to="/about"
              className="mt-1 font-bold hover:bg-suisei-yellow hover:text-suisei-blue flex justify-center items-center h-16 transition-colors ease-in-out duration-300"
              onClick={toggle}
            >
              About
            </Link>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
