import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/About" Component={About}></Route>
        <Route path="/projects" Component={Projects}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
