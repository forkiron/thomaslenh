import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import pixelArt from "../assets/pixel-art-1.jpeg";

const Layout = () => {
  return (
    <div
      className="w-screen min-h-screen md:h-screen"
      style={{
        backgroundImage: `url(${pixelArt})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Persistent Navbar */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout;
