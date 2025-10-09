import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import ProjectCard from "../components/ProjectCard";
import plankbackground from "../assets/plankbackground.png";
import email from "../assets/emailpixel.jpg";
import linkedin from "../assets/linkedinpixel.png";
import github from "../assets/githubpixel.png";
import pixelArt from "../assets/pixel-art-1.jpeg";
import wok from "../assets/wok.gif";

const Home = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showProfile, setShowProfile] = useState(true);

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  const handleCloseProjects = () => {
    setShowProjects(false);
  };

  // Loading animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true); // Trigger profile animation
    }, 2000); // Show profile after 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="fixed w-screen min-h-screen bg-black overflow-hidden">
      {/* bg pixel art */}
      <div
        className={`absolute inset-0 -z-20 transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
        style={{
          backgroundImage: `url(${pixelArt})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className={`flex justify-center items-center min-h-screen overflow-hidden transition-all duration-300 ${
          showProjects ? "blur-sm" : ""
        }`}
      >
        {/* Wood Plank - Centered */}
        <div
          className="relative flex flex-col md:flex-row
                w-[950px] h-[700px]  
               bg-no-repeat bg-contain bg-center justify-center items-center flex-shrink-0"
          style={{ backgroundImage: `url(${plankbackground})` }}
        >
          <Profile
            onShowProjects={handleShowProjects}
            showProfile={showProfile}
          />

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
      </div>

      {/* Projects Modal */}
      {showProjects && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={handleCloseProjects}
          ></div>

          {/* Modal Content */}
          <div className="relative w-200 bg-black/30 backdrop-blur-3xl rounded-xl border border-white/20 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between bg-black/20 backdrop-blur-2xl w-full h-7 rounded-t-xl border-b border-white/10 px-4">
              {/* Apple Traffic Light Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handleCloseProjects}
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200"
                ></button>
                <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200"></button>
                <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors duration-200"></button>
              </div>
              <div></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 p-6">
              <div className="flex items-center mt-10 justify-between">
                <div className=""></div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl h-max font-bold">phelllo </div>
                  {/* Wok gif in top right corner */}
                  <img
                    className="w-16 h-16 object-cover rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
                    src={wok}
                    alt="Wok cooking animation"
                  />
                </div>
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
