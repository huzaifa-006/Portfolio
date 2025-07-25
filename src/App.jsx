import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Expertise from './components/Expertise';
import './index.css';
import Footer from './components/Footer';
import { useEffect, useState, useRef } from 'react';

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

// Loading Spinner Component
function LoadingSpinner() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(24,24,24,0.96)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'opacity 0.4s',
    }}>
      <div style={{
        width: 64,
        height: 64,
        border: '6px solid #00ffe7',
        borderTop: '6px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}</style>
    </div>
  );
}

// Confetti burst (simple SVG burst)
function ConfettiBurst({ show }) {
  if (!show) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 99999,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: 'fadeOutConfetti 2.2s forwards',
    }}>
      <svg width="320" height="320" viewBox="0 0 320 320">
        <g>
          {[...Array(18)].map((_, i) => (
            <circle key={i} cx="160" cy="160" r="8" fill="#00ffe7"
              style={{
                transform: `rotate(${i * 20}deg) translate(0, -120px)`,
                transformOrigin: '160px 160px',
                opacity: 0.7,
                transition: 'all 1.2s',
              }} />
          ))}
        </g>
      </svg>
      <div style={{
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        fontSize: 32,
        fontWeight: 700,
        textShadow: '0 2px 12px #00ffe7',
        background: 'rgba(24,24,24,0.7)',
        borderRadius: 16,
        padding: '16px 32px',
        animation: 'popIn 0.6s',
      }}>
        🎉 You found the easter egg! 🎉
      </div>
      <style>{`
        @keyframes fadeOutConfetti { 0%{opacity:1;} 80%{opacity:1;} 100%{opacity:0;} }
        @keyframes popIn { 0%{transform:scale(0.7) translate(-50%,-50%);} 100%{transform:scale(1) translate(-50%,-50%);} }
      `}</style>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const konamiRef = useRef([]);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const konami = [38,38,40,40,37,39,37,39,66,65];
    const onKeyDown = (e) => {
      konamiRef.current.push(e.keyCode);
      if (konamiRef.current.length > konami.length) konamiRef.current.shift();
      if (konami.every((v,i) => v === konamiRef.current[i])) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2200);
        konamiRef.current = [];
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  return (
    <>
      {loading && <LoadingSpinner />}
      <ConfettiBurst show={showConfetti} />
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.4s' }}>
        <AnimatedBackground />
        <section id="hero"><Hero /></section>
        <section id="about" className="section-fade-in"><About /></section>
        {/* Simple Fade Divider: About -> Expertise */}
        <div style={{ width: '100%', height: '48px', marginTop: '-16px', zIndex: 1, background: 'linear-gradient(to bottom, rgba(24,24,24,0) 0%, #2a3442 100%)' }} />
        <section id='expertise' className="section-fade-in"><Expertise /></section>
        {/* Simple Fade Divider: Expertise -> Projects */}
        <div style={{ width: '100%', height: '48px', marginTop: '-16px', zIndex: 1, background: 'linear-gradient(to bottom, rgba(24,24,24,0) 0%, #2a3442 100%)' }} />
        <section id="projects" className="section-fade-in"><Projects /></section>
        {/* Simple Fade Divider: Projects -> Contact */}
        <div style={{ width: '100%', height: '48px', marginTop: '-16px', zIndex: 1, background: 'linear-gradient(to bottom, rgba(24,24,24,0) 0%, #2a3442 100%)' }} />
        <section id="contact" className="section-fade-in"><Contact /></section>
        <section id="navbar"><Navbar /></section>
        <Footer />      
        <ScrollToTopButton />
      </div>
    </>
  );
}
