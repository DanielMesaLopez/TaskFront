import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Task from "../Components/Gestor/Task";
import Perfil from "../Components/Perfil/Perfil";

const RutasDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/Perfil" element={<Perfil />} />
      </Routes>
    </>
  );
};

export default RutasDashboard;
