import React from "react";
import { Link } from "react-router-dom";

const PracticumSynthesisPage = ({ title }) => {
  document.title = "Practicum Synthesis" + title;
  document.documentElement.scrollTo(0, 0);
  return (
    <>
      <div className="mx-4 lg:mx-16 2xl:mx-48 mt-8 mb-32 flex flex-col gap-8">
        <h1 className="font-display text-3xl lg:text-4xl text-center lg:text-left">
          Synthesis of Practicum Engagement
        </h1>
        <div className="flex flex-col gap-8">
          <div className="bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow flex flex-col gap-4 p-8 text-sm lg:text-base">
            <p>
              From all the learnings I have gained throughout this practicum, it
              can be categorized into three types of learnings.
            </p>
            <p className="indent-4">
              The first type of learning is professional knowledge. This is
              learning about the mindsets to take into consideration when
              engaging in a project with other team members. This includes
              Design Thinking and how it is a mindset that tackles problem
              solving with regards to human centered characteristics. Creative
              Thinking where being creative is not much about being good at art,
              but rather generating ideas that are not normally considered and
              could be useful in brainstorming solutions to problems. I also
              learned the two approaches to project management: The traditional
              approach (Waterfall) in which every goal is clear and linear in
              nature. The agile approach is appropriate when you don't know what
              the solution to a problem is and would require an iterative
              process to reach a conclusion and often involves the customer more
              than the traditional approach. Workplace Management which deals
              with developing the necessary communication skills that are
              essential in both cooperating in a team and leading a team
              project. This is done with developing interpersonal or internal
              communication, developing trust with your team, building
              relationships with clients and business partners, non-verbal
              communication, and being approachable and tact.
            </p>
            <p className="indent-4">
              The second type of learning is practical knowledge. Aside from the
              programming basics such as HTML, CSS, and JavaScript, there were
              some topics covered that I overlooked when learning web
              development for the first time. Those were designing websites for
              accessibility, in other words, making websites more user-friendly
              for people who have difficulty accessing web pages. These include
              adding alt tags to images for screen readers, adding skip to
              content, optimizing delivery of images for data constraint users.
              This is where I also learned about building a Full-Stack website
              using the React JavaScript Framework. This website is a testament
              to what I have learned throughout my practicum specialization
              module.
            </p>
            <p className="indent-4">
              The third type of learning is theoretical knowledge. This tackles
              the learnings that I can apply further into my career as an IT
              graduate. This includes the core concept of cloud computing in
              general and why businesses are migrating to a cloud-based
              solution, the benefits of AWS cloud computing and the core
              services that they offer. This also includes an immersion in the
              basic concepts of Git, Cloud Computing, and Machine Learning.
            </p>
            <p className="indent-4">
              During my immersion in this practicum program, I have realized
              that IT has various paths to take moving forward into my career.
              This can range from software development, management, and
              administrative tasks to future innovations such as cloud computing
              and machine learning or Artificial Intelligence (AI).
            </p>
            <p className="indent-4">
              At the end of this practicum engagement, there were subjects that
              were tackled that are refreshers to what I currently learned
              throughout my time in college. But there were also new topics
              covered that showcases an aspect of Information Technology which
              is that it is a continuous learning experience. You never stop
              learning IT because there is always something new to learn about
              and create.
            </p>
          </div>

          {/* Back and Next Button */}
          <div className="flex justify-between">
            <Link
              to="/practicum-outputs"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              ??? Outputs
            </Link>

            <Link
              to="/practicum-appendix"
              className="font-display text-xl lg:text-3xl bg-suisei-gray/70 backdrop-blur-md ring-2 ring-suisei-yellow p-4 lg:p-8 items-center transition ease-in-out hover:scale-105 duration-300"
            >
              Appendices ???
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticumSynthesisPage;
