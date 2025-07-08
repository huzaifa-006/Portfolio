import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import './index.css';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id='expertise'><Expertise /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="navbar"><Navbar /></section>
      <Footer />      
    </>
  );
}
