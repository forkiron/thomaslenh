import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import uw from "../assets/uw.png";
import instagram from "../assets/instagrampixel.png";
import github from "../assets/githubpixel.png";
import linkedin from "../assets/linkedinpixel.png";
import x from "../assets/twitterpixel.png";
import DownArrow from "./DownArrow";
import test from "../assets/testbg.png";

interface ProfileProps {
  showProfile: boolean;
}

const Profile = ({ showProfile }: ProfileProps) => {
  const [showArrow, setShowArrow] = useState(true);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        // Hide arrow when about section comes into view
        if (aboutRect.top < window.innerHeight * 0.7) {
          setShowArrow(false);
        } else {
          setShowArrow(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial arrow state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-col pt-22 w-[750px] h-[600px] font-[Poppins] transition-all duration-1000 ease-out ${
        showProfile
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-90 translate-y-2 scale-100"
      }`}
    >
      <div className="flex h-full items-center flex-col">
        <div className="flex flex-col justify-center  items-center">
          <p
            className="pt-3 font-bold text-5xl"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              background:
                "linear-gradient(45deg, #fde68a, #fef3c7, #fde68a,  #fef3c7, #fde68a)",
              backgroundSize: "400% 400%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "gradientShift 5s ease-in-out infinite",
            }}
          >
            hi, im thomas!
          </p>
          {/* Dividing Line */}
          <div className="w-full h-[2px] bg-white opacity-25 mt-2 mb-6"></div>

          {/* Navigation Bar */}
          <div className="flex gap-8 pt-4 pb-2">
            <Link
              to="/"
              className="pb-1 cursor-pointer transition-opacity duration-300"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
                color:
                  pathname === "/"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(156, 163, 175, 0.4)",
                opacity: pathname === "/" ? 1 : 0.4,
                background: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                  linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
                `,
                backgroundSize: "100% 0.1em, 0 0.1em",
                backgroundPosition: "100% 100%, 0 100%",
                backgroundRepeat: "no-repeat",
                transition:
                  "background-size 800ms ease-in-out, opacity 300ms ease-in-out, color 300ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "0 0.1em, 100% 0.1em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100% 0.1em, 0 0.1em";
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="pb-1 cursor-pointer transition-opacity duration-300"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
                color:
                  pathname === "/about"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(156, 163, 175, 0.4)",
                opacity: pathname === "/about" ? 1 : 0.4,
                background: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                  linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
                `,
                backgroundSize: "100% 0.1em, 0 0.1em",
                backgroundPosition: "100% 100%, 0 100%",
                backgroundRepeat: "no-repeat",
                transition:
                  "background-size 800ms ease-in-out, opacity 300ms ease-in-out, color 300ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "0 0.1em, 100% 0.1em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100% 0.1em, 0 0.1em";
              }}
            >
              About
            </Link>
            <Link
              to="/works"
              className="pb-1 cursor-pointer transition-opacity duration-300"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
                color:
                  pathname === "/works"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(156, 163, 175, 0.4)",
                opacity: pathname === "/works" ? 1 : 0.4,
                background: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                  linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
                `,
                backgroundSize: "100% 0.1em, 0 0.1em",
                backgroundPosition: "100% 100%, 0 100%",
                backgroundRepeat: "no-repeat",
                transition:
                  "background-size 800ms ease-in-out, opacity 300ms ease-in-out, color 300ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "0 0.1em, 100% 0.1em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100% 0.1em, 0 0.1em";
              }}
            >
              Works
            </Link>
            <Link
              to="/photos"
              className="pb-1 cursor-pointer transition-opacity duration-300"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
                color:
                  pathname === "/photos"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(156, 163, 175, 0.4)",
                opacity: pathname === "/photos" ? 1 : 0.4,
                background: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                  linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
                `,
                backgroundSize: "100% 0.1em, 0 0.1em",
                backgroundPosition: "100% 100%, 0 100%",
                backgroundRepeat: "no-repeat",
                transition:
                  "background-size 800ms ease-in-out, opacity 300ms ease-in-out, color 300ms ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundSize = "0 0.1em, 100% 0.1em";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundSize = "100% 0.1em, 0 0.1em";
              }}
            >
              Photos
            </Link>
          </div>
        </div>
        <div
          className="flex text-white text-2xl pt-3 justify-center items-center  gap-2"
          style={{
            fontFamily: "Pixelify Sans, monospace",
            textShadow: "black 0px 0px 1px",
          }}
        >
          <p>studying math</p>

          <a
            href="https://uwaterloo.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            style={{
              background: `
                linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),
                linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1))
              `,
              backgroundSize: "100% 0.1em, 0 0.1em",
              backgroundPosition: "100% 100%, 0 100%",
              backgroundRepeat: "no-repeat",
              transition: "background-size 800ms ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundSize = "0 0.1em, 100% 0.1em";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundSize = "100% 0.1em, 0 0.1em";
            }}
          >
            @university of waterloo
          </a>
          <img src={uw} alt="uw" className="w-6 h-6" />
        </div>
        {/* Logos */}
        <div className="flex justify-center items-center gap-7 pt-9">
          <a
            href="https://www.instagram.com/whattheforky/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <img src={instagram} alt="instagram" className="w-8 h-8" />
          </a>

          <a
            href="https://github.com/forkiron"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <div className="bg-white rounded-full">
              <img src={github} alt="github" className="w-8 h-8" />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/thomas-lenh"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <img src={linkedin} alt="linkedin" className="w-8 h-8" />
          </a>

          <a
            href="https://x.com/forkyron"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <img src={x} alt="x" className="w-8 h-8" />
          </a>
        </div>
        {/* Dynamic Down Arrow */}
      </div>
      <div className="flex w-full justify-center items-center">
        <DownArrow
          targetId="about"
          isVisible={showArrow}
          onArrowClick={() => setShowArrow(false)}
        />
      </div>
    </div>
  );
};

export default Profile;
