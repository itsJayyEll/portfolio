import React from "react";
import JL from "../images/jl.jpg";
import Fancybox from "../components/Fancybox";
import Carousel from "../components/Carousel";
import Certificate1 from "../images/certificates/certificate-1.png";
import Certificate2 from "../images/certificates/certificate-2.png";
import Certificate3 from "../images/certificates/certificate-3.png";
import Certificate4 from "../images/certificates/certificate-4.jpg";
import Certificate5 from "../images/certificates/certificate-5.jpg";
import Certificate6 from "../images/certificates/certificate-6.png";
import Certificate7 from "../images/certificates/certificate-7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const ProfilePage = ({ title }) => {
  document.title = "Profile" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 lg:mt-8 mb-32 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:py-24 gap-8 lg:gap-16">
          <figure className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]">
            <img
              src={JL}
              alt="Portrait of John Lloyd Juanillo"
              className="ring-2 ring-suisei-yellow"
            ></img>
          </figure>
          <div className="flex flex-col items-center gap-4">
            <h1 className="font-display text-3xl lg:text-5xl xl:text-6xl">
              John Lloyd Juanillo
            </h1>
            <div className="flex flex-col">
              <h2 className="text-xs lg:text-xl xl:text-xl">
                Aspiring Full-Stack, Internet of Things, and Cloud Developer
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-none  xl:grid xl:grid-cols-3 justify-center gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
            <h2 className="font-display text-3xl lg:text-4xl">
              <FontAwesomeIcon icon={solid("star")} className="mr-4" />
              Personal Skills
            </h2>
            <ul className="mx-0 lg:mx-4 flex flex-col h-full gap-2 lg:gap-4 text-sm lg:text-base">
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
            <h2 className="font-display text-3xl lg:text-4xl">
              <FontAwesomeIcon icon={solid("keyboard")} className="mr-4" />
              Technical Skills
            </h2>
            <div className="mx-0 lg:mx-2 flex flex-col gap-2 text-sm lg:text-base">
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
            <h2 className="font-display text-3xl lg:text-4xl">
              <FontAwesomeIcon icon={solid("book-open")} className="mr-4" />
              Education
            </h2>
            <div className="mx-0 lg:mx-2 flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-lg lg:text-2xl font-bold">
                  Undergraduate Degree in B.S. IT
                </h3>
                <h4 className="text-md lg:text-xl">Malayan Colleges Laguna</h4>
                <p className="text-sm lg:text-base">
                  Pulo-Diezmo Road, Cabuyao, 4025 Laguna
                </p>
                <h2 className="font-display text-xl lg:text-2xl">
                  A.Y. 2018 – Ongoing
                </h2>
              </div>
            </div>
            <div className="mx-0 lg:mx-2 flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-lg lg:text-2xl font-bold">
                  Senior High Graduate
                </h3>
                <h4 className="text-md lg:text-xl">Malayan Colleges Laguna</h4>
                <p className="text-sm lg:text-base">
                  Pulo-Diezmo Road, Cabuyao, 4025 Laguna
                </p>
                <h2 className="font-display text-xl lg:text-2xl">
                  A.Y. 2016 – 2018
                </h2>
              </div>
            </div>
            <div className="mx-0 lg:mx-2 flex flex-col gap-2">
              <div className="flex flex-col gap-0">
                <h3 className="text-lg lg:text-2xl font-bold">
                  Junior High Graduate
                </h3>
                <h4 className="text-md lg:text-xl">
                  Emmanuel Christian School
                </h4>
                <p className="text-sm lg:text-base">
                  Malitlit Rd., Santa Rosa, 4026 Laguna
                </p>
                <h2 className="font-display text-xl lg:text-2xl">
                  A.Y. 2012 – 2015
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
          <h2 className="font-display text-3xl lg:text-4xl">
            <FontAwesomeIcon icon={solid("trophy")} className="mr-4" />
            Achievements
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-0">
              <h3 className="font-display text-lg lg:text-2xl">
                Malayan Colleges Laguna (A.Y. 2016 – ongoing)
              </h3>
              <h4 className="text-sm lg:text-xl">
                Pulo-Diezmo Road, Cabuyao, 4025 Laguna
              </h4>
            </div>
            <div className="flex flex-col text-center items-center">
              <div className="flex flex-col gap-4">
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    President's Lister
                  </h5>
                  <p className="text-sm lg:text-base">
                    College (3rd year up to 4th year)
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Dean's Lister
                  </h5>
                  <p className="text-sm lg:text-base">
                    College (1st year up to 2nd year)
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Academic Scholarship Grant
                  </h5>
                  <p className="text-sm lg:text-base">
                    College (1st year up to 4th year)
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Recognition (OJT Work Immersion)
                  </h5>
                  <p className="text-sm lg:text-base">15th of May 2018</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 12 | 3rd Term)
                  </h5>
                  <p className="text-sm lg:text-base">15th of May 2018</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 12 | 2nd Term)
                  </h5>
                  <p className="text-sm lg:text-base">10th of April 2018</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 12 | 1st Term)
                  </h5>
                  <p className="text-sm lg:text-base">9th of February 2018</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 11 | 3rd Term)
                  </h5>
                  <p className="text-sm lg:text-base">15th of July 2017</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 11 | 2nd Term)
                  </h5>
                  <p className="text-sm lg:text-base">9th of February 2017</p>
                </div>
                <div>
                  <h5 className="font-bold text-lg lg:text-2xl">
                    Certificate of Academic Achievement (Grade 11 | 1st Term)
                  </h5>
                  <p className="text-sm lg:text-base">11th of November 2016</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 border-t-[1rem] border-suisei-yellow ring-suisei-yellow flex flex-col gap-8 p-8">
          <h2 className="font-display text-3xl lg:text-4xl">
            <FontAwesomeIcon icon={solid("certificate")} className="mr-4" />
            Certificates
          </h2>
          <Carousel
            className="certificates select-none"
            items={[
              `<div data-fancybox="certificates" data-src=${Certificate1} data-caption="">
                <div style="background-image:url(${Certificate1});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate2} data-caption="">
                <div style="background-image:url(${Certificate2});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate3} data-caption="">
                <div style="background-image:url(${Certificate3});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate4} data-caption="">
                <div style="background-image:url(${Certificate4});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate5} data-caption="">
                <div style="background-image:url(${Certificate5});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate6} data-caption="">
                <div style="background-image:url(${Certificate6});"></div>
              </div>`,
              `<div data-fancybox="certificates" data-src=${Certificate7} data-caption="">
                <div style="background-image:url(${Certificate7});"></div>
              </div>`,
            ]}
            options={{ slidesPerPage: 1, center: true, preload: 7 }}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
