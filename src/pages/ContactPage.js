import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const ContactPage = ({ title }) => {
  document.title = "Contact" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 mt-8 mb-32 flex flex-col gap-16">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-display text-4xl">Contact Information</h1>
          <div className="mx-8 flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8 justify-center items-center">
                <h2 className="font-display text-3xl">
                  <FontAwesomeIcon icon={solid("envelope")} className="mr-4" />
                  Business Email
                </h2>
                <a
                  href="mailto:jl.juanillo001@gmail.com"
                  className="text-suisei-yellow hover:underline underline-offset-2"
                >
                  jl.juanillo001@gmail.com
                </a>
              </div>
              <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8 justify-center items-center">
                <h2 className="font-display text-3xl">
                  <FontAwesomeIcon icon={solid("house")} className="mr-4" />
                  Personal Email
                </h2>
                <a
                  href="mailto:jl.juanillo002@gmail.com"
                  className="text-suisei-yellow hover:underline underline-offset-2"
                >
                  jl.juanillo002@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="font-display text-4xl">Socials</h1>
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
    </>
  );
};

export default ContactPage;
