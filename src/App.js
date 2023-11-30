import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./pages/registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login";
import LandingPage from "./pages/Landingpage";
import Dashboard from "./pages/dashboard";
import Manage from "./pages/manage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          {/* <Route exact path="/manage" element={<Manage />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
