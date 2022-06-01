import React from "react";
import { Link } from "react-router-dom";
import Fancybox from "../components/Fancybox";
import Carousel from "../components/Carousel";
import javascriptEssentials1 from "../images/screenshots/Javascript-Essential-Screenshot-1.png";
import javascriptEssentials2 from "../images/screenshots/Javascript-Essential-Screenshot-2.png";
import javascriptEssentials3 from "../images/screenshots/Javascript-Essential-Screenshot-3.png";
import reactComponent1 from "../images/screenshots/React-Components-Screenshot-1.png";
import reactEssentialsGit2 from "../images/screenshots/React-Essentials-Git-Log-OneLine.png";
import reactEssentialsGit1 from "../images/screenshots/React-Essentials-Git-Log.png";
import reactInterface1 from "../images/screenshots/React-With-TailwindCSS-Screenshot-1.png";
import reactInterfaceGit1 from "../images/screenshots/React-With-TailwindCSS-Git-Log.png";
import reactFullStack1 from "../images/screenshots/React-FullStack-Screenshot-1.png";
import reactFullStack2 from "../images/screenshots/React-FullStack-Screenshot-2.png";
import reactFullStack3 from "../images/screenshots/React-FullStack-Screenshot-3.png";
import reactFullStack4 from "../images/screenshots/React-FullStack-Screenshot-4.png";
import reactFullStack5 from "../images/screenshots/React-FullStack-Screenshot-5.png";
import reactFullStack6 from "../images/screenshots/React-FullStack-Screenshot-6.png";
import awsCompletion from "../images/screenshots/AWS-Completion.png";
import awsBadge from "../images/screenshots/AWS-Badge.png";

const PracticumOutputPage = ({ title }) => {
  document.title = title + "Practicum Output";
  return (
    <>
      <div className="mx-64 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-4xl">Outputs</h1>
        <div className="mx-8 flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">LinkedIn Learning</h2>
            <p>
              Here is a few screenshots of the output from my specialization
              modules
            </p>

            <Carousel
              items={[
                `<button data-fancybox data-src=${javascriptEssentials1} data-caption="This is a sample activity in JavaScript Essential Training by Morten Rand-Hendriksen">
                    <img src=${javascriptEssentials1}></img>
                  </button>`,
                `<button data-fancybox data-src=${javascriptEssentials2} data-caption="It requires to code a simple HTML textbox and button that can change the strap length of each backpack">
                    <img src=${javascriptEssentials2}></img>
                  </button>`,
                `<button data-fancybox data-src=${javascriptEssentials3} data-caption="It requires to apply learning from JavaScript Objects to differentiate both backpacks and straps">
                    <img src=${javascriptEssentials3}></img>
                  </button>`,
                `<button data-fancybox data-src=${reactComponent1} data-caption="This is a sample layout of React framework in React.js Essential Training (2020) by Eve Porcello">
                    <img src=${reactComponent1}></img>
                  </button>`,
                `<button data-fancybox data-src=${reactEssentialsGit1} data-caption="I've applied my learning in Git Essential Training: The Basics by Kevin Skoglund">
                  <img src=${reactEssentialsGit1}></img>
                </button>`,
                `<button data-fancybox data-src=${reactEssentialsGit2} data-caption="Here is a one-line version of the git log in the sample React layout"> 
                  <img src=${reactEssentialsGit2}></img>
                </button>`,
                `<button data-fancybox data-src=${reactInterface1} data-caption="In React.js: Building an Interface by Ray Villalobos, React JS Framework is combined with the CSS Framework TailwindCSS">
                  <img src=${reactInterface1}></img>
                </button>`,
                `<button data-fancybox data-src=${reactInterfaceGit1} data-caption="Here is the git log of the React interface">
                  <img src=${reactInterfaceGit1}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack1} data-caption="This is the output of the course React: Creating and Hosting a Full-Stack Site by Shaun Wassell">
                  <img src=${reactFullStack1}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack2} data-caption="It combines almost everything I have learned in the specialization module in full stack development: Building a React application, installing TailwindCSS, configuring routes using ReactRouter, handling data with MongoDB backend">
                  <img src=${reactFullStack2}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack3} data-caption="This articles page is a component I made in React that can be used in other parts of the site">
                  <img src=${reactFullStack3}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack4} data-caption="This is a sample article that uses a backend data to handle upvotes, names, and comments in MongoDB">
                  <img src=${reactFullStack4}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack5} data-caption="I reused the articles component on an article page">
                  <img src=${reactFullStack5}></img>
                </button>`,
                `<button data-fancybox data-src=${reactFullStack6} data-caption="This is a the backend code of the full-stack website using MongoDB">
                  <img src=${reactFullStack6}></img>
                </button>`,
              ]}
              options={{ slidesPerPage: 1, center: true }}
            />
          </div>

          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">AWS Educate</h2>
            <p>Here is the completion screenshot of the AWS Interface</p>
            <div className="flex flex-col justify-center items-center">
              <Fancybox options={{ infinite: false }}>
                <button data-fancybox data-src={awsCompletion}>
                  <img alt="" src={awsCompletion}></img>
                </button>
                <button
                  data-fancybox
                  data-src={awsBadge}
                  data-caption="<a href='https://www.credly.com/badges/8130b1f6-5269-421c-a0f7-e535a15dcb9e/public_url' target='_blank' rel='noopener noreferrer' class='text-suisei-yellow hover:underline underline-offset-2'>AWS Educate Introduction to Cloud 101 Badge from Credly</a>"
                  className="w-64"
                >
                  <img
                    alt="AWS Educate Introduction to Cloud 101 Badge from Credly"
                    src={awsBadge}
                  />
                </button>
              </Fancybox>
            </div>
          </div>
          {/* Next Button */}
          <div className="flex justify-between">
            <Link
              to="/practicum/overview"
              className="font-display text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              ◀ Back
            </Link>

            <Link
              to="/practicum/outputs"
              className="font-display text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              Next ▶
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumOutputPage;
