import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import linkedinLearning from "../images/linkedin-learning.png";
import accenture from "../images/accenture.png";
import aws from "../images/aws.png";

const PracticumPage = ({ title }) => {
  document.title = "Overview of Practicum" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-3xl lg:text-4xl text-center lg:text-left">
          Overview of Practicum
        </h1>
        <div className="flex flex-col gap-8">
          {/* LinkedIn Learning */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex justify-center items-start">
                <figure className="flex shrink-0 justify-center items-center bg-white rounded-full w-48 h-48 px-6">
                  <img alt="Linkedin Learning logo" src={linkedin} />
                </figure>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  LinkedIn Learning Certifications
                </h2>
                <p className="text-sm lg:text-base">
                  LinkedIn Learning is an American online learning provider. It
                  provides video courses taught by industry experts in software,
                  creative, and business skills. It is a subsidiary of LinkedIn.
                  All the courses on LinkedIn fall into four categories:
                  Business, Creative, Technology and Certifications.{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/LinkedIn_Learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-suisei-yellow font-bold"
                  >
                    [1]
                  </a>
                </p>
                {/* Modules */}
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
                  <div className="flex flex-col">
                    <h3 className="text-lg lg:text-2xl font-bold">
                      Required Modules
                    </h3>
                    <ol className="list-decimal list-inside ml-0 lg:ml-4 text-sm lg:text-base">
                      <li>Design Thinking Learning Module</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/learning-design-thinking-lead-change-in-your-organization"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Learning Design Thinking: Lead Change in Your
                            Organization
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/develop-your-creative-thinking-and-innovation-skills"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Develop Your Creative Thinking and Innovation Skills
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/develop-critical-thinking-decision-making-and-problem-solving-skills"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Develop Critical-Thinking, Decision-Making, and
                            Problem-Solving Skills
                          </a>
                        </li>
                      </ul>
                      <li>Project Management Learning Module</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/project-management-foundations-4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Project Management Foundations
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/become-an-agile-project-manager"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Become an Agile Project Manager
                          </a>
                        </li>
                      </ul>
                      <li>Workplace Management Learning Module</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/develop-your-communication-skills-and-interpersonal-influence"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Develop Your Communication Skills and Interpersonal
                            Influence
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/5s-workplace-productivity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            5S Workplace Productivity
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/time-management-fundamentals-14548057"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Time Management Fundamentals
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/time-management-working-from-home"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Time Management: Working from Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/business-etiquette-phone-email-and-text"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Business Etiquette: Phone, Email, and Text
                          </a>
                        </li>
                      </ul>
                    </ol>
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-lg lg:text-2xl font-bold">
                      Specialization Modules
                    </h3>
                    <ol className="list-decimal list-inside ml-0 lg:ml-4 text-sm lg:text-base">
                      <li>Full-Stack Web Development</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/become-a-full-stack-web-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Become a Full-Stack Web Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/become-a-react-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Become a React Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/learning-git-and-github-14213624"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Learning Git and GitHub
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/become-a-restful-api-developer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Become a RESTful API Developer
                          </a>
                        </li>
                      </ul>
                      <li>Cloud Computing</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/understanding-cloud-fundamentals"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Understanding Cloud Fundamentals
                          </a>
                        </li>
                      </ul>
                      <li>Machine Learning</li>
                      <ul className="ml-2 lg:ml-4 list-disc list-inside text-suisei-yellow">
                        <li>
                          <a
                            href="https://www.linkedin.com/learning/paths/become-a-machine-learning-engineer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-suisei-yellow hover:underline underline-offset-2"
                          >
                            Become a Machine Learning Engineer
                          </a>
                        </li>
                      </ul>
                    </ol>
                  </div>
                </div>

                {/* Nature of tasks */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    Nature of assignments
                  </h2>
                  <p className="text-sm lg:text-base">
                    The nature of assignments given in LinkedIn Learning can be
                    identified by two tasks:
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">
                    Chapter Quiz
                  </h3>
                  <p className="text-sm lg:text-base ml-4 indent-4">
                    These are given after each chapter in a learning course. It
                    contains a few questions regarding the contents of the
                    chapter. Your answers are given in a multiple-choice type,
                    and you can rewatch parts of the chapter in case you get a
                    wrong answer. Quizzes can be taken multiple times.
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">
                    Activity/Challenge
                  </h3>
                  <p className="text-sm lg:text-base ml-4 indent-4">
                    These are sometimes given in between chapters that pertain
                    to certain hands-on activities such as coding exercises that
                    applies the learnings covered in within the chapter.
                    Usually, exercise files are given on the main page of the
                    learning course and can be used to answer
                    activities/challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">Platform used</h3>
                <figure className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6">
                  <img alt="Linkedin Learning logo" src={linkedinLearning} />
                </figure>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">
                  Engagement hours
                </h3>
                <div className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6 pt-2">
                  <p className="text-suisei-blue font-bold text-3xl">
                    124 Hours
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">Credit hours</h3>
                <div className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6 pt-2">
                  <p className="text-suisei-blue font-bold text-3xl">
                    372 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accenture */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-8 p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex justify-center items-start">
                <figure className=" flex shrink-0 justify-center items-center bg-white rounded-full w-48 h-48 px-6">
                  <img alt="Accenture logo" src={accenture} />
                </figure>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl lg:text-3xl font-bold">
                  Accenture ATA AWS Curriculum
                </h2>
                <p className="text-sm lg:text-base">
                  Accenture plc is an Irish professional services company based
                  in Dublin for tax purposes. Specializing in information
                  technology (IT) services and consulting. A Fortune Global 500
                  company, it reported revenues of $50.53 billion in 2021.
                  Accenture's current clients include 91 of the Fortune Global
                  100 and more than three-quarters of the Fortune Global 500.{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Accenture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-suisei-yellow font-bold"
                  >
                    [2]
                  </a>
                </p>
                <p className="text-sm lg:text-base">
                  Amazon Web Services, Inc. (AWS) is a subsidiary of Amazon that
                  provides on-demand cloud computing platforms and APIs to
                  individuals, companies, and governments, on a metered
                  pay-as-you-go basis. These cloud computing web services
                  provide distributed computing processing capacity and software
                  tools via AWS server farms.{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Amazon_Web_Services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-suisei-yellow font-bold"
                  >
                    [3]
                  </a>
                </p>
                <h3 className="text-lg lg:text-2xl font-bold">Courses</h3>
                <div className="mx-4 grid grid-rows-4 grid-cols-none 2xl:grid-rows-none 2xl:grid-cols-4 gap-4 text-left">
                  <a
                    href="https://awseducate.instructure.com/courses/744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-suisei-blue rounded-xl transition ease-in-out hover:scale-105 duration-300"
                  >
                    <div className="bg-aws-cloud h-3 rounded-t-full"></div>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="block">
                        <h4 className="text-xl font-bold">
                          Introduction to the AWS Management Console
                        </h4>
                        <p>Duration: 1 hour</p>
                      </div>
                      <p className="text-sm lg:text-base">
                        Overview on AWS user interface in managing AWS services.
                        A quick navigational guide users for new to AWS.
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://awseducate.instructure.com/courses/746"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-suisei-blue rounded-xl transition ease-in-out hover:scale-105 duration-300"
                  >
                    <div className="bg-aws-cloud h-3 rounded-t-full"></div>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="block">
                        <h4 className="text-xl font-bold">
                          Introduction to Cloud 101 (Labs)
                        </h4>
                        <p>Duration: 8 hours</p>
                      </div>
                      <p className="text-sm lg:text-base">
                        The goal of this course is to set a foundation for cloud
                        knowledge and help you decide where to take your
                        learning next. This course will help you gain knowledge
                        and experience with cloud fundamentals.
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://awseducate.instructure.com/courses/186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-suisei-blue rounded-xl transition ease-in-out hover:scale-105 duration-300"
                  >
                    <div className="bg-aws-cloud h-3 rounded-t-full"></div>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="block">
                        <h4 className="text-xl font-bold">
                          Cloud Support Engineer
                        </h4>
                        <p>Duration: 40 hours</p>
                      </div>
                      <p className="text-sm lg:text-base">
                        A Cloud Support Engineer is an important role focused on
                        supporting cloud customers. This role requires a wide
                        range of technical knowledge, from operating systems to
                        web applications.
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://awseducate.instructure.com/courses/189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-suisei-blue rounded-xl transition ease-in-out hover:scale-105 duration-300"
                  >
                    <div className="bg-aws-develop h-3 rounded-t-full"></div>
                    <div className="p-4 flex flex-col gap-4">
                      <div className="block">
                        <h4 className="text-xl font-bold">
                          Application Developer
                        </h4>
                        <p>Duration: 50 hours</p>
                      </div>
                      <p className="text-sm lg:text-base">
                        An Application Developer creates or writes programs for
                        a particular operating system (i.e., Windows, Mac OS X
                        or UNIX), the web or a device. This will provide
                        fundamental information needed for an application
                        developer.
                      </p>
                    </div>
                  </a>
                </div>

                {/* Nature of tasks */}
                <div className="mt-2 flex flex-col gap-2">
                  <h2 className="text-2xl lg:text-3xl font-bold">
                    Nature of assignments
                  </h2>
                  <p className="text-sm lg:text-base">
                    The nature of assignments given in AWS Educate can be
                    identified by the following tasks:
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">
                    Hands-on practice
                  </h3>
                  <p className="ml-4 indent-4 text-sm lg:text-base">
                    These are interactive activities that are embedded in the
                    modules that simulate how to navigate through AWS or to get
                    more information on a certain topic.
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">Labs</h3>
                  <p className="ml-4 indent-4 text-sm lg:text-base">
                    These are actual laboratory exercises that launches a
                    temporary instance of an AWS account to experience an actual
                    deployment environment. There are given step-by-step
                    instructions that are required to get the final output to be
                    graded based on the accuracy of steps followed.
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">
                    Knowledge Check
                  </h3>
                  <p className="ml-4 indent-4 text-sm lg:text-base">
                    These are quizzes given after each module. They usually
                    contain 5 randomized questions about each module. Quizzes
                    can be taken multiple times and the highest score is
                    recorded.
                  </p>
                  <h3 className="block font-bold text-lg lg:text-2xl">
                    Final Assessment
                  </h3>
                  <p className="ml-4 indent-4 text-sm lg:text-base">
                    These are final quizzes given at the end of the course. They
                    contain randomized questions from all modules. Final
                    Assessment can be taken multiple times and the highest score
                    is recorded.
                  </p>
                  <h3 className="block font-bold text-lg lg:text-xl">Survey</h3>
                  <p className="ml-4 indent-4 text-sm lg:text-base">
                    Two surveys are given at the start of the course and at the
                    end. These usually ask on the quality of learning the course
                    provides, any suggestions regarding the course, how likely
                    you are to recommend AWS to a relative, and if you are
                    interested in taking an AWS Certification.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center">
              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">Platform used</h3>
                <figure className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6">
                  <img alt="Amazon Web Services logo" src={aws} width={64} />
                </figure>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">
                  Engagement hours
                </h3>
                <div className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6 pt-2">
                  <p className="text-suisei-blue font-bold text-3xl">
                    100 Hours
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg lg:text-2xl font-bold">Credit hours</h3>
                <div className="flex justify-center items-center bg-white rounded-full w-48 h-16 px-6 pt-2">
                  <p className="text-suisei-blue font-bold text-3xl">
                    120 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Hours */}
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-2 p-8 items-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-display text-suisei-yellow text-center">
              Total Practicum Credited Hours
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold font-display">
              492 Hours
            </h1>
          </div>

          {/* Next Button */}
          <div className="flex flex-row-reverse">
            <Link
              to="/practicum-outputs"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              Outputs ▶
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumPage;
