import thomas1 from "../assets/thomas1.jpg";
import thomas2 from "../assets/thomas2.jpg";
import uw from "../assets/uw.png";
import scrible from "../assets/scrible.gif";
import back from "../assets/backgroundwood.png";
import front from "../assets/visiblewood.png";
import banner from "../assets/banner.png";
import { useState } from "react";

interface ProfileProps {
  onShowProjects: () => void;
  showProfile: boolean;
}

const Profile = ({ onShowProjects, showProfile }: ProfileProps) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col w-[750px] h-[600px] font-[Poppins] transition-all duration-1000 ease-out ${
        showProfile
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-90 translate-y-2 scale-98"
      }`}
    >
      <div className="flex h-50 flex-col">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-120 h-auto mx-auto mb-4"
            src={banner}
            alt="Banner"
          />
          <p
            className=" absolute text-white pt-3 rounded-lg font-bold text-5xl mb-15"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              textShadow: "black 0px 0px 1px",
            }}
          >
            hi, im thomas!
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-16 ">
        <div className="flex items-center justify-between">
          {/* Left Polaroid */}
          <div className="flex-shrink-0">
            <div className="relative bg-white p-2 shadow-lg transform rotate-[-5deg] hover:scale-110 transition-all duration-300">
              <img
                className="w-32 h-32 object-cover"
                src={thomas1}
                alt="Thomas Lenh Photo 1"
              />
              {/* Polaroid white border */}
              <div className="absolute inset-0 border-4 border-white pointer-events-none"></div>
            </div>
          </div>

          {/* Right Polaroid */}
          <div className="flex-shrink-0">
            <div className="relative bg-white p-2 shadow-lg transform rotate-[5deg] hover:scale-110 transition-all duration-300">
              <img
                className="w-32 h-32 object-cover"
                src={thomas2}
                alt="Thomas Lenh Photo 2"
              />
              {/* Polaroid white border */}
              <div className="absolute inset-0 border-4 border-white pointer-events-none"></div>
            </div>
          </div>
          <div
            className="relative flex flex-col text-lg gap-2 bg-pink-200 h-48 p-4 shadow-lg transform rotate-2 transition-all duration-300 hover:scale-105 hover:rotate-1 font-[Poppins]"
            style={{
              transform:
                "perspective(1000px) rotateX(2deg) rotateY(-2deg) rotateZ(2deg)",
              boxShadow:
                "0 8px 16px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1)",
              background: "#25593e",
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
            }}
          >
            {/* Corner fold effect */}
            <div
              className="absolute"
              style={{
                bottom: "-3px",
                right: "-3px",
                width: "23px",
                height: "23px",
                background: "#1a3627",
                clipPath: "polygon(0% 0%, 100% 0%, 0% 100%)",
                transform: "rotate(0deg)",
              }}
            ></div>
            {/* Shadow from folded corner */}
            <p className="flex items-center gap-1 0">
              <span className="text-gray-200">math @ </span>
              <img className="w-4 h-4" src={uw} alt="" />
              <span className="underline text-white">
                univeristy of waterloo
              </span>
            </p>
            <p className="italic text-gray-300 opacity-[80%]">what im up to:</p>
            <p className="text-gray-300">
              ↳ building{" "}
              <span
                className="text-white"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#fbbf24",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "3px",
                }}
              >
                TestEraser ✏️
              </span>
            </p>
            <p className="text-gray-300 flex items-center">
              <div className="flex items-center gap-1.5">
                ↳ researching for
                <span
                  className="text-white"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: "#abd5ff",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {" "}
                  Scrible{" "}
                </span>
              </div>
              <img className="w-8 h-8" src={scrible} alt="" />
            </p>
          </div>
          {/* Washi tape pieces - positioned outside sticky note to avoid clipping */}
        </div>
        <div>
          <div className="w-100 h-20 flex flex-col justify-center items-center">
            <img
              className={`absolute top-128 left-102 cursor-pointer transition-all duration-100 rotate-5 z-0 ${
                isHovered ? "scale-105 left-103 top-129" : ""
              }`}
              src={back}
              alt=""
              style={{ width: "256px", height: "128px", objectFit: "cover" }}
            />
            <img
              className={`absolute rotate-5 z-10 cursor-pointer transition-all duration-100 ${
                isClicked ? "top-125 left-100" : "top-126 left-103"
              } ${isHovered ? "scale-105 left-100 top-125 " : ""}`}
              src={front}
              alt=""
              style={{ width: "256px", height: "128px", objectFit: "cover" }}
              onMouseDown={() => setIsClicked(false)}
              onClick={onShowProjects}
              onMouseUp={() => setIsClicked(true)}
              onMouseLeave={() => {
                setIsClicked(true);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
            />
            <div
              className={`relative mb-20 ml-113 z-20 flex cursor-pointer transition-all duration-100 items-center justify-center h-full text-white font-semibold text-4xl ${
                isHovered ? "scale-105" : ""
              }`}
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 2px",
              }}
              onClick={onShowProjects}
              onMouseDown={() => setIsClicked(false)}
              onMouseUp={() => setIsClicked(true)}
              onMouseLeave={() => {
                setIsClicked(true);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
            >
              projects
            </div>
          </div>
          {/* Remove the icons from here since they'll be positioned absolutely on the sticky note */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
