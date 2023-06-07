import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  );
};

export default PageRoutes;
