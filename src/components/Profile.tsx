import uw from "../assets/uw.png";
import instagram from "../assets/instagrampixel.png";
import github from "../assets/githubpixel.png";
import linkedin from "../assets/linkedinpixel.png";
import x from "../assets/twitterpixel.png";

interface ProfileProps {
  showProfile: boolean;
}

const Profile = ({ showProfile }: ProfileProps) => {
  return (
    <div
      className={`flex flex-col pt-22 w-[750px] h-[600px] font-[Poppins] transition-all duration-1000 ease-out ${
        showProfile
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-90 translate-y-2 scale-98"
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
        </div>
        <div
          className="flex text-white text-2xl pt-3 justify-center items-center  gap-2"
          style={{
            fontFamily: "Pixelify Sans, monospace",
            textShadow: "black 0px 0px 1px",
          }}
        >
          <p>studying math</p>

          <p>@university of waterloo</p>
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
        {/* Pixelated Down Arrow */}
      </div>
      <div className="flex w-full justify-center items-center">
        <div
          className="bottom-0 cursor-pointer transition-all duration-300 opacity-70 hover:opacity-90 animate-bounce"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            fontFamily: "Pixelify Sans, monospace",
            fontSize: "2rem",
            color: "#ffffff",
          }}
        >
          ▼
        </div>
      </div>
    </div>
  );
};

export default Profile;
