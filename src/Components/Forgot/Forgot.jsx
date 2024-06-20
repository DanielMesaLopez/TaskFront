import React from "react";
import "./Forgot.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/forgot-password", { email: email })
      .then((res) => {
        if (res.data.Status === "Success") {
          alert(
            "Enlace para restablecer contraseña enviado a su correo electrónico."
          );
        } else {
          alert("Usuario no existe");
        }
      })
      .catch((err) => console.log(err));
  };

  return <Forgot handleSubmit={handleSubmit} setEmail={setEmail} />;
}

class Forgot extends React.Component {
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />
        <div className="form-gap"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-md-offset-4">
              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="text-center">
                    <h3>
                      <i className="fa fa-lock fa-4x"></i>
                    </h3>
                    <h2 className="text-center">Has olvidado tu contraseña?</h2>

                    <div className="panel-body">
                      <form
                        onSubmit={this.props.handleSubmit}
                        id="register-form"
                        role="form"
                        autoComplete="off"
                        className="form"
                        method="post"
                      >
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-envelope color-green"></i>
                            </span>
                            <input
                              type="email"
                              placeholder="Enter Email"
                              autoComplete="off"
                              name="email"
                              className="form-control rounded-0"
                              onChange={(e) =>
                                this.props.setEmail(e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="form-group ">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg btn-block login-button"
                          >
                            Restablecer la contraseña
                          </button>
                        </div>
                        <div className="login-ForgotPassword">
                          <a href="http://localhost:5173/">Login</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
