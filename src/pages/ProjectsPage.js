import React from "react";
import Fancybox from "../components/Fancybox";
import Carousel from "../components/Carousel";
import Wearable1 from "../images/projects/miamoro/wearable-1.jpg";
import Wearable2 from "../images/projects/miamoro/wearable-2.jpg";
import Wearable3 from "../images/projects/miamoro/wearable-3.jpg";
import Wearable4 from "../images/projects/miamoro/wearable-4.jpg";
import Wearable5 from "../images/projects/miamoro/wearable-5.jpg";
import MiAmoro1 from "../images/projects/miamoro/miamoro-1.png";
import MiAmoro2 from "../images/projects/miamoro/miamoro-2.png";
import MiAmoro3 from "../images/projects/miamoro/miamoro-3.png";
import MiAmoro4 from "../images/projects/miamoro/miamoro-4.png";
import MiAmoro5 from "../images/projects/miamoro/miamoro-5.jpg";
import MiAmoro6 from "../images/projects/miamoro/miamoro-6.jpg";
import Soilid1 from "../images/projects/soilid/soilid-1.jpg";
import Soilid2 from "../images/projects/soilid/soilid-2.jpg";
import Soilid3 from "../images/projects/soilid/soilid-3.jpg";
import Soilid4 from "../images/projects/soilid/soilid-4.jpg";
import Pixel1 from "../images/projects/pixelclothing/Pixel-Clothing-1.png";
import Pixel2 from "../images/projects/pixelclothing/Pixel-Clothing-2.png";
import Pixel3 from "../images/projects/pixelclothing/Pixel-Clothing-3.png";
import Pixel4 from "../images/projects/pixelclothing/Pixel-Clothing-4.png";
import RNH1 from "../images/projects/rnh/RNH-Realty-1.png";
import RNH2 from "../images/projects/rnh/RNH-Realty-2.png";
import RNH3 from "../images/projects/rnh/RNH-Realty-3.png";
import RNH4 from "../images/projects/rnh/RNH-Realty-4.png";
import RNH5 from "../images/projects/rnh/RNH-Realty-5.png";

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
                Mi Amoro Capstone Thesis
              </h2>
              <p className="text-sm lg:text-base">
                Project Leader in Thesis Capstone Project Mi Amoro: Development
                of an IoT-Based Welfare Monitoring and Reporting Wearable Device
                Prototype for OFWs from the BARMM Region in completion of the
                courses IT200- 1D and IT200-2D
              </p>
              <p className="text-sm lg:text-base">
                This thesis capstone aims to help OFWs from the BARMM Region
                experiencing abuse from their caretakers abroad with the use of
                a wearable device capable of reporting cases. Aside from the
                wearable, an interface is developed that is able to show
                individual report cases and aggregate each report depending on
                the year, country, and category. This is possible using a visual
                radar that is able to show ongoing cases, resolved cases, and
                cases per country on a visual map along with the corresponding
                welfare rate
              </p>
              <p className="text-sm lg:text-base">
                Visit the live website here:{" "}
                <a
                  href="http://miamoro.azurewebsites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-suisei-yellow hover:underline underline-offset-2"
                >
                  Mi Amoro
                </a>
              </p>
              <div className="w-full flex justify-center items-center">
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
              <p className="block text-center text-xs lg:text-sm">
                Mi Amoro Thesis Video Presentation
              </p>

              <details className="gallery">
                <summary className="cursor-pointer select-none text-sm lg:text-base">
                  View Gallery
                </summary>
                <section>
                  <Carousel
                    className="select-none"
                    items={[
                      `<div data-fancybox data-src=${Wearable1} data-caption="">
                        <div style="background-image:url(${Wearable1});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Wearable2} data-caption="">
                        <div style="background-image:url(${Wearable2});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Wearable3} data-caption="">
                        <div style="background-image:url(${Wearable3});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Wearable4} data-caption="">
                        <div style="background-image:url(${Wearable4});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Wearable5} data-caption="">
                        <div style="background-image:url(${Wearable5});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro1} data-caption="">
                        <div style="background-image:url(${MiAmoro1});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro2} data-caption="">
                        <div style="background-image:url(${MiAmoro2});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro3} data-caption="">
                        <div style="background-image:url(${MiAmoro3});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro4} data-caption="">
                        <div style="background-image:url(${MiAmoro4});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro5} data-caption="">
                        <div style="background-image:url(${MiAmoro5});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${MiAmoro6} data-caption="">
                        <div style="background-image:url(${MiAmoro6});"></div>
                      </div>`,
                    ]}
                    options={{ slidesPerPage: 1, center: true }}
                  />
                </section>
              </details>
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
              <p className="text-sm lg:text-base">
                This machine problem focuses on using a Wemos, an Arduino-based
                microcontroller, to monitor a plant's health by measuring the
                ambient sunlight, soil moisture, temperature, and humidity.
                These data are then sent to a database and previewed on the
                Soilid Android application made using Xamarin
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
              <p className="block text-center text-xs lg:text-sm">
                Soilid Machine Problem Video Presentation
              </p>

              <details className="gallery">
                <summary className="cursor-pointer select-none text-sm lg:text-base">
                  View Gallery
                </summary>
                <section>
                  <Carousel
                    className="select-none"
                    items={[
                      `<div data-fancybox data-src=${Soilid1} data-caption="">
                        <div style="background-image:url(${Soilid1});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Soilid2} data-caption="">
                        <div style="background-image:url(${Soilid2});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Soilid3} data-caption="">
                        <div style="background-image:url(${Soilid3});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Soilid4} data-caption="">
                        <div style="background-image:url(${Soilid4});"></div>
                      </div>`,
                    ]}
                    options={{ slidesPerPage: 1, center: true }}
                  />
                </section>
              </details>
            </div>
          </div>

          {/* SOAP BMI Calculator */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                SOAP BMI Calculator
              </h2>
              <p className="text-sm lg:text-base">
                SOAP BMI Calculator Web and Android Application are lab
                exercises submitted as part of the completion of IT140P.
              </p>
              <p className="text-sm lg:text-base">
                This is a simple application that computes the corresponding BMI
                value from an inputted height and weight. This showcases how
                Simple Object Access Protocol (SOAP) is used to communicate
                between the client and application. Both versions of the
                application is easy to develop because of the integration of an
                existing communication protocol such as SOAP
              </p>
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
              <p className="block text-center text-xs lg:text-sm">
                SOAP BMI Calculator Android Application Video Demonstration
              </p>

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
              <p className="block text-center text-xs lg:text-sm">
                SOAP BMI Calculator Web Application Video Demonstration
              </p>
            </div>
          </div>

          {/* Wemos Weather Station */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                Wemos Weather Station
              </h2>
              <p className="text-sm lg:text-base">
                Wemos Weather Station is a machine problem as part of the
                completion of IT152P
              </p>
              <p className="text-sm lg:text-base">
                This machine problem combines the Internet of Things (IoT)
                concepts learned in the course by utilizing a temperature and
                humidity sensor (DH11) attached to a Wemos D1 Microcontroller
                powered by a 9V DC Battery. Data on the sensor is sent through
                Wi-Fi and is stored on a local database via XAMPP. This data is
                then presented in realtime on a .NET Framework webpage
              </p>
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
              <p className="block text-center text-xs lg:text-sm">
                Wemos Weather Station Video Demonstration
              </p>
            </div>
          </div>

          {/* Fan Smart Control and Arduino Smart Light Sensor */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                Fan Smart Control and Arduino Smart Light Sensor
              </h2>
              <p className="text-sm lg:text-base">
                Fan Smart Control and Arduino Smart Light Sensor is a lab
                exercise as part of the completion of IT152P
              </p>
              <p className="text-sm lg:text-base">
                Fan Smart Control is a lab exercise output that uses an Arduino
                to power on or off an electrical appliance. The Arduino is
                connected to a relay switch that is responsible for toggling the
                applicance on or off depending on the output voltage from the
                Arduino. The Arduino is then controlled using a Windows Forms
                App via serial calls
              </p>
              <p className="text-sm lg:text-base">
                Arduino Smart Light Sensor is a lab exercise output that uses a
                Light Dependent Resistor (LDR) to determine weather a room is
                lit or not by measuring the resistance value inputted through
                the Arduino. This output is then presented in a Windows Forms
                App via serial calls
              </p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1sowQ6Z-UXe1RD8egs-4Al3RtadaZgNo5/preview"
                    title="Fan Smart Control and Arduino Smart Light Sensor"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <p className="block text-center text-xs lg:text-sm">
                Fan Smart Control and Arduino Smart Light Sensor Video
                Demonstration
              </p>
            </div>
          </div>

          {/* PlayNet */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">PlayNet</h2>
              <p className="text-sm lg:text-base">
                PlayNet is a machine problem as part of the completion of IT132,
                IT132L, and IT123P
              </p>
              <p className="text-sm lg:text-base">
                This machine problem demonstrates the modern way of deploying
                web applications through an Model-View-Controller (MVC)
                approach. PlayNet is an MVC web application that modernizes
                computer shop reservation services. This machine problem also
                includes a development of an Android application that takes
                advantage of the MVC approach.
              </p>
              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1Gq1LK09g_T63WATtnZUVfr75y4M-Ty7J/preview"
                    title="PlayNet Part 1"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <p className="block text-center text-xs lg:text-sm">
                PlayNet Video Demonstration Part 1
              </p>

              <div className="w-full flex justify-center">
                <div className="lg:w-[48rem] lg:h-[27rem] w-[32rem] h-[18rem]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1Gme4U2ON85T5OXDhRxRAV5afz9VZ1O1a/preview"
                    title="PlayNet Part 2"
                    allow="autoplay"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
              <p className="block text-center text-xs lg:text-sm">
                PlayNet Video Demonstration Part 2
              </p>
            </div>
          </div>

          {/* RNH Realty & Management */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">
                RNH Realty & Management
              </h2>
              <p className="text-sm lg:text-base">
                RNH Realty & Management is a mock-up website as part of the
                completion of CS103P
              </p>
              <p className="text-sm lg:text-base">
                This mock-up website demonstrates the use of Bulma CSS Framework
                to design a webpage in .NET Framework. This webpage is uploaded
                in Azure Websites
              </p>
              <p className="text-sm lg:text-base">
                Visit the live website here:{" "}
                <a
                  href="https://rnhrealty.azurewebsites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-suisei-yellow hover:underline underline-offset-2"
                >
                  RNH Realty & Management
                </a>
              </p>

              <details className="gallery">
                <summary className="cursor-pointer select-none text-sm lg:text-base">
                  View RNH Realty & Management Sample Screenshots
                </summary>
                <section>
                  <Carousel
                    className="select-none"
                    items={[
                      `<div data-fancybox data-src=${RNH1} data-caption="">
                        <div style="background-image:url(${RNH1});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${RNH2} data-caption="">
                        <div style="background-image:url(${RNH2});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${RNH3} data-caption="">
                        <div style="background-image:url(${RNH3});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${RNH4} data-caption="">
                        <div style="background-image:url(${RNH4});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${RNH5} data-caption="">
                        <div style="background-image:url(${RNH5});"></div>
                      </div>`,
                    ]}
                    options={{ slidesPerPage: 1, center: true }}
                  />
                </section>
              </details>
            </div>
          </div>

          {/* Pixel Clothing */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl lg:text-3xl font-bold">Pixel Clothing</h2>
              <p className="text-sm lg:text-base">
                Pixel Clothing is a machine problem as part of the completion of
                IT111 and IT111L
              </p>
              <p className="text-sm lg:text-base">
                This machine problem develops a .NET Framework website uploaded
                in Azure Websites. This demonstrates a full-stack development of
                a website from the frontend to the backend. The frontend is
                handled by the Bulma CSS Framework. The backend is handled by
                the Azure SQL Database provided by Azure Websites
              </p>
              <p className="text-sm lg:text-base">
                Visit the live website here:{" "}
                <a
                  href="https://pixelclothing.azurewebsites.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-suisei-yellow hover:underline underline-offset-2"
                >
                  Pixel Clothing
                </a>
              </p>

              <details className="gallery">
                <summary className="cursor-pointer select-none text-sm lg:text-base">
                  View Pixel Clothing Sample Screenshots
                </summary>
                <section>
                  <Carousel
                    className="select-none"
                    items={[
                      `<div data-fancybox data-src=${Pixel1} data-caption="">
                        <div style="background-image:url(${Pixel1});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Pixel2} data-caption="">
                        <div style="background-image:url(${Pixel2});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Pixel3} data-caption="">
                        <div style="background-image:url(${Pixel3});"></div>
                      </div>`,
                      `<div data-fancybox data-src=${Pixel4} data-caption="">
                        <div style="background-image:url(${Pixel4});"></div>
                      </div>`,
                    ]}
                    options={{ slidesPerPage: 1, center: true }}
                  />
                </section>
              </details>
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
              <p className="text-sm lg:text-base">
                This is an Android application developed in Eclipse IDE and
                communicates with a local MySQL database in XAMPP. This
                application aims to provide a way for professors of Malayan
                Colleges Laguna to monitor their student's attendance through
                their mobile phones running Android
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
