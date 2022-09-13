import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
     <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
