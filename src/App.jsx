import "./App.css";
import Navbar from "./components/Navbar Section/Index";
import Hero from "./components/Hero Section/Index";
import JobSection from "./components/Job Section/Index";
import DescSection from "./components/Desc Section/Index";
import Footer from "./components/Footer Section/Index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <JobSection />
      <DescSection />
      <Footer />
    </div>
  );
}

export default App;
