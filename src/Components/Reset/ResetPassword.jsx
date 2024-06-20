import React from "react";
import "./Reset.css";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { id_usuario, token, email, username } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3000/user/Actualizaruser?id_usuario=${storedUser.id_usuario}`,
        {
          id_usuario: parseInt(storedUser.id_usuario),
          username,
          email,
          password,
        }
      )
      .then((res) => {
        Swal.fire({
          title: "<strong>Actualizacion exitosa!</strong>",
          html:
            "<i>El Usuario <strong>" +
            username +
            "</strong> La contraseña fue actualizado con exito!, Por favor cierre la pagina dirigirse al Login!!!</i>",
          icon: "success",
          timer: 8000,
        });
        if (res.data.Status === "ok") {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h4>Reset Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>New Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
