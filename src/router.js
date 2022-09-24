import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/repositorio/:repositorio" element={<Repositorio />} />
    </Routes>
  );
};

export default Router;
