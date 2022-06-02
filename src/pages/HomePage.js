import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const HomePage = ({ title }) => {
  document.title = "Home" + title;
  return (
    <>
      <div className="absolute top-0 left-0 -z-50 flex flex-col gap-8 justify-center items-center h-screen w-screen">
        <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8 lg:p-16 ">
          <div className="flex flex-col items-center">
            <h1 className="font-display text-5xl lg:text-7xl select-none">
              itsJayyEll's
            </h1>
            <h1 className="font-display text-6xl lg:text-8xl select-none">
              Portfolio
            </h1>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="mx-8 flex flex-row gap-4 text-7xl drop-shadow-lg">
              <a
                href="https://www.facebook.com/itsJayyEll"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands("facebook")}
                  className="mr-4 transition ease-in-out hover:scale-110 duration-300 text-suisei-yellow hover:text-facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/itsjayyell/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands("linkedin")}
                  className="mr-4 transition ease-in-out hover:scale-110 duration-300 text-suisei-yellow hover:text-linkedin"
                />
              </a>
              <a
                href="https://github.com/itsJayyEll"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={brands("github")}
                  className="mr-4 transition ease-in-out hover:scale-110 duration-300 text-suisei-yellow hover:text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
