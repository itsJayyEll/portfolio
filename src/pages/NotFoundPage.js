import React from "react";
import Suisei404 from "../images/suisei-404-small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const NotFoundPage = ({ title }) => {
  document.title = "Page Not Found" + title;
  return (
    <>
      <div className="absolute top-0 left-0 -z-50 flex flex-col gap-2 lg:gap-16 lg:flex-row justify-center items-center h-screen w-screen">
        <figure className="2xl:h-[572px] 2xl:w-[501px] md:h-[429px] md:w-[376px] h-[286px] w-[250.5px]">
          <img
            src={Suisei404}
            alt="Hoshimachi Suisei sad chibi page not found"
            style={{ height: "100%", width: "100%" }}
          ></img>
        </figure>
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <h1 className="font-display text-5xl select-none">Page Not Found</h1>
          <h2 className="font-display text-2xl select-none">
            Sorry about that!
          </h2>
          <div className="flex">
            <a
              href="https://twitter.com/toshishitanoane/status/1447243682860593159"
              target="_blank"
              rel="noopener noreferrer"
              className="text-suisei-yellow hover:underline underline-offset-2"
            >
              <span className="mr-1">Art by @toshishitanoane</span>
              <FontAwesomeIcon icon={brands("twitter")} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
