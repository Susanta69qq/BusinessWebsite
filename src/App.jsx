import About from "./components/About";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <div id="landing">
        <LandingPage />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
