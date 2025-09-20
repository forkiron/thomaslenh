import React, { useState } from "react";
import { GridBackgroundDemo } from "../components/background/GridBackgroundDemo";
import Profile from "../components/Profile";
import Polaroid from "../components/Polaroid";
import ProjectCard from "../components/ProjectCard";
import plankbackground from "../assets/plankbackground.png";
import visiblewood from "../assets/visiblewood.png";
import email from "../assets/emailpixel.jpg";
import linkedin from "../assets/linkedinpixel.png";
import github from "../assets/githubpixel.png";

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  const handleCloseProjects = () => {
    setShowProjects(false);
  };
  return (
    <div className="fixed w-screen min-h-screen">
      {/* Background grid */}
      <div
        className={`absolute inset-0 -z-20 transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
      >
        <GridBackgroundDemo />
      </div>
      <div
        className={`flex justify-center items-center min-h-screen overflow-hidden transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
      >
        <div className="shadow-lg -rotate-5 flex-shrink-0 ">
          <Polaroid />
        </div>

        {/* Responsive profile box with sticky note icons */}
        <div
          className="relative flex flex-col md:flex-row
                w-[950px] h-[700px]  
               bg-no-repeat bg-contain bg-center justify-center items-center flex-shrink-0"
          style={{ backgroundImage: `url(${plankbackground})` }}
        >
          <Profile onShowProjects={handleShowProjects} />

          {/* Social media icons positioned on the sticky note in bottom left */}
          <div
            className="absolute flex items-center gap-2"
            style={{
              bottom: "18%", // 18% of 600px
              left: "12.2%", // 13.5% of 950px
            }}
          >
            <img
              className="w-8 h-6 rounded-xs hover:scale-110 shadow-md transition-transform cursor-pointer"
              src={email}
              alt="Email"
            />
            <img
              className="w-8 h-8 hover:scale-110 shadow-md rounded-lg transition-transform cursor-pointer"
              src={linkedin}
              alt="LinkedIn"
            />
            <div className="bg-white rounded-full">
              <img
                className="w-8 h-8 hover:scale-110 shadow-md rounded-full transition-transform cursor-pointer"
                src={github}
                alt="GitHub"
              />
            </div>
          </div>
        </div>

        <div className="shadow-lg flex-shrink-0">
          <Polaroid />
        </div>
      </div>

      {/* Fixed washi tape pieces - stay in place regardless of window size */}
      <div
        className={`absolute top-70 left-40 w-8 h-16 transform rotate-135 opacity-90 pointer-events-none transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
        style={{
          background:
            "repeating-linear-gradient(45deg, #f7c61a 0, #f7c61a 5px, transparent 5px, transparent 10px, #101010 10px, #101010 15px)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
      ></div>
      <div
        className={`absolute w-8 h-16 transform rotate-45 opacity-90 pointer-events-none transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
        style={{
          background:
            "repeating-linear-gradient(45deg, #f7c61a 0, #f7c61a 5px, transparent 5px, transparent 10px, #101010 10px, #101010 15px)",
          top: "20px",
          left: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
      ></div>

      {/* Projects Modal */}
      {showProjects && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0" onClick={handleCloseProjects}></div>

          {/* Modal Content */}
          <div className="relative w-200 bg-white/10 backdrop-blur-3xl rounded-xl border border-white/20 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleCloseProjects}
              className="absolute top-2 right-2 z-10 text-white hover:text-gray-300 text-2xl font-bold"
            >
              ×
            </button>

            <div className="flex gap-4 bg-white/5 backdrop-blur-sm w-full h-10 rounded-t-xl border-b border-white/10">
              <div></div>
              <div></div>
              <div></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 p-6">
              <div className="flex items-center mt-10 justify-between">
                <div className="">
                  <img src={visiblewood} alt="" className="w-50 h-max" />
                  <p className="text-xl absolute top-23 left-9 font-bold font-[merriweather]">
                    Thomas Lenh
                  </p>
                </div>
                <div className="text-2xl h-max font-bold">phelllo </div>
              </div>
              {/* Search bar */}
              <div className="w-130 mx-auto mt-4 px-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="search for work, projects, etc."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>
                <ProjectCard
                  title="My Project"
                  description="A brief description of your project"
                />
                <ProjectCard
                  title="Project 2"
                  description="A brief description of your project"
                />
                <ProjectCard
                  title="Project 3"
                  description="A brief description of your project"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
