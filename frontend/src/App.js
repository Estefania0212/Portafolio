//import { styled } from '@mui/material/styles';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Education from './components/Education';

function App() {
  return (
    <main>
    <Navbar />
    <Home title="" id="home"/>
    <About title="Sobre Mi" id="about" />
    <Skills title="Habilidades" id="skills" />
    <Projects title="Proyectos" id="projects" />
    <Education title="Educacion" id="education" />
    <Contact title="Contacto" id="contact" />
  </main>
  );
}

export default App;
