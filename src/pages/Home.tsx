import { useState, useEffect } from "react";
import Profile from "../components/Profile";
import About from "../components/About";
import Projects from "../components/Projects";
import pixelArt from "../assets/pixel-art-1.jpeg";
import wok from "../assets/wok.gif";
import pixeltreeload from "../assets/pixeltreeload.png";

const Home = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // set to true to show loading screen

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
    <div
      className="w-screen min-h-screen"
      style={{
        backgroundImage: `url(${pixelArt})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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

      {/* Main Profile Section */}
      <div
        className={`flex justify-center items-center min-h-screen transition-all duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Profile - Centered */}
        <div className="flex justify-center items-center">
          <Profile showProfile={showProfile} />
        </div>
      </div>

      {/* About Me Section */}
      <About />

      {/* Projects Section */}
      <Projects />
    </div>
  );
};

export default Home;
