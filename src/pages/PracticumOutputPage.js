import React from "react";
import Fancybox from "../components/Fancybox";
import Carousel from "../components/Carousel";
import reactComponent1 from "../images/screenshots/React-Components-Screenshot-1.png";

const PracticumOutputPage = ({ title }) => {
  document.title = title + "Practicum Output";

  return (
    <>
      <div className="mx-64 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-4xl">Outputs</h1>

        <div className="mx-8 flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <h2 className="text-3xl font-bold">LinkedIn Learning</h2>
            <p></p>
            <Carousel
              items={["<div>test</div>", "2", "3", "4", "5"]}
              options={{ infinite: false }}
            />
            <Fancybox options={{ infinite: false }}>
              <div className="">
                <button data-fancybox data-src={reactComponent1}>
                  <img
                    alt="React Component Screenshot 1"
                    src={reactComponent1}
                  ></img>
                </button>
              </div>
            </Fancybox>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumOutputPage;
