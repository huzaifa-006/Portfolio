import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import './index.css';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        left: 24,
        bottom: 32,
        zIndex: 9999,
        background: 'rgba(180,210,240,0.18)',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: 48,
        height: 48,
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        display: visible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      aria-label="Scroll to top"
      title="Go to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

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
      <ScrollToTopButton />
    </>
  );
}
