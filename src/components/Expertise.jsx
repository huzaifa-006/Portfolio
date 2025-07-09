import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaTools } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    icon: <FaCode size={30} color="#0ef" />,
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
    icon: <FaServer size={30} color="#ff00ff" />,
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
    icon: <FaCloud size={30} color="#00f2ff" />,
    skills: [
      { name: "SQL / PostgreSQL", level: 75 },
      { name: "MongoDB", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    category: "Languages",
    icon: <FaTools size={30} color="#ffa500" />,
    skills: [
      { name: "C++", level: 80 },
      { name: "Java (Android)", level: 75 },
      { name: "C#", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5", level: 95 },
    ],
  },
];

export default function Expertise() {
  const [hovered, setHovered] = useState(null);
  const [refreshKey, setRefreshKey] = useState({});

  const handleHover = (index) => {
    setHovered(index);
    setRefreshKey((prev) => ({ ...prev, [index]: Date.now() }));
  };

  return (
    <section id="expertise" className="text-center text-light py-5">
      <div className="container">
        <h2 className="text-info mb-5">My Skillset</h2>
        <div className="row justify-content-center g-4">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx} className="col-md-6 col-lg-3 d-flex">
              <div
                className="bg-dark p-4 rounded-4 shadow-lg w-100 d-flex flex-column justify-content-between"
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
                          transition={{ duration: 0.2 }}
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
    </section>
  );
}
