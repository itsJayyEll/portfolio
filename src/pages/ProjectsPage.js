import React from "react";

const ProjectsPage = ({ title }) => {
  document.title = "Projects" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 lg:mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-3xl lg:text-4xl text-center lg:text-left">
          Projects
        </h1>
        <div className="flex flex-col justify-center gap-8">
          {/* Mi-Amoro */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                Mi-Amoro Capstone Thesis
              </h2>
              <p className="text-sm lg:text-base">
                Project Leader in Thesis Capstone Project Mi Amoro: Development
                of an IoT-Based Welfare Monitoring and Reporting Wearable Device
                Prototype for OFWs from the BARMM Region in completion of the
                courses IT200- 1D and IT200-2D
              </p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/EKevuTdtw5o"
                    title="Mi Amoro Youtube Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Soilid */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                Soilid IoT Plant Health Monitoring System
              </h2>
              <p className="text-sm lg:text-base">
                Project Leader in developing an IoT Plant Health Monitoring
                System in completion of the courses IT140P, IT155P, and IT145
              </p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/OH-ap3WWCPA"
                    title="Soilid Youtube Video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* SOAP BMI Calculator */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                SOAP BMI Calculator
              </h2>
              <p className="text-sm lg:text-base"></p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1AI9Ta_MXrQ80VFMIRts9LP1X0xnaoU9y/preview"
                    title="SOAP BMI Calculator Mobile"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1qvyQ5UP7mzDk0xyVW1_DjT3rY38OvzJY/preview"
                    title="SOAP BMI Calculator Web"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Soilid */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                Wemos Weather Station
              </h2>
              <p className="text-sm lg:text-base"></p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1viYoujP8NeZLjheSl_UBnxB_lMjJFSiP/preview"
                    title="Wemos Weather Station"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* MCL Attendance Checker */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                MCL Attendance Checker
              </h2>
              <p className="text-sm lg:text-base">
                Project Leader in developing an MCL Attendance Checker
                Application in completion of the course OJT09-1
              </p>
              <div className="flex flex-row flex-wrap gap-8 justify-center">
                <div className="flex flex-col gap-4 items-center">
                  <div className="lg:w-[27rem] lg:h-[48rem] w-[18rem] h-[32rem]">
                    <iframe
                      src="https://drive.google.com/file/d/1Ry8P8droW1OOA0YaNDUKIk_AFtGgroo9/preview"
                      width="100%"
                      height="100%"
                      title="MCL Attendance Checker Development 1"
                      allow="autoplay"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p className="text-xs lg:text-base">
                    MCL Attendance Checker Development Video 1
                  </p>
                </div>

                <div className="flex flex-col gap-4 items-center">
                  <div className="lg:w-[27rem] lg:h-[48rem] w-[18rem] h-[32rem]">
                    <iframe
                      src="https://drive.google.com/file/d/1KCTGJDsrZJ-buxNrjdFR_wqTb9KAi5Ei/preview"
                      width="100%"
                      height="100%"
                      title="MCL Attendance Checker Development 2"
                      allow="autoplay"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <p className="text-xs lg:text-base">
                    MCL Attendance Checker Development Video 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
