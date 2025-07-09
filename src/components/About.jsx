import { FaGithub, FaDownload, FaLinkedin } from 'react-icons/fa';
import Cv from "../assets/Cv.pdf";


export default function About() {
  return (
    <section id="about" className="py-5 text-light">
      <div className="container text-center">
        <h2 className="text-info mb-5">About Me</h2>

        {/* About Me Description */}
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="fs-5">
              I'm a Computer Science graduate with a strong passion for building responsive web applications and intelligent software systems. I’ve worked on a variety of impactful projects including a Hate Speech Recognition System, E-Commerce Website, and University Management System. My expertise lies in React.js, Django, Flask, Java, and more.
            </p>
          </div>
        </div>

        {/* Quick Links + Experience Cards */}
        <div className="row justify-content-center mt-5 g-4">
          {/* Quick Links Card */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 shadow-lg text-center h-100 d-flex flex-column justify-content-between"
              style={{
                backdropFilter: 'blur(12px)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <div>
                <h5 className="text-info mb-4">Quick Links</h5>

                {/* GitHub Button */}
                <a
                  href="https://github.com/huzaifa-006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light me-2 mb-3"
                >
                  <FaGithub className="me-2" />
                  Visit GitHub
                </a>

                {/* LinkedIn Button */}
                <a
                  href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info mb-3"
                >
                  <FaLinkedin className="me-2" />
                  Visit LinkedIn
                </a>
              </div>

              {/* Download CV Button */}
              <div>
                <a
                  href="/Cv.pdf"
                  download
                  className="btn btn-outline-success"
                >
                  <FaDownload className="me-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="col-md-5">
            <div
              className="p-4 rounded-4 shadow-lg text-center h-100"
              style={{
                backdropFilter: 'blur(8px)',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <h5 className="text-info mb-2">Experience</h5>
              <p className="fs-5 mb-0 text-light">
                2+ years of experience in developing modern websites and intelligent software systems using AI, React, Django, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
