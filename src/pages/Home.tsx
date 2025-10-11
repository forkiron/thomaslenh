import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import pixelArt from "../assets/pixel-art-1.jpeg";
import wok from "../assets/wok.gif";
import pixeltreeload from "../assets/pixeltreeload.png";

const Home = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Loading animation sequence
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoading(false); // Hide loading screen
    }, 3000); // Show loading for 3 seconds

    const timer2 = setTimeout(() => {
      setShowProfile(true); // Trigger profile animation
    }, 3500); // Show profile after loading

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed w-screen min-h-screen bg-black overflow-hidden">
      {/* Loading Screen */}
      {isLoading && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            backgroundImage: `url(${pixeltreeload})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <img
              className="w-48 h-48 object-cover font-pixelify rounded-lg shadow-2xl animate-pulse"
              src={wok}
              alt="Setting things up..."
            />
            <div
              className="text-white text-4xl animate-bounce"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 4px",
              }}
            >
              Setting things up...
            </div>
          </div>
        </div>
      )}

      {/* bg pixel art */}
      <div
        className="absolute inset-0 -z-20 transition-all duration-300"
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
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Profile - Centered */}
        <div className="flex justify-center items-center">
          <Profile onShowProjects={() => {}} showProfile={showProfile} />
        </div>
      </div>

      {/* About Me Section */}
      <div
        id="about"
        className="min-h-screen flex items-center justify-center bg-black/20"
      >
        <div className="text-center max-w-4xl mx-auto px-8">
          <h2
            className="text-6xl font-bold mb-8"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              color: "#fde68a",
              textShadow: "black 0px 0px 2px",
            }}
          >
            About Me
          </h2>
          <div className="space-y-6">
            <p
              className="text-xl text-white leading-relaxed"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
              }}
            >
              I'm a passionate mathematics student at the University of
              Waterloo, exploring the intersection of math and technology.
            </p>
            <p
              className="text-xl text-white leading-relaxed"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
              }}
            >
              I love building things, solving problems, and turning ideas into
              reality. Currently working on exciting projects that combine my
              mathematical background with modern web development.
            </p>
            <p
              className="text-xl text-white leading-relaxed"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
              }}
            >
              When I'm not coding or studying, you can find me exploring new
              technologies, contributing to open source projects, or sharing my
              journey on social media.
            </p>
          </div>

          {/* Down Arrow to Projects */}
          <div
            className="mt-12 cursor-pointer transition-all duration-300 animate-bounce"
            onClick={() => {
              const projectsSection = document.getElementById("projects");
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              fontFamily: "Pixelify Sans, monospace",
              fontSize: "2rem",
              color: "#fde68a",
              textShadow: "black 0px 0px 2px",
            }}
          >
            ▼
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div
        id="projects"
        className="min-h-screen flex items-center justify-center bg-black/30"
      >
        <div className="text-center max-w-6xl mx-auto px-8">
          <h2
            className="text-6xl font-bold mb-12"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              color: "#fde68a",
              textShadow: "black 0px 0px 2px",
            }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  color: "#fde68a",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                TestEraser
              </h3>
              <p
                className="text-white mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                A revolutionary tool for students to easily erase test answers
                and reuse papers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  color: "#fde68a",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                Scrible Research
              </h3>
              <p
                className="text-white mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                Contributing to research at Scrible, exploring new ways to
                enhance academic research and citation management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  Research
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  Academic
                </span>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
              <h3
                className="text-2xl font-bold mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  color: "#fde68a",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                Portfolio Website
              </h3>
              <p
                className="text-white mb-4"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  textShadow: "black 0px 0px 1px",
                }}
              >
                This pixelated portfolio showcasing my work with smooth
                animations and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-yellow-400/20 text-yellow-300 rounded text-sm">
                  Vite
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
