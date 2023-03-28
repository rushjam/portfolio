import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
};

export default App;