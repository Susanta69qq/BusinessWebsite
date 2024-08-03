import About from "./components/About"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Services />
      <About />
      <Footer />
    </div>
  )
}

export default App