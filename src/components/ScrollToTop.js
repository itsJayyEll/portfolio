import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ScrollToTop = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   console.log(position);
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log(scroll);
  // }, []);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    console.log(showButton);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButton]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 400) {
      setShowButton(true);
    }
    if (position < 401) {
      setShowButton(false);
    }
    //console.log(showButton);
  };

  const scrollToTop = () => {
    console.log(window.scrollY);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
    console.log(window.scrollY);
  };

  return (
    <>
      <button
        className={
          "z-40 fixed bottom-0 right-0 rounded-full bg-suisei-blue text-suisei-yellow text-3xl h-20 w-20 m-5 lg:m-10 transition ease-in-out duration-300 hover:bg-suisei-yellow hover:text-suisei-blue flex items-center justify-center " +
          (showButton ? "" : "hidden")
        }
        onClick={scrollToTop}
      >
        <FontAwesomeIcon icon={solid("chevron-up")} />
      </button>
    </>
  );
};

export default ScrollToTop;
