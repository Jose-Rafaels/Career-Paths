import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/pages/Home/HomePage";
import LoginPage from "../src/pages/Login/LoginPages";
import RegisterPage from "../src/pages/Register/RegisterPage";
import IntroPage from "../src/pages/Intro Test/Intro";
import TestPage1 from "../src/pages/Test/Test";
import IntroResultPage from "../src/pages/Intro Result/IntroResult";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/intro-test" element={<IntroPage />} />
          <Route path="/test-page-1" element={<TestPage1 />} />
          <Route path="/intro-result" element={<IntroResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
