import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Photos from "./pages/Photos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Projects />} />
      <Route path="/photos" element={<Photos />} />
    </Routes>
  );
}

export default App;
