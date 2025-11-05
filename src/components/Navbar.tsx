import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[600px] mx-auto px-4">
        {/* Mobile: Stacked vertically, Desktop: Horizontal with name left, nav right */}
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between mt-4 md:mt-20 w-full">
          {/* Name */}
          <p
            className="font-bold text-2xl md:text-4xl mb-2 md:mb-0"
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
          {/* Navigation Bar */}
          <div className="flex gap-3 md:gap-8 items-center text-sm md:text-base">
            <Link
              to="/"
              className="pb-1 cursor-pointer transition-opacity duration-300"
              style={{
                fontFamily: "Pixelify Sans, monospace",
                textShadow: "black 0px 0px 1px",
                color:
                  pathname === "/"
                    ? "rgba(255, 255, 255, 1)"
                    : "rgba(255, 255, 255, 0.8)",
                opacity: pathname === "/" ? 1 : 0.8,
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
                    : "rgba(255, 255, 255, 0.8)",
                opacity: pathname === "/about" ? 1 : 0.8,
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
                    : "rgba(255, 255, 255, 0.8)",
                opacity: pathname === "/works" ? 1 : 0.8,
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
                    : "rgba(255, 255, 255, 0.8)",
                opacity: pathname === "/photos" ? 1 : 0.8,
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
        {/* Divider line */}
        <div className="w-full max-w-[148px] md:w-148 h-[2px] bg-white opacity-75 mt-2 md:mt-2 mb-2 md:mb-6 mx-auto"></div>
      </div>
    </div>
  );
};

export default Navbar;
