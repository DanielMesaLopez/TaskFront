import { useState } from "react";
import "./task.css";
import Axios from "axios";
import Swal from "sweetalert2";

const Task = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [idTask, setIdTask] = useState("");
  const [id_Categoria, setIdCategoria] = useState("");
  const [nombre_tarea, setNombre_tarea] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [prioridad, setPrioridad] = useState("");
  const [estado, setEstado] = useState("");
  const [fecha_creacion, setFecha_creacion] = useState("");

  const [editar, setEditar] = useState(false);

  const [taskList, setTask] = useState([]);

  const add = () => {
    Axios.post("http://localhost:3000/Task/InsertarTask", {
      id_Categoria: id_Categoria,
      id_usuario: storedUser.id_usuario,
      nombre_tarea: nombre_tarea,
      descripcion: descripcion,
      categoria: categoria,
      prioridad: prioridad,
      estado: estado,
      fecha_creacion: fecha_creacion,
    }).then(() => {
      getTask();
      limpiar();
      Swal.fire({
        title: "<strong>Registro exitoso!</strong>",
        html:
          "<i>La Tarea <strong>" +
          fecha_creacion +
          "</strong> fue registrado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  //metodo get

  const getTask = () => {
    Axios.get(
      `http://localhost:3000/Task/ConsultarTask?id_usuario=${storedUser.id_usuario}`
    ).then((response) => {
      setTask(response.data);
    });
  };

  getTask();

  //metodo put

  const editarTask = (val) => {
    setEditar(true);
    setIdTask(val.idTask);
    setIdCategoria(val.id_Categoria);

    setNombre_tarea(val.nombre_tarea);
    setDescripcion(val.descripcion);
    setCategoria(val.categoria);
    setPrioridad(val.prioridad);
    setEstado(val.estado);
    setFecha_creacion(val.fecha_creacion);
  };

  const update = () => {
    Axios.put("http://localhost:3000/Task/ActualizarTarea", {
      idTask: idTask,
      id_Categoria: id_Categoria,
      id_usuario: storedUser.id_usuario,
      nombre_tarea: nombre_tarea,
      descripcion: descripcion,
      categoria: categoria,
      prioridad: prioridad,
      estado: estado,
      fecha_creacion: fecha_creacion,
    }).then(() => {
      getTask();
      limpiar();
      Swal.fire({
        title: "<strong>Actualizacion exitosa!</strong>",
        html:
          "<i>La Tarea <strong>" +
          descripcion +
          "</strong> fue actualizado con exito!</i>",
        icon: "success",
        timer: 3000,
      });
    });
  };

  const limpiar = () => {
    setIdCategoria("");

    setNombre_tarea("");
    setDescripcion("");
    setCategoria("");
    setPrioridad("");
    setEstado("");
    setFecha_creacion("");
    setEditar(false);
  };

  const deleteTask = (val) => {
    Swal.fire({
      title: "Confirmar eliminación",
      html:
        "<i>Realmente desea eliminar a <strong>" +
        val.descripcion +
        "</strong>?</i>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo!",
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3000/Task/${val.idTask}`)
          .then(() => {
            getTask();
            limpiar();
            Swal.fire({
              icon: "success",
              title: val.nombre_tarea + " fue eliminado.",
              showCancelButton: false,
              timer: 2000,
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No se logró eliminar el producto. Intente más tarde.",
              footer:
                JSON.parse(JSON.stringify(error)).message === "Network Error"
                  ? "Intente más tarde"
                  : JSON.parse(JSON.stringify(error)).message,
            });
          });
      }
    });
  };

  return (
    <div className="container">
      <div style={{ height: 400, overflowY: "auto" }}>
        <div className="card text-center">
          <div className="card-to-do">GESTIÓN DE TAREAS</div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Id Categoría:
              </span>
              <input
                type="number"
                value={id_Categoria}
                onChange={(event) => {
                  setIdCategoria(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Tarea:
              </span>
              <input
                type="datetime"
                value={nombre_tarea}
                onChange={(event) => {
                  setNombre_tarea(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Descripción:
              </span>
              <input
                type="datetime"
                value={descripcion}
                onChange={(event) => {
                  setDescripcion(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Categoría:
              </span>
              <select
                value={categoria}
                onChange={(event) => {
                  setCategoria(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              >
                <option value="">Seleccione una opción</option>
                <option value="Universidad">Universidad</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Curso de Programación">
                  Curso de Programación
                </option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Prioridad:
              </span>
              <select
                value={prioridad}
                onChange={(event) => {
                  setPrioridad(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              >
                <option value="">Seleccione una opción</option>
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Estado:
              </span>
              <select
                value={estado}
                onChange={(event) => {
                  setEstado(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              >
                <option value="">Seleccione una opción</option>
                <option value="Pendiente">Pendiente</option>
                <option value="En proceso">En proceso</option>
                <option value="Completado">Completado</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Fecha de vencimiento:
              </span>
              <input
                type="datetime-local"
                value={fecha_creacion}
                onChange={(event) => {
                  setFecha_creacion(event.target.value);
                }}
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="card-footer text-muted">
            {editar ? (
              <div>
                <button className="btn btn-warning m-2" onClick={update}>
                  Actualizar
                </button>{" "}
                <button className="btn btn-info m-2" onClick={limpiar}>
                  Cancelar
                </button>
              </div>
            ) : (
              <button className="btn btn-success" onClick={add}>
                Agregar
              </button>
            )}
          </div>
        </div>
        <br></br>
        <div className="card-body">
          <center>
            <div className="card-to-do">LISTADO DE TAREAS</div>
          </center>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12">
            {taskList.map((val, key) => {
              return (
                <div className="col-md-4" key={val.idTask}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <p className="card-text">
                        <span>Nombre: {val.nombre_tarea}</span>
                        <br />
                        <span>Descripción: {val.descripcion}</span>
                        <br />
                        <span>Categoria: {val.categoria}</span>
                        <br />
                        <span>Prioridad: {val.prioridad}</span>
                        <br />
                        <span>Estado: {val.estado}</span>
                        <br />
                        <span>Fecha de Vencimiento: {val.fecha_creacion}</span>
                      </p>
                      <div className="btn-group">
                        <button
                          type="button"
                          onClick={() => {
                            editarTask(val);
                          }}
                          className="btn btn-info"
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            deleteTask(val);
                          }}
                          className="btn btn-danger"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
