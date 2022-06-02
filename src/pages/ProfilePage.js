import React from "react";
import JL from "../images/jl.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfilePage = ({ title }) => {
  document.title = "Profile" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-8 lg:mx-16 xl:mx-32 2xl:mx-64 mt-8 mb-32 flex flex-col gap-8">
        <div className="flex flex-row justify-center items-center py-24 gap-16">
          <figure className="w-[400px] h-[400px]">
            <img
              src={JL}
              alt="Portrait of John Lloyd Juanillo"
              className="ring-2 ring-suisei-yellow"
            ></img>
          </figure>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-display text-7xl">John Lloyd Juanillo</h1>
            <div className="flex flex-col">
              <h2 className="text-2xl">
                Aspiring Full-Stack, Internet of Things, and Cloud Developer
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-center gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
            <h2 className="font-display text-4xl">
              <FontAwesomeIcon icon={solid("star")} className="mr-4" />
              Personal Skills
            </h2>
            <ul className=" ml-4 flex flex-col h-full gap-4">
              <li>Provides logical and critical solution to problems</li>
              <li>Creativity in arts and graphic design</li>
              <li>Outstanding leadership skills</li>
              <li>Communicates and cooperates well in a team</li>
              <li>Optimistic mindset in the work environment</li>
              <li>Displays flexibility with schedules and deadlines</li>
              <li>Mastery in writing, speaking, and understanding English</li>
            </ul>
          </div>
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
            <h2 className="font-display text-4xl">
              <FontAwesomeIcon icon={solid("keyboard")} className="mr-4" />
              Technical Skills
            </h2>
            <div className="mx-2 text-justify flex flex-col gap-2">
              <p>
                Knowledgeable on the basic functions, controls, and hardware of
                a modern computer desktop or laptop as well as a plethora of
                computer software programs such as the Microsoft Office Suite
                (Word, Excel, PowerPoint, etc.), Adobe Creative Suite
                (Photoshop, Illustrator, After Effects, Premiere Pro), IDE
                Software (NetBeans, Eclipse, Android Studio, Visual
                Studio/Code), and Database Management Software (Microsoft
                Access, MySQL, SQL Server)
              </p>
              <p>
                Displays flexibility in learning new concepts such as Cloud
                Computing and the Internet of Things. Experienced with hardware
                components such as Arduino and Wemos (ESP8266) Devices along
                with other sensors and circuitry principles
              </p>
              <p>
                Shows exceptional skill when coding back-end applications in
                various languages, developing and designing UI/UX oriented
                front-end interfaces, as well as managing and organizing data
                securely with the help of SQL and Database Management Software
              </p>
            </div>
          </div>
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
            <h2 className="font-display text-4xl">
              <FontAwesomeIcon icon={solid("book-open")} className="mr-4" />
              Education
            </h2>
            <div className="mx-2 text-justify flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-2xl font-bold">
                  Undergraduate Degree in B.S. IT
                </h3>
                <h4 className="text-xl">Malayan Colleges Laguna</h4>
                <p>Pulo-Diezmo Road, Cabuyao, 4025 Laguna</p>
                <h2 className="font-display text-2xl">A.Y. 2018 – Ongoing</h2>
              </div>
            </div>
            <div className="mx-2 text-justify flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-2xl font-bold">Senior High Graduate</h3>
                <h4 className="text-xl">Malayan Colleges Laguna</h4>
                <p>Pulo-Diezmo Road, Cabuyao, 4025 Laguna</p>
                <h2 className="font-display text-2xl">A.Y. 2016 – 2018</h2>
              </div>
            </div>
            <div className="mx-2 text-justify flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-2xl font-bold">Junior High Graduate</h3>
                <h4 className="text-xl">Emmanuel Christian School</h4>
                <p>Malitlit Rd., Santa Rosa, 4026 Laguna</p>
                <h2 className="font-display text-2xl">A.Y. 2012 – 2015</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
          <h2 className="font-display text-4xl">
            <FontAwesomeIcon icon={solid("trophy")} className="mr-4" />
            Achievements
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0">
              <h3 className="font-display text-2xl">
                Malayan Colleges Laguna (A.Y. 2016 – ongoing)
              </h3>
              <h4 className="text-xl">
                Pulo-Diezmo Road, Cabuyao, 4025 Laguna
              </h4>
            </div>
            <div className="ml-4 flex flex-row gap-32">
              <ul>
                <li>President's Lister</li>
                <li>Dean's Lister</li>
                <li>Academic Scholarship Grant</li>
                <li>Certificate of Recognition (OJT Work Immersion)</li>
                <li>
                  Certificate of Academic Achievement (Grade 12 | 3rd Term)
                </li>
                <li>
                  Certificate of Academic Achievement (Grade 12 | 2nd Term)
                </li>
                <li>
                  Certificate of Academic Achievement (Grade 12 | 1st Term)
                </li>
                <li>
                  Certificate of Academic Achievement (Grade 11 | 3rd Term)
                </li>
                <li>
                  Certificate of Academic Achievement (Grade 11 | 2nd Term)
                </li>
                <li>
                  Certificate of Academic Achievement (Grade 11 | 1st Term)
                </li>
              </ul>
              <ul>
                <li>College (3rd year up to 4th year)</li>
                <li>College (1st year up to 2nd year)</li>
                <li>College (1st year up to 4th year)</li>
                <li>15th of May 2018</li>
                <li>15th of May 2018</li>
                <li>10th of April 2018</li>
                <li>9th of February 2018</li>
                <li>15th of July 2017</li>
                <li>9th of February 2017</li>
                <li>11th of November 2016</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
