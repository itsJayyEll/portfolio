import React from "react";
import { Link } from "react-router-dom";
import Resume from "../files/JohnLloydJuanillo_Resume.pdf";
import LearningPath from "../files/JohnLloydJuanillo_LearningPath.pdf";
import WeeklyJournal from "../files/JohnLloydJuanillo_WeeklyJournal.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PracticumAppendixPage = ({ title }) => {
  document.title = "Practicum Appendices" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-64 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-4xl">Appendices</h1>
        <div className="mx-8 flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 text-justify">
            <h2 className="text-3xl font-bold">Curriculum Vitae (CV)</h2>
            <details>
              <summary className="cursor-pointer select-none">
                View Curriculum Vitae
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-[53rem]">
                  <object
                    data={Resume}
                    type="application/pdf"
                    title="Test"
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

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 text-justify">
            <h2 className="text-3xl font-bold">
              Practicum Learning Module Path Proposal
            </h2>
            <details>
              <summary className="cursor-pointer select-none">
                View Practicum Learning Module Path Proposal
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-[53rem]">
                  <object
                    data={LearningPath}
                    type="application/pdf"
                    title="Test"
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

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 text-justify">
            <h2 className="text-3xl font-bold">Complete Weekly Journal</h2>
            <details>
              <summary className="cursor-pointer select-none">
                View Weekly Journal
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[70rem] w-full">
                  <object
                    data={WeeklyJournal}
                    type="application/pdf"
                    title="Test"
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
              className="font-display text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-8 items-center transition ease-in-out hover:scale-105 duration-300"
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
