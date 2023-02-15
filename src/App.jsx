import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home/HomePage";
import LoginPage from "../src/pages/Login/LoginPages";
import RegisterPage from "../src/pages/Register/RegisterPage";
import IntroPage from "../src/pages/Intro Test/Intro";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/intro-test" element={<IntroPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
