import React from "react";
import { Link } from "react-router-dom";
import Fancybox from "../components/Fancybox";
import Carousel from "../components/Carousel";
import javascriptEssentials1 from "../images/screenshots/Javascript-Essential-Screenshot-1.png";
import javascriptEssentials2 from "../images/screenshots/Javascript-Essential-Screenshot-2.png";
import javascriptEssentials3 from "../images/screenshots/Javascript-Essential-Screenshot-3.png";
import reactComponent1 from "../images/screenshots/React-Components-Screenshot-1.jpg";
import reactEssentialsGit2 from "../images/screenshots/React-Essentials-Git-Log-OneLine.png";
import reactEssentialsGit1 from "../images/screenshots/React-Essentials-Git-Log.png";
import reactHooks1 from "../images/screenshots/React-Fetching-with-Hooks-Screenshot-1.jpg";
import reactHooks2 from "../images/screenshots/React-Fetching-with-Hooks-Screenshot-2.png";
import reactFullStackGit1 from "../images/screenshots/React-FullStack-Git-Log.png";
import reactFullStack1 from "../images/screenshots/React-FullStack-Screenshot-1.png";
import reactFullStack2 from "../images/screenshots/React-FullStack-Screenshot-2.png";
import reactFullStack3 from "../images/screenshots/React-FullStack-Screenshot-3.png";
import reactFullStack4 from "../images/screenshots/React-FullStack-Screenshot-4.png";
import reactFullStack5 from "../images/screenshots/React-FullStack-Screenshot-5.png";
import reactFullStack6 from "../images/screenshots/React-FullStack-Screenshot-6.png";
import reactInterface1 from "../images/screenshots/React-With-TailwindCSS-Screenshot-1.png";
import reactInterfaceGit1 from "../images/screenshots/React-With-TailwindCSS-Git-Log.png";
import LinkedInCertificates from "../files/JohnLloydJuanillo_LinkedInLearningCertificates.pdf";
import awsCompletion from "../images/screenshots/AWS-Completion.png";
import awsBadge from "../images/screenshots/AWS-Badge.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const PracticumOutputPage = ({ title }) => {
  document.title = "Practicum Outputs" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-3xl lg:text-4xl text-center lg:text-left">
          Presentation of Outputs
        </h1>
        <div className="flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">LinkedIn Learning</h2>
            <p className="text-sm lg:text-base">
              Here is a few screenshots and detailed discussions of the output
              from my specialization modules
            </p>
            <Carousel
              className="select-none"
              items={[
                `<div data-fancybox="gallery" data-src=${javascriptEssentials1} data-caption="This is a sample activity in JavaScript Essential Training by Morten Rand-Hendriksen">
                    <div style="background-image:url(${javascriptEssentials1});">
                    </div>
                  </div>`,
                `<div data-fancybox="gallery" data-src=${javascriptEssentials2} data-caption="It requires to code a simple HTML textbox and button that can change the strap length of each backpack">
                    <div style="background-image:url(${javascriptEssentials2});"></div>
                  </div>`,
                `<div data-fancybox="gallery" data-src=${javascriptEssentials3} data-caption="It requires to apply learning from JavaScript Objects to differentiate both backpacks and straps">
                    <div style="background-image:url(${javascriptEssentials3});"></div>
                  </div>`,
                `<div data-fancybox="gallery" data-src=${reactComponent1} data-caption="This is a sample layout of the React framework in React.js Essential Training (2020) by Eve Porcello">
                    <div style="background-image:url(${reactComponent1});"></div>
                  </div>`,
                `<div data-fancybox="gallery" data-src=${reactEssentialsGit1} data-caption="I've applied my learning in Git Essential Training: The Basics by Kevin Skoglund">
                  <div style="background-image:url(${reactEssentialsGit1});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactEssentialsGit2} data-caption="Here is a one-line version of the git log in the sample React layout"> 
                  <div style="background-image:url(${reactEssentialsGit2});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactInterface1} data-caption="In React.js: Building an Interface by Ray Villalobos, React JS Framework is combined with the CSS Framework TailwindCSS">
                  <div style="background-image:url(${reactInterface1});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactInterfaceGit1} data-caption="Here is the git log of the React interface">
                  <div style="background-image:url(${reactInterfaceGit1});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactHooks1} data-caption="This is a sample output from the React Hooks course by Eve Porcello which fetches my profile from GitHub using an API call">
                  <div style="background-image:url(${reactHooks1});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactHooks2} data-caption="Here is sample code with the API token key edited out">
                  <div style="background-image:url(${reactHooks2});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack1} data-caption="This is the output of the course React: Creating and Hosting a Full-Stack Site by Shaun Wassell">
                  <div style="background-image:url(${reactFullStack1});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack2} data-caption="It combines almost everything I have learned in the specialization module in full stack development: Building a React application, installing TailwindCSS, configuring routes using ReactRouter, handling data with MongoDB backend, uploading the website in GitHub, and deploying an Amazon EC2 instance for the website">
                  <div style="background-image:url(${reactFullStack2});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack3} data-caption="This articles page is a component I made in React that can be used in other parts of the site">
                  <div style="background-image:url(${reactFullStack3});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack4} data-caption="This is a sample article that uses a backend data to handle upvotes, names, and comments in MongoDB">
                  <div style="background-image:url(${reactFullStack4});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack5} data-caption="I reused the articles component on an article page">
                  <div style="background-image:url(${reactFullStack5});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStack6} data-caption="This is the backend code of the full-stack website using MongoDB">
                  <div style="background-image:url(${reactFullStack6});"></div>
                </div>`,
                `<div data-fancybox="gallery" data-src=${reactFullStackGit1} data-caption="Here is the git log of the full-stack website">
                  <div style="background-image:url(${reactFullStackGit1});"></div>
                </div>`,
              ]}
              options={{ slidesPerPage: 1, center: true, preload: 17 }}
            />

            <h2 className="text-2xl lg:text-3xl font-bold">
              LinkedIn Learning Certificates
            </h2>
            <details className="linkedin">
              <summary className="cursor-pointer select-none text-sm lg:text-base hover:text-suisei-yellow">
                View LinkedIn Learning Certificates
              </summary>
              <section className="flex justify-center items-center">
                <div className="h-[55rem] w-full">
                  <object
                    data={LinkedInCertificates}
                    type="application/pdf"
                    title="LinkedInCertificates"
                    className="h-full w-full"
                  >
                    <div>No online PDF viewer installed</div>
                  </object>
                </div>
              </section>
            </details>
            <div className="flex">
              <a
                href={LinkedInCertificates}
                download
                className="bg-suisei-yellow rounded-xl px-5 py-3 pt-4 font-bold text-xl hover:bg-white hover:text-suisei-yellow hover:shadow-lg transition ease-in-out hover:scale-105 duration-300"
              >
                <FontAwesomeIcon icon={solid("download")} />
                <span className="ml-2">Download</span>
              </a>
            </div>
          </div>

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8">
            <h2 className="text-2xl lg:text-3xl font-bold">AWS Educate</h2>
            <p className="text-sm lg:text-base">
              Here is the completion screenshot of the AWS Educate Interface
            </p>
            <div className="flex justify-center items-center">
              <button
                data-fancybox="aws"
                data-src={awsCompletion}
                data-caption="Completion screenshot of Accenture ATA AWS Curriculum"
              >
                <img alt="" src={awsCompletion}></img>
              </button>
            </div>
            <p className="text-sm lg:text-base">
              Since we are advised to not take screenshots during our modules in
              Amazon Web Services, here is a detailed discussion on the tasks
              given:
            </p>
            <p className="indent-4 text-sm lg:text-base">
              For the first course in the ATA Curriculum, I explored and had a
              hands-on experience with the AWS Management Console. Within the
              hands-on, I was able to set up an EC2 instance from navigating to
              the EC2 management interface to starting, stopping, and
              terminating an EC2 instance. I also learned how to access
              different regions of AWS where some services may or may not be
              available.{" "}
            </p>
            <p className="indent-4 text-sm lg:text-base">
              The next course to follow is an introduction to the cloud. These
              include the core concept of cloud computing in general and why
              businesses are migrating to a cloud-based solution, the history
              and benefits of AWS cloud computing, the core services that they
              offer, and a lab exercises regarding the said core services. What
              I liked about the lab exercises is that they use the actual AWS
              interface as if you have an active account in AWS. Every
              instruction in their lab exercises are clear and easy to
              understand. It makes it comfortable and gets me used to working in
              their AWS platform. After the completion of Introduction to Cloud
              101 (Labs), a badge is given to me as proof of completion through
              Credly.
            </p>
            <div className="flex justify-center items-center">
              <button
                data-fancybox="aws"
                data-src={awsBadge}
                data-caption="<a href='https://www.credly.com/badges/8130b1f6-5269-421c-a0f7-e535a15dcb9e/public_url' target='_blank' rel='noopener noreferrer' class='text-suisei-yellow hover:underline underline-offset-2'>AWS Educate Introduction to Cloud 101 Badge from Credly</a>"
                className="w-64"
              >
                <img
                  alt="AWS Educate Introduction to Cloud 101 Badge from Credly"
                  src={awsBadge}
                />
              </button>
            </div>
            <p className="text-sm lg:text-base">
              As for the Cloud Support Engineer, it is packed with modules
              regarding platforms, networks, software development, and security.
            </p>
            <div className="ml-8 text-sm lg:text-base">
              <ul className="list-disc list-outside">
                <li>
                  For the first module platforms, it discusses about operating
                  systems, specifically Linux, as AWS rely on having knowledge
                  in its CLI. This can be seen when creating an EC2 instance and
                  you are only given access to SSHing to the newly created
                  instance. Other topics covered in this module is
                  virtualization.
                </li>
                <li>
                  The next module is all about networks. It talks about the
                  architecture of cloud-based computing which consists of
                  components such as the front-end and back-end of the platform.
                  This is where VPC is applied as you should have a basic
                  knowledge of networking such as TCP/IP protocols, port
                  forwarding, and troubleshooting.
                </li>
                <li>
                  The next module discusses the various languages used in
                  software development. It first discusses how CLI works and an
                  introduction to AWS CLI, then it lists down relevant languages
                  for AWS such as JavaScript, PHP, PowerShell, and Ruby.
                </li>
                <li>
                  The last module talks about security which includes access
                  control, authentication, disaster recovery, encryption,
                  identity management, and risk/compliance. This is where IAM or
                  Identity and Access Management of Amazon Web Services is
                  introduced. It is where you create and manage users, groups,
                  and permissions to AWS resources. After each module a
                  knowledge check is answered regarding the module topic and a
                  final assessment at the end.
                </li>
              </ul>
            </div>
            <p className="text-sm lg:text-base">
              For Application Developer, it has 5 modules that discusses
              architecture and DevOps, programming and scripting, web, mobile
              and gaming, structures, relational and non-relational database,
              and platforms.
            </p>
            <div className="ml-8 text-sm lg:text-base">
              <ul className="list-disc list-outside">
                <li>
                  The first module discusses the concept of DevOps and how it is
                  a combination of cultural philosophies, practices, and tools
                  that help improve speed and efficiency of an organization to
                  develop applications. It differentiates Continuous Integration
                  with Continuous Delivery. Continuous Integration is a DevOps
                  practice that pertains to regular merging of code changes in a
                  single repository. Continuous Delivery builds on Integration
                  and code changes are prepared for release in production. It
                  also discusses about the Blue/Green DevOps Deployment.
                </li>
                <li>
                  The next module discusses the programming and scripting
                  languages used in software development. These include Visual
                  Basic .NET, C, C#, C++, Java, Python, the Command Line
                  Interface (CLI), JavaScript, PHP, PowerShell, and Ruby. It
                  mainly discusses a brief history of the language or script and
                  its use cases.
                </li>
                <li>
                  For the next module, it links several text and video resources
                  regarding web development, mobile development, and mobile
                  startup and gaming.
                </li>
                <li>
                  In Data and Databases module, it discusses the importance of
                  data structure in software development and why it is one of
                  the most asked questions in developer job interviews. This
                  module also discusses the difference of relational databases
                  and non-relational databases which is the overall structure of
                  relational databases are set per table while non-relational
                  databases are more flexible in its structure at the cost of
                  added complexity in data manipulation.
                </li>
                <li>
                  The last module discusses platforms which include a basic
                  definition of operating systems and how it is utilized in
                  Amazon EC2, and virtualization concepts and how it is
                  essential in cloud computing.
                </li>
              </ul>
            </div>
          </div>
          {/* Back and Next Button */}
          <div className="flex justify-between">
            <Link
              to="/practicum-overview"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              ??? Overview
            </Link>

            <Link
              to="/practicum-synthesis"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              Synthesis ???
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumOutputPage;
