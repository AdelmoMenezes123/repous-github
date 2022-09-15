import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Repositorio from "./pages/Repositorio";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/repositorio:repositorio" element={<Repositorio />} />
    </Routes>
  );
};

export default Router;
