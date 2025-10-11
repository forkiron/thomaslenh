const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="text-center max-w-4xl mx-auto px-8 relative z-10">
        <h2
          className="text-6xl font-bold mb-8"
          style={{
            fontFamily: "Pixelify Sans, monospace",
            color: "#fde68a",
            textShadow: "black 0px 0px 2px",
          }}
        >
          About Me
        </h2>
        <div className="space-y-6">
          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Poppins",
              textShadow: "black 0px 0px 1px",
            }}
          >
            i'm a mathematics student at the University of Waterloo, interested
            in tech that people actually need.
          </p>
          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              textShadow: "black 0px 0px 1px",
            }}
          >
            I love building things, solving problems, and turning ideas into
            reality. Currently working on exciting projects that combine my
            mathematical background with modern web development.
          </p>
          <p
            className="text-xl text-white leading-relaxed"
            style={{
              fontFamily: "Pixelify Sans, monospace",
              textShadow: "black 0px 0px 1px",
            }}
          >
            When I'm not coding or studying, you can find me exploring new
            technologies, contributing to open source projects, or sharing my
            journey on social media.
          </p>
        </div>

        {/* Down Arrow to Projects */}
        <div
          className="mt-12 cursor-pointer transition-all duration-300 animate-bounce"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            fontFamily: "Pixelify Sans, monospace",
            fontSize: "2rem",
            color: "#fde68a",
            textShadow: "black 0px 0px 2px",
          }}
        >
          ▼
        </div>
      </div>
    </div>
  );
};

export default About;
