import "./App.css";
import Navbar from "./components/Navbar/Index";
import Hero from "./components/Hero Section/Index";
import JobSection from "./components/Job Section/Index";
import DescSection from "./components/Desc Section/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <JobSection />
      <DescSection />
    </div>
  );
}

export default App;
