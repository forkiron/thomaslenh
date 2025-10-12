import { useState, useEffect } from "react";
import DownArrow from "./DownArrow";

const About = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");

      if (aboutSection && projectsSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const projectsRect = projectsSection.getBoundingClientRect();

        // Hide arrow when user scrolls past about section or when projects section is visible
        if (
          aboutRect.bottom < window.innerHeight * 0.3 ||
          projectsRect.top < window.innerHeight * 0.7
        ) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div
        className="text-center max-w-2xl mx-auto px-8 relative z-10"
        style={{
          fontFamily: "Pixelify Sans, monospace",
        }}
      >
        <h2
          className="text-6xl font-bold mb-8"
          style={{
            background:
              "linear-gradient(45deg, #fde68a, #ffcc26, #fde68a,  #ffcc26, #fde68a)",
            backgroundSize: "400% 400%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "gradientShift 5s ease-in-out infinite",
          }}
        >
          About Me
        </h2>
        <div className=" py-4 px-5 bg-black/30 shadow-lg shadow-black/30 leading-relaxed flex flex-col gap-8 rounded-lg">
          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Pixelify Sans, monospace",
            }}
          >
            i'm a mathematics student at{" "}
            <span className="underline font-semibold text-white">
              University of Waterloo
            </span>
            , interested in innovative tech that people actually need.
          </p>

          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Pixelify Sans, monospace",
            }}
          >
            currently building{" "}
            <span
              className="underline font-bold "
              style={{
                background:
                  "linear-gradient(45deg, #FFFFFF, #fde68a, #ffec5e,  #fde68a, #FFFFFF)",
                backgroundSize: "400% 400%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientShift 5s ease-in-out infinite",
              }}
            >
              TestEraser
            </span>
            , a platform that enables students to recycle and reuse test papers.
          </p>
          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Pixelify Sans, monospace",
            }}
          >
            you can find me playing badminton, learning mandarin, and posting on{" "}
            <span
              className="underline font-bold"
              style={{
                background:
                  "linear-gradient(45deg, #E1306C, #fde68a, #ffec5e,  #fde68a, #FFFFFF)",
                backgroundSize: "400% 400%",
                backgroundClip: "text", // E1306C #833AB4 #833AB4
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "gradientShift 3s ease-in-out infinite",
              }}
            >
              instagram
            </span>
          </p>
        </div>

        {/* Dynamic Down Arrow */}
        <div className="mt-12 flex justify-center">
          <DownArrow
            targetId="projects"
            isVisible={showArrow}
            onArrowClick={() => setShowArrow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
