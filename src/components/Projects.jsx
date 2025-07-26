import { FaReact, FaJava, FaPython, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiDjango,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="py-5 text-light">
      <div className="container text-center" style={{ maxWidth: "1100px" }}>
        <motion.h2
          className="mb-4 text-info fw-bold"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="row g-4 justify-content-center">
          {/* Your Project Cards Here */}

          {/* Project 1: Hate Speech */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">
                  Hate Speech Recognition
                </h5>
                <p className="card-text">
                  An AI-powered system using XLNet and NLP to detect and
                  classify hate speech in English text with interactive feedback
                  and intelligent preprocessing.
                </p>
                <div className="mb-3">
                  <FaPython className="me-2" />
                  <SiDjango className="me-2" />
                  <FaDatabase className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006/Hate-Speech-Recognition-System"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: Medical Prescription System */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">
                  Medical Prescription System
                </h5>
                <p className="card-text">
                  A web-based platform for doctors to create, manage, and share
                  digital prescriptions securely with patients and pharmacies.
                  Features include patient records, medicine database, and
                  printable prescriptions.
                </p>
                <div className="mb-3">
                  <FaReact className="me-2" />
                  <SiDjango className="me-2" />
                  <SiMysql className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006/Medical-Prescription-App.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: E-Commerce */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">E-commerce Website</h5>
                <p className="card-text">
                  A responsive shopping platform built with React and Django,
                  featuring a dynamic UI, cart management, and secure admin
                  panel.
                </p>
                <div className="mb-3">
                  <FaReact className="me-2" />
                  <SiDjango className="me-2" />
                  <SiHtml5 className="me-2" />
                  <SiCss3 className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006/E-Commerce-Website"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: University Management */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">
                  University Management System
                </h5>
                <p className="card-text">
                  A Java + MySQL-based desktop application to manage courses,
                  students, faculty and grading efficiently.
                </p>
                <div className="mb-3">
                  <FaJava className="me-2" />
                  <SiMysql className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: Vehicle Registration System */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">
                  Vehicle Registration System
                </h5>
                <p className="card-text">
                  A smart desktop application to register and manage vehicle
                  data with secure login and real-time record search.
                </p>
                <div className="mb-3">
                  <FaJava className="me-2" />
                  <SiMysql className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 5: Responsive Portfolio */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">Responsive Portfolio</h5>
                <p className="card-text">
                  A single-page animated portfolio built with React, Bootstrap,
                  Framer Motion, and Vite, featuring smooth scroll and theming.
                </p>
                <div className="mb-3">
                  <FaReact className="me-2" />
                  <SiJavascript className="me-2" />
                  <SiHtml5 className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
          {/* Project 6: Number Guessing Game */}
          <div className="col-md-6 section-fade-in">
            <div className="glass-card card text-light border-info h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-info">
                  Number Guessing Game (Console App)
                </h5>
                <p className="card-text">
                  This is a beginner-friendly Python console application where
                  the user tries to guess a randomly generated number between 1
                  and 100. The program provides feedback on each guess — whether
                  it's too high or too low — and counts the number of attempts
                  taken to guess the correct number.
                </p>
                <div className="mb-3">
                  <FaPython className="me-2" />
                </div>
                <a
                  href="https://github.com/huzaifa-006/Number-Guessing-Game.git"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
