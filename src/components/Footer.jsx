import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Footer() {
  return (
    <footer
      className="text-light glass-card border-top mt-0 py-3"
      style={{ borderTop: '1.5px solid rgba(255,255,255,0.13)' }}
    >
      <div className="container text-center">
        <h4 className="fw-bold text-info mb-2">Muhammad Huzaifa Shafiq</h4>
        <p className="mb-3" style={{ color: '#e6edf3', textShadow: '0 1px 8px rgba(0,0,0,0.13)' }}>
          Computer Scientist | Web & Software Developer
        </p>

        <div className="d-flex justify-content-center gap-4 flex-wrap mb-3">
          <ScrollLink to="home" smooth={true} duration={200} className="footer-link">Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={200} className="footer-link">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={200} className="footer-link">Projects</ScrollLink>
          <ScrollLink to="expertise" smooth={true} duration={200} className="footer-link">Skills</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={200} className="footer-link">Contact</ScrollLink>
        </div>

        <div className="d-flex justify-content-center gap-4 fs-4">
          <a href="https://github.com/huzaifa-006" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/" target="_blank" rel="noopener noreferrer" className="footer-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:huzaifashafiq2024@gmail.com" className="footer-icon">
            <FaEnvelope />
          </a>
        </div>

        <p className="mt-3 mb-0" style={{ color: '#bfc9d1' }}>
          &copy; {new Date().getFullYear()} Muhammad Huzaifa Shafiq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
