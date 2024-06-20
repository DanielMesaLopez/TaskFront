import "./Login.css";
import Dashboard from "../Dashboard.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmial] = useState("");
  const [username, setUsername] = useState("");

  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const navigate = useNavigate();

  const handdleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
      email: email,
    };
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.token);

        if (result.token) {
          const user = { username, email };

          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));

          setLoginSuccessful(true);
          navigate("/Dashboard");
        } else {
          setLoginSuccessful(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loginSuccessful ? (
        <Dashboard />
      ) : (
        <div className="main">
          <div className="container">
            <center>
              <div className="middle">
                <div id="Dashboard">
                  <div className="custom-form">
                    <form>
                      <fieldset className="clearfix">
                        <p>
                          <span className="fa fa-user custom-label"></span>
                          <input
                            onChange={(event) => {
                              setUsername(event.target.value);
                            }}
                            placeholder="Username"
                            className="custom-input"
                            type="text"
                            required
                          />
                        </p>
                        <p>
                          <span className="fa fa-lock custom-label"></span>
                          <input
                            onChange={(event) => {
                              setPassword(event.target.value);
                            }}
                            placeholder="Password"
                            className="custom-input"
                            type="password"
                            required
                          />
                        </p>
                        <a
                          href="http://localhost:5173/ForgotPassword"
                          onClick={() => nagigateToOtp()}
                          className="text-gray-800"
                        >
                          Forgot password?
                        </a>

                        <div className="text-center lg:text-left">
                          <button
                            className="custom-button"
                            onClick={handdleLogin}
                          >
                            Login
                          </button>
                          <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                            No tienes una Cuenta?
                            <a
                              href="http://localhost:5173/Register"
                              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >
                              Registro
                            </a>
                          </p>
                        </div>
                      </fieldset>
                    </form>
                    <div className="clearfix"></div>
                  </div>
                </div>
                <div className="logo">
                  <img
                    className="imagen"
                    src="https://i.ibb.co/nwWzyt2/task.png"
                  />
                  <div className="clearfix"></div>
                </div>
              </div>
            </center>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
