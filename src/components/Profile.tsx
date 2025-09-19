import wok from "../assets/wok.gif";
import uw from "../assets/uw.png";
import scrible from "../assets/scrible.gif";
import back from "../assets/backgroundwood.png";
import front from "../assets/visiblewood.png";
import banner from "../assets/banner.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { globalIgnores } from "eslint/config";

const Profile = () => {
  const [isClicked, setIsClicked] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-[750px] h-[600px] font-[Poppins] ">
      <div className="flex h-50 flex-col ">
        <img className="w-90 h-full" src={banner} alt="" />
        <p className=" text-[#e6e1c1] pt-3 rounded-lg text-5xl mb-5 font-[Merriweather]">
          hi, im thomas!
        </p>
        <p className="text-lg text-white ">
          i love finding creative ways to solve{" "}
          <span className="bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {" "}
            not-so-obvious{" "}
          </span>{" "}
          yet
          <b className="bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            {" "}
            widespread
          </b>{" "}
          problems
        </p>
      </div>
      <div className="flex flex-col  gap-16 ">
        <div className="flex items-center   justify-between">
          <img
            className="w-65 h-65 hover:scale-110 transition-all duration-300"
            src={wok}
            alt=""
          />
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
          <div className="w-100 h-20">
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
              onMouseUp={() => setIsClicked(true)}
              onMouseLeave={() => {
                setIsClicked(true);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
            />
            <div
              className="relative left-55 bottom-2 z-20 flex items-center justify-center h-full text-white font-[Poppins] font-semibold text-md cursor-pointer"
              onClick={() => navigate("/projects")}
              onMouseDown={() => setIsClicked(false)}
              onMouseUp={() => setIsClicked(true)}
              onMouseLeave={() => {
                setIsClicked(true);
                setIsHovered(false);
              }}
              onMouseEnter={() => setIsHovered(true)}
            >
              Projects
            </div>
          </div>
          {/* Remove the icons from here since they'll be positioned absolutely on the sticky note */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
