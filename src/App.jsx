import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import PracticeAreas from "./components/PracticeAreas"
import Results from "./components/Results"
import Attorneys from "./components/Attorneys"
import Testimonials from "./components/Testimonials"
import News from "./components/News"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="about"><About /></div>
        <div id="practice"><PracticeAreas /></div>
        <div id="results"><Results /></div>
        <div id="attorneys"><Attorneys /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="news"><News /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App