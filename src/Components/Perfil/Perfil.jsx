import { useState } from "react";

import Axios from "axios";
import Swal from "sweetalert2";

const Perfil = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [editar, setEditar] = useState(false);

  //constante para get hacer una lista
  const [usuariosList, setusuario] = useState([]);

  //metodo get
  const getUsuario = () => {
    Axios.get(
      `http://localhost:3000/user/Consultaruser?id_usuario=${storedUser.id_usuario}`
    ).then((response) => {
      setusuario(response.data);
      // alert("usuario en listados");
    });
  };
  getUsuario();

  //metodo put
  const editarusuario = (val) => {
    setEditar(true);

    setUsername(val.username);
    setEmail(val.email);
    setPassword(val.password);
  };

  const update = () => {
    Axios.put(
      `http://localhost:3000/user/Actualizaruser?id_usuario=${storedUser.id_usuario}`,
      {
        id_usuario: storedUser.id_usuario,
        username: username,
        email: email,
        password: password,
      }
    ).then(() => {
      getUsuario();
      limpiar();
      Swal.fire({
        title: "<strong>Actualizacion exitosa!</strong>",
        html:
          "<i>El Usuario <strong>" +
          username +
          "</strong> fue actualizado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  const limpiar = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setEditar(false);
  };

  return (
    <div className="container">
      <div style={{ height: 400, overflowY: "auto" }}>
        <div className="card text-center">
          <div className="card-to-do">PERFIL DE USUARIO</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre:
              </span>
              <input
                type="text"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email:
              </span>
              <input
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Password:
              </span>
              <input
                type="text"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div>
              <button className="btn btn-warning m-2" onClick={update}>
                Actualizar
              </button>{" "}
              <button className="btn btn-info m-2" onClick={limpiar}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {usuariosList.map((val, key) => {
              return (
                <tr key={val.id_usuario}>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          editarusuario(val);
                        }}
                        className="btn btn-info"
                      >
                        Editar
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Perfil;
