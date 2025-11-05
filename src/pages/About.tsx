const About = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-20 w-full">
      {/* About Content */}
      <div className="flex items-center justify-center relative pb-20 pt-10 w-full">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="w-full max-w-[600px] mx-auto px-4">
          <div
            className="text-center relative z-10"
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
            <div className="py-4 px-5 bg-black/30 shadow-lg shadow-black/30 leading-relaxed flex flex-col gap-8 rounded-lg">
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
                , a platform that enables students to recycle and reuse test
                papers.
              </p>
              <p
                className="text-xl text-white leading-relaxed"
                style={{
                  fontFamily: "Pixelify Sans, monospace",
                }}
              >
                you can find me playing badminton, learning mandarin, and
                posting on{" "}
                <span
                  className="underline font-bold"
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
