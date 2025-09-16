import React from "react";
import { GridBackgroundDemo } from "../components/background/GridBackgroundDemo";
import Profile from "../components/Profile";
import Polaroid from "../components/Polaroid";
import plankbackground from "../assets/plankbackground.png";
import email from "../assets/emailpixel.jpg";
import linkedin from "../assets/linkedinpixel.png";
import github from "../assets/githubpixel.png";

const Home = () => {
  return (
    <div className="fixed w-screen min-h-screen">
      {/* Background grid */}
      <div className="absolute inset-0 -z-20">
        <GridBackgroundDemo />
      </div>
      <div className="flex justify-center items-center min-h-screen overflow-hidden">
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
          <Profile />

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
        className="fixed w-8 h-16 transform rotate-135 opacity-90 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, #f7c61a 0, #f7c61a 5px, transparent 5px, transparent 10px, #101010 10px, #101010 15px)",
          top: "20px",
          right: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      ></div>
      <div
        className="fixed w-8 h-16 transform rotate-45 opacity-90 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, #f7c61a 0, #f7c61a 5px, transparent 5px, transparent 10px, #101010 10px, #101010 15px)",
          top: "20px",
          left: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      ></div>
    </div>
  );
};

export default Home;
