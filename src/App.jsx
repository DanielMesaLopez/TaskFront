import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/Register/Register.jsx";
import ForgotPassword from "./Components/Forgot/Forgot.jsx";
import ResetPassword from "./Components/Reset/ResetPassword.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Main from "./Components/Main/Main.jsx";

function App() {
  const login = window.localStorage.getItem("isLogedIn");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path="/reset_password/:id/:token/:email/:username"
          element={<ResetPassword />}
        />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
