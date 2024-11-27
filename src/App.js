import "../src/styles/home.css";
import "./App.css";
import img from "./assets/img.jpg";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
       
      </Routes>
  </Router>
  );



}

export default App;
