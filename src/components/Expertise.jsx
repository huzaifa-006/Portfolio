import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    icon: <span className="icon-pulse"><FaCode size={30} color="#0ef" /></span>,
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "tailwind CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: <span className="icon-pulse"><FaServer size={30} color="#ff00ff" /></span>,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 65 },
      { name: "Django", level: 60 },
      { name: "Flask", level: 60 },
      { name: "C#", level: 65 },
    ],
  },
  {
    category: "Cloud & Databases",
    icon: <span className="icon-pulse"><FaCloud size={30} color="#00f2ff" /></span>,
    skills: [
      { name: "SQL / PostgreSQL", level: 75 },
      { name: "MongoDB", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    category: "Languages",
    icon: <span className="icon-pulse"><FaTools size={30} color="#ffa500" /></span>,
    skills: [
      { name: "C++", level: 80 },
      { name: "Java (Android)", level: 75 },
      { name: "C#", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
    ],
  },
];

// Certificate logos (dummy URLs or local assets)
const certLogos = {
  Coursera: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg",
  IBM: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "LinkedIn Learning": "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
};

// Coursera logo URL
const courseraLogo = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo.svg";
// Local SVG data URI fallback for Coursera
const courseraLogoDataUri =
  "data:image/svg+xml,%3Csvg width='36' height='36' viewBox='0 0 36 36' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='18' cy='18' r='18' fill='%23006EFF'/%3E%3Ctext x='50%25' y='55%25' text-anchor='middle' fill='white' font-size='14' font-family='Arial' dy='.3em'%3EC%3C/text%3E%3C/svg%3E";

// Animated Counter Hook
function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    let raf;
    function animate() {
      start += step;
      if (start >= target) {
        setCount(target);
      } else {
        setCount(start);
        raf = requestAnimationFrame(animate);
      }
    }
    animate();
    return () => raf && cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

// Smooth animated counter hook with trigger
function useSmoothCountUp(target, duration = 1200, trigger = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    let startTime = null;
    let raf;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
  }, [target, duration, trigger]);
  return count;
}

export default function Expertise() {
  const [hovered, setHovered] = useState(null);
  const [refreshKey, setRefreshKey] = useState({});

  const handleHover = (index) => {
    setHovered(index);
    setRefreshKey((prev) => ({ ...prev, [index]: Date.now() }));
  };

  // Reveal on scroll
  const [revealed, setRevealed] = useState(false);
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setRevealed(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Hover state for each stat
  const [hoveredStat, setHoveredStat] = useState(null);
  const years = useSmoothCountUp(2, 400, revealed || hoveredStat === 'years');
  const projects = useSmoothCountUp(12, 600, revealed || hoveredStat === 'projects');
  const certs = useSmoothCountUp(6, 500, revealed || hoveredStat === 'certs');
  const techs = useSmoothCountUp(18, 700, revealed || hoveredStat === 'techs');
 
  return (
    <section id="expertise" className="text-center text-light py-5">
      {/* Animated Stats Bar */}
      <div className="container mb-5 d-flex justify-content-center align-items-center" ref={statsRef} style={{ minHeight: 120 }}>
        <div className="row justify-content-center g-4 w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="col-6 col-md-3">
            <div className="glass-card p-3 shadow-sm" style={{ borderRadius: '2rem' }}
              onMouseEnter={() => setHoveredStat('years')}
              onMouseLeave={() => setHoveredStat(null)}>
              <div className="fs-2 fw-bold text-info">{years}+</div>
              <div className="small text-light">Years Experience</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="glass-card p-3 shadow-sm" style={{ borderRadius: '2rem' }}
              onMouseEnter={() => setHoveredStat('projects')}
              onMouseLeave={() => setHoveredStat(null)}>
              <div className="fs-2 fw-bold text-info">{projects}+</div>
              <div className="small text-light">Projects</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="glass-card p-3 shadow-sm" style={{ borderRadius: '2rem' }}
              onMouseEnter={() => setHoveredStat('certs')}
              onMouseLeave={() => setHoveredStat(null)}>
              <div className="fs-2 fw-bold text-info">{certs}+</div>
              <div className="small text-light">Certifications</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="glass-card p-3 shadow-sm" style={{ borderRadius: '2rem' }}
              onMouseEnter={() => setHoveredStat('techs')}
              onMouseLeave={() => setHoveredStat(null)}>
              <div className="fs-2 fw-bold text-info">{techs}+</div>
              <div className="small text-light">Technologies</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <motion.h2
          className="text-info mb-5"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          My Skillset
        </motion.h2>
        <div className="row justify-content-center g-4">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx} className="col-md-6 col-lg-3 d-flex section-fade-in">
              <div
                className="glass-card p-4 rounded-4 shadow-lg w-100 d-flex flex-column justify-content-between"
                style={{ minHeight: "100%" }}
              >
                <div className="mb-2">{group.icon}</div>
                <h5 className="text-white mb-3">{group.category}</h5>
                {group.skills.map((skill, i) => {
                  const index = `${gIdx}-${i}`;
                  return (
                    <div
                      key={index}
                      className="mb-3 position-relative text-start"
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <div className="d-flex justify-content-between small">
                        <span>{skill.name}</span>
                      </div>
                      <AnimatePresence>
                        {hovered === index && (
                          <motion.span
                            className="position-absolute end-0 text-info small"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: -12 }}
                            exit={{ opacity: 0, y: -6 }}
                            style={{ fontWeight: "light" }}
                          >
                            {skill.level}%
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <div
                        className="progress bg-secondary mt-1"
                        style={{ height: "13px" }}
                      >
                        <motion.div
                          className="progress-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.04 }}
                          key={refreshKey[index]}
                          style={{
                            height: "100%",
                            backgroundColor:
                              hovered === index ? "#00ffe7" : "#0dcaf0",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications & Awards Section */}
      <div className="container mt-5">
        <motion.h3
          className="text-info mb-4"
          style={{ fontFamily: 'Montserrat, Poppins, sans-serif', fontWeight: 600 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h3>
        <div className="row g-3 justify-content-center">
          {[
            { title: "Programming for Everybody (Python)", org: "Coursera", year: 2025, link: "https://www.coursera.org/account/accomplishments/verify/UF5QZD4NNCFT" },
            { title: "Python data Structures", org: "Coursera", year: 2025, link: "https://www.coursera.org/account/accomplishments/verify/K59SRACBNL42" },
            { title: "Introduction to Web Development with HTML, CSS, JavaScript", org: "IBM", year: 2025, link: "https://www.coursera.org/account/accomplishments/verify/KRQ7QTRZ4XIZ" },
            { title: "React.js Essential Training", org: "LinkedIn Learning", year: 2024, link: "https://www.linkedin.com/learning/certificates/6fdcb5df18e3d536a2c5c78558b06a12850bff5cee99e44c28906687f44790b4" },
            { title: "Advanced Features of Java 21", org: "LinkedIn Learning", year: 2024, link: "https://www.linkedin.com/learning/certificates/618a76e65489bd02f7c7c801961b119ec1599e482b16d8b23cf0a8b3713e09cc" },
            { title: "React Essential Training", org: "LinkedIn Learning", year: 2023, link: "https://www.linkedin.com/learning/certificates/216495fe98d0d5b21dc38dcfdb7c622e7da840649d1a16a902bd65a82912f7a1" },
          ].map((cert, idx) => (
            <div className="col-md-4 section-fade-in" key={idx}>
              <div
                className="glass-card rounded-4 shadow-sm p-3 h-100 text-start border border-info cert-card"
                style={{ position: "relative", transition: "transform 0.2s, box-shadow 0.2s" }}
              >
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={
                      idx === 0 || idx === 1
                        ? courseraLogo
                        : certLogos[cert.org] || "https://via.placeholder.com/36x36?text=Logo"
                    }
                    onError={e => {
                      if (idx === 0 || idx === 1) e.target.src = courseraLogoDataUri;
                    }}
                    alt={cert.org + " logo"}
                    className="cert-logo"
                  />
                  <div>
                    <div className="fw-bold text-info" style={{ fontSize: "1.1rem" }}>{cert.title}</div>
                    <div className="small text-light">{cert.org} &bull; {cert.year}</div>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-info btn-sm mt-2"
                  style={{ position: "absolute", right: 16, bottom: 16 }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Add hover effect for .cert-card */}
      {/* You can move this to index.css if you prefer */}
      <style>{`
      .cert-card:hover {
        transform: translateY(-6px) scale(1.03);
        box-shadow: 0 8px 32px 0 rgba(0,255,231,0.15), 0 1.5px 8px 0 rgba(0,0,0,0.10);
        border-color: #00ffe7;
      }
      `}</style>
    </section>
  );
}
