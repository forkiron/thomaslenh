import wok from "../assets/wok.gif";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-10 pb-8 md:pb-0 w-full">
      {/* About Content */}
      <div className="flex items-center justify-center relative pt-10 w-full">
        <div className="absolute inset-0"></div>
        <div className="w-full max-w-[600px] mx-auto px-4">
          <div
            className="text-center relative z-10"
            style={{
              fontFamily: "Pixelify Sans, monospace",
            }}
          >
            <div className="py-4 px-5 bg-black/30 shadow-lg shadow-black/30 leading-relaxed flex flex-col gap-8 rounded-lg">
              <p
                className="text-xl text-white leading-relaxed"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                }}
              >
                i'm a mathematics student at{" "}
                <a
                  href="https://uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold text-white"
                >
                  University of Waterloo
                </a>
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
                , a platform that enables students to recycle and reuse test
                papers.
              </p>
              <p
                className="text-xl text-white leading-relaxed"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                }}
              >
                you can find me playing badminton, cooking, and posting on{" "}
                <span
                  className="underline font-bold inline-flex items-center gap-2 align-middle"
                  style={{
                    background:
                      "linear-gradient(45deg, #E1306C, #fde68a, #ffec5e,  #fde68a, #FFFFFF)",
                    backgroundSize: "400% 400%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    animation: "gradientShift 3s ease-in-out infinite",
                  }}
                >
                  instagram
                  <img src={wok} alt="wok" className="w-12 h-12 inline-block" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
