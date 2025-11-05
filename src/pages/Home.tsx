import uw from "../assets/uw.png";
import instagram from "../assets/instagrampixel.png";
import github from "../assets/githubpixel.png";
import linkedin from "../assets/linkedinpixel.png";
import x from "../assets/twitterpixel.png";
import thomas1 from "../assets/thomas1.jpg";
import thomas2 from "../assets/thomas2.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[calc(100vh-80px)] pt-2 md:pt-4 w-full">
      {/* Content below navbar */}
      <div className="w-full max-w-[600px] mx-auto px-4">
        <div className="flex items-center flex-col justify-center">
          <div className="flex items-center justify-center py-2 md:py-10 flex-wrap gap-2 md:gap-4">
            {/* Polaroid 1 */}
            <div
              className="p-1 md:p-2 shadow-lg polaroid-rotate -rotate-5 relative overflow-hidden"
              style={{
                transform: "rotate(-5deg)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #ffffff 100%)",
                boxShadow:
                  "0 10px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 50%, rgba(255, 255, 255, 0.3) 100%)",
                }}
              />
              <img
                src={thomas2}
                alt="Thomas"
                className="w-32 h-40 md:w-[148px] md:h-[185px] pt-1 pb-2 md:pt-2 md:pb-5 object-cover relative z-10"
              />
            </div>
            <div
              className="p-1 md:p-2 shadow-lg polaroid-rotate rotate-5 relative overflow-hidden"
              style={{
                transform: "rotate(5deg)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #f8f8f8 50%, #ffffff 100%)",
                boxShadow:
                  "0 10px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, transparent 50%, rgba(255, 255, 255, 0.3) 100%)",
                }}
              />
              <img
                src={thomas1}
                alt="Thomas"
                className="w-32 h-40 md:w-[148px] md:h-[185px] pt-1 pb-2 md:pt-2 md:pb-5 object-cover relative z-10"
              />
            </div>

            {/* Polaroid 2 */}
          </div>
          <div
            className="flex text-white text-base md:text-2xl pt-1 md:pt-3 justify-center items-center gap-1 md:gap-2 flex-wrap"
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
            <img src={uw} alt="uw" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          {/* Logos */}
          <div className="flex justify-center items-center gap-4 md:gap-7 pt-4 md:pt-9">
            <a
              href="https://www.instagram.com/whattheforky/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <img
                src={instagram}
                alt="instagram"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>

            <a
              href="https://github.com/forkiron"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <div className="bg-white rounded-full">
                <img
                  src={github}
                  alt="github"
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
            </a>

            <a
              href="https://linkedin.com/in/thomas-lenh"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </a>

            <a
              href="https://x.com/forkyron"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:scale-110 transition-all duration-300"
            >
              <img src={x} alt="x" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
