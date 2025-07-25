import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { FaGithub, FaTwitter, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser"
export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        'service_gov4i0f',
        'template_x5u6x3p',
        formRef.current,
        'x3HWrv6woJSp_Ylan'
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="pt-5 text-light">
      <div className="container">
        <motion.h2
          className="text-center mb-5 text-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <div className="row g-4 align-items-start justify-content-center">
          {/* Left - Contact Form */}
          <div className="col-md-6">
            <div className="glass-card p-4 rounded-4 shadow-lg">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control bg-dark text-light border-secondary"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control bg-dark text-light border-secondary"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="form-control bg-dark text-light border-secondary"
                  />
                </div>

                <button type="submit" className="btn btn-outline-info">
                  Send Message
                </button>
              </form>

              {status && (
                <div className="mt-3 text-info fw-bold">{status}</div>
              )}
            </div>
          </div>
{/* Right - Contact Info */}
<div className="col-12 col-md-5">
  <div
    className="p-4 rounded-4 shadow-lg mb-4"
    style={{
      backdropFilter: "blur(12px)",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    }}
  >
    <h5 className="text-info mb-4 text-center text-md-start">Reach Me Directly</h5>

    {/* Email */}
    <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
      <FaEnvelope className="me-md-3 mb-2 mb-md-0 text-info fs-4" />
      <a
        href="mailto:huzaifashafiq2024@gmail.com"
        className="fs-6 text-decoration-none text-light"
      >
        huzaifashafiq2024@gmail.com
      </a>
    </div>

    {/* Phone */}
    <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
      <FaPhoneAlt className="me-md-3 mb-2 mb-md-0 text-info fs-5" />
      <a
        href="tel:+923346971121"
        className="fs-6 text-decoration-none text-light"
      >
        +92 334 6971121
      </a>
    </div>

    {/* LinkedIn */}
    <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
      <FaLinkedin className="me-md-3 mb-2 mb-md-0 text-info fs-4" />
      <a
        href="https://www.linkedin.com/in/muhammad-huzaifa-shafiq-b4089b232/"
        className="fs-6 text-decoration-none text-light"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
    {/* GitHub */}
    <div className="mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center">
      <FaGithub className="me-md-3 mb-2 mb-md-0 text-info fs-4" />
      <a
        href="https://github.com/huzaifa-006"
        className="fs-6 text-decoration-none text-light"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    </div>
    
  </div>

  {/* Location Section */}
  <div
    className="p-4 rounded-4 shadow-lg"
    style={{
      backdropFilter: "blur(12px)",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
    }}
  >
    <h5 className="text-info mb-4 text-center text-md-start">Location</h5>
    <div className="mb-3 d-flex align-items-center">
      <FaLocationArrow className="me-3 text-info fs-4" />
      <span>Rawalpindi, Pakistan</span>
    </div>
  </div>
</div>

</div>

</div>
        
      
    </section>
  );
}
