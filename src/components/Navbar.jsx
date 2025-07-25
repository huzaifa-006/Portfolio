import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setHide(true); // scrolling down
      } else {
        setHide(false); // scrolling up
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top px-4"
      style={{
        transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
        transform: hide ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        {/* Logo/Brand */}
        <a className="navbar-brand fw-bold text-info" href="#">
          M. Huzaifa Shafiq
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav Items */}
        <div
          className={`collapse navbar-collapse justify-content-between ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center">
            {[
              { label: "About", to: "about" },
              { label: "Skillset", to: "expertise" },
              { label: "Projects", to: "projects" },
              { label: "Contact", to: "contact" },
            ].map((item, idx) => (
              <li className="nav-item" key={idx}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={handleLinkClick}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="d-flex align-items-center gap-4 justify-content-center mt-3 mt-lg-0">
            <a
              href="https://github.com/huzaifa-006"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon text-light fs-5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon text-light fs-5"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:huzaifashafiq2024@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon text-light fs-5"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
