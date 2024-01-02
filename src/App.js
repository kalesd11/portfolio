import './App.css'
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/portfolio" Component={Home} />
        <Route path="/portfolio/skills" Component={Skills} />
        <Route path="/portfolio/projects" Component={Projects} />
        <Route path="/portfolio/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
