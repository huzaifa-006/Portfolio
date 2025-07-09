import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top px-4">
      <div className="container-fluid d-flex justify-content-between align-items-center w-100">
        {/* Left logo or name */}
        <a className="navbar-brand fw-bold" href="#">
          M. Huzaifa Shafiq
        </a>

        {/* Centered navigation */}
        <div className="d-flex justify-content-center flex-grow-1">
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <Link
                to="hero"
                smooth={true}
                duration={100}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="expertise"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Skillset
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side icons */}
        {/* <div className="d-flex align-items-center gap-3">
          <a href="https://github.com/huzaifa-006" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
            <FaLinkedin /> */}
        <div className="d-flex align-items-center gap-3">
          <a
            href="https://github.com/huzaifa-006"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:huzaifashafiq2024@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  );
}
