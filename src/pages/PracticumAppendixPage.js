import React from "react";
import { Link } from "react-router-dom";
import Resume from "../files/JohnLloydJuanillo_Resume.pdf";
import LearningPath from "../files/JohnLloydJuanillo_LearningPath.pdf";
import WeeklyJournal from "../files/JohnLloydJuanillo_WeeklyJournal.pdf";
import Acceptance from "../files/JohnLloydJuanillo_PracticumAcceptance.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PracticumAppendixPage = ({ title }) => {
  document.title = "Practicum Appendices" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-3xl lg:text-4xl text-center lg:text-left">
          Appendices
        </h1>
        <div className="flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 ">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Curriculum Vitae (CV)
            </h2>
            <details>
              <summary className="cursor-pointer select-none text-sm lg:text-base">
                View Curriculum Vitae
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-[53rem]">
                  <object
                    data={Resume}
                    type="application/pdf"
                    title="CV"
                    className="h-full w-full"
                  >
                    <div>No online PDF viewer installed</div>
                  </object>
                </div>
              </section>
            </details>
            <div className="flex">
              <a
                href={Resume}
                download
                className="bg-suisei-yellow rounded-xl px-5 py-3 pt-4 font-bold text-xl hover:bg-white hover:text-suisei-yellow hover:shadow-lg transition ease-in-out hover:scale-105 duration-300"
              >
                <FontAwesomeIcon icon={solid("download")} />
                <span className="ml-2">Download</span>
              </a>
            </div>
          </div>

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 ">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Practicum Acceptance
            </h2>
            <details>
              <summary className="cursor-pointer select-none text-sm lg:text-base">
                View Practicum Acceptance
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-[53rem]">
                  <object
                    data={Acceptance}
                    type="application/pdf"
                    title="Acceptance"
                    className="h-full w-full"
                  >
                    <div>No online PDF viewer installed</div>
                  </object>
                </div>
              </section>
            </details>
            <div className="flex">
              <a
                href={Acceptance}
                download
                className="bg-suisei-yellow rounded-xl px-5 py-3 pt-4 font-bold text-xl hover:bg-white hover:text-suisei-yellow hover:shadow-lg transition ease-in-out hover:scale-105 duration-300"
              >
                <FontAwesomeIcon icon={solid("download")} />
                <span className="ml-2">Download</span>
              </a>
            </div>
          </div>

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 ">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Practicum Learning Module Path Proposal
            </h2>
            <details>
              <summary className="cursor-pointer select-none text-sm lg:text-base">
                View Practicum Learning Module Path Proposal
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-[53rem]">
                  <object
                    data={LearningPath}
                    type="application/pdf"
                    title="Proposal"
                    className="h-full w-full"
                  >
                    <div>No online PDF viewer installed</div>
                  </object>
                </div>
              </section>
            </details>
            <div className="flex">
              <a
                href={LearningPath}
                download
                className="bg-suisei-yellow rounded-xl px-5 py-3 pt-4 font-bold text-xl hover:bg-white hover:text-suisei-yellow hover:shadow-lg transition ease-in-out hover:scale-105 duration-300"
              >
                <FontAwesomeIcon icon={solid("download")} />
                <span className="ml-2">Download</span>
              </a>
            </div>
          </div>

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 ">
            <h2 className="text-2xl lg:text-3xl font-bold">
              Complete Weekly Journal
            </h2>
            <details>
              <summary className="cursor-pointer select-none text-sm lg:text-base">
                View Weekly Journal
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-full">
                  <object
                    data={WeeklyJournal}
                    type="application/pdf"
                    title="Journal"
                    className="h-full w-full"
                  >
                    <div>No online PDF viewer installed</div>
                  </object>
                </div>
              </section>
            </details>
            <div className="flex">
              <a
                href={WeeklyJournal}
                download
                className="bg-suisei-yellow rounded-xl px-5 py-3 pt-4 font-bold text-xl hover:bg-white hover:text-suisei-yellow hover:shadow-lg transition ease-in-out hover:scale-105 duration-300"
              >
                <FontAwesomeIcon icon={solid("download")} />
                <span className="ml-2">Download</span>
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="flex justify-between">
            <Link
              to="/practicum-synthesis"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              ◀ Synthesis
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumAppendixPage;
