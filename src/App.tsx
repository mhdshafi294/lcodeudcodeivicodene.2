import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <div className="w-full h-3 bg-[#051F10]"></div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
