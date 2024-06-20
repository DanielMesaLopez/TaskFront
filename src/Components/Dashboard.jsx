import React, { useState, useEffect } from "react";
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import RutasDashboard from "../RutasInternas/RutasDashboard";

function Dashboard({ openDashboardToggle, OpenDashboard }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <section className="contenedor-dashboard">
        <aside
          id="dashboard"
          className={openDashboardToggle ? "dashboard-responsive" : ""}
        >
          <div>
            <h1>Perfil</h1>
            <p>Nombre: {user.username}</p>
            <p>Email:{user.email} </p>
          </div>
          <div className="dashboard-title">
            <div className="dashboard-brand">
              <BsPeopleFill className="icon_header" /> Task Master
            </div>
            <span className="icon close_icon" onClick={OpenDashboard}></span>
          </div>

          <ul className="dashboard-list">
            <li className="dashboard-list-item">
              <Link to="/Dashboard/Home">
                <BsGrid1X2Fill to="/Home" className="icon" /> Bienvenido
              </Link>
            </li>

            <li className="dashboard-list-item">
              <Link to="/Dashboard/Task">
                <BsFillArchiveFill to="/Task" className="icon" /> Gestor de
                Tareas
              </Link>
            </li>
            <li className="dashboard-list-item">
              <Link to="/Dashboard/Perfil">
                <BsPeopleFill to="/Perfil" className="icon" /> Configuración del
                Usuario
              </Link>
            </li>
          </ul>
          <div>
            <br /> <br />
            <button
              onClick={() => {
                localStorage.removeItem("token");
                return navigate("/");
              }}
            >
              Cerrar sesion
            </button>
          </div>
        </aside>

        <main className="main-dashboard">
          <RutasDashboard />
        </main>
      </section>
    </>
  );
}

export default Dashboard;
