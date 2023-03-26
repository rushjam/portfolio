import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
};

export default App;
