import { useState } from "react";
import thomas1 from "../assets/thomas1.jpg";
import thomas2 from "../assets/thomas2.jpg";
import uw from "../assets/uw.png";
import instagram from "../assets/instagrampixel.png";
import back from "../assets/backgroundwood.png";
import front from "../assets/visiblewood.png";
import banner from "../assets/banner.png";

interface ProfileProps {
  onShowProjects: () => void;
  showProfile: boolean;
}

const Profile = ({ onShowProjects, showProfile }: ProfileProps) => {
  const [isClicked, setIsClicked] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`flex flex-col w-[775px]  h-[600px] font-[Poppins] transition-all duration-1000 ease-out ${
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
      <div className="flex flex-col">
        <div className="flex items-center gap-25">
          <div className="flex pl-10 gap-5 items-center">
            {/* Left Polaroid */}
            <div className="flex-shrink-0">
              <div className="relative bg-white p-3 shadow-md border-1 border-gray-200 transform rotate-[-5deg] hover:scale-110 transition-all duration-300">
                {/* Top white space  */}
                <div className="h-0.5 bg-white"></div>
                <img
                  className="w-28 h-36 border-1 border-gray-400 object-cover"
                  src={thomas1}
                  alt="Thomas Lenh Photo 1"
                />
                {/* Bottom white space */}
                <div className="h-6 bg-white"></div>
              </div>
            </div>

            {/* Right Polaroid */}
            <div className="flex-shrink-0">
              <div className="relative bg-white p-3 shadow-lg transform border-gray-200 rotate-[5deg] hover:scale-110 transition-all duration-300">
                {/* Top white space (like real polaroid) */}
                <div className="h-0.5 bg-white"></div>
                <img
                  className="w-28 h-36 border-gray-400  object-cover"
                  src={thomas2}
                  alt="Thomas Lenh Photo 2"
                />
                {/* Bottom white space */}
                <div className="h-6 bg-white"></div>
              </div>
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
                className="text-white font-semibold"
                style={{
                  textDecoration: "underline",
                  textDecorationColor:
                    "#linear-gradient(to right, #8b5cf6, #ec4899, #eab308)",
                  textDecorationThickness: "2px",
                  textUnderlineOffset: "3px",
                }}
              >
                TestEraser ✏️
              </span>
            </p>
            <p className="text-gray-300 flex items-center">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1.5">
                  ↳ Posting on
                  <span
                    className="text-white font-semibold relative"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Instagram{" "}
                    <div
                      className="absolute bottom-0 left-0 w-full h-0.5"
                      style={{
                        background:
                          "linear-gradient(to right, #8b5cf6, #ec4899, #eab308)",
                      }}
                    ></div>
                  </span>
                </div>
                <img className="w-4 h-4" src={instagram} alt="" />
              </div>
            </p>
          </div>
        </div>
        <div>
          <div className="flex h-55 w-170 justify-end items-end">
            <div
              className="relative cursor-pointer transition-all duration-100 hover:scale-105"
              onMouseDown={() => setIsClicked(false)}
              onClick={onShowProjects}
              onMouseUp={() => setIsClicked(true)}
              onMouseLeave={() => {
                setIsClicked(true);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
            >
              {/* Back sticky note */}
              <img
                className={`relative z-0 transition-all duration-100 rotate-5 ${
                  isHovered ? "scale-105" : ""
                }`}
                src={back}
                alt=""
                style={{ width: "256px", height: "128px", objectFit: "cover" }}
              />

              {/* Front sticky note */}
              <img
                className={`absolute bottom-[10px] right-[4px] z-10 transition-all duration-100 rotate-5 ${
                  isClicked
                    ? "translate-y-[-2px] translate-x-[-2px]"
                    : "translate-y-0 translate-x-0"
                } ${isHovered ? "scale-105" : ""}`}
                src={front}
                alt=""
                style={{ width: "256px", height: "128px", objectFit: "cover" }}
              />

              {/* Projects text */}
              <div
                className={`absolute top-10 left-10 z-20 flex items-center justify-center text-white font-semibold text-4xl transition-all duration-100 ${
                  isClicked
                    ? "translate-y-[-2px] translate-x-[-2px]"
                    : "translate-y-0 translate-x-0"
                } ${isHovered ? "scale-105" : ""}`}
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                  textShadow: "black 0px 0px 2px",
                }}
              >
                projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
