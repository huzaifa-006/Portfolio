import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Django", level: 65 },
  { name: "Flask", level: 60 },
  { name: "SQL / PostgreSQL", level: 70 },
    { name: 'C++', level: 80 },
  { name: "Java (Android)", level: 75 },
  { name: "C#", level: 65 },
];

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [rerenderKey, setRerenderKey] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setRerenderKey((prev) => ({
      ...prev,
      [index]: Date.now(),
    }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="container text-center">
      <h2 className="text-primary mb-5">Skillset</h2>

      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-4 position-relative"
          style={{ width: "70%", margin: "0 auto" }}
        >
          <div className="d-flex justify-content-between align-items-center mb-1">
            <span className="text-light">{skill.name}</span>
          </div>

          {/* Floating percentage label */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                key={`percent-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: -22 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="position-absolute end-0 pe-2 text-info"
                style={{ fontWeight: "bold" }}
              >
                {skill.level}%
              </motion.div>
            )}
          </AnimatePresence>

          {/* Animated progress bar */}
          <div
            className="progress bg-secondary"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ height: "14px" }}
          >
            <motion.div
              key={`bar-${index}-${rerenderKey[index]}`}
              className="progress-bar"
              style={{
                backgroundColor: hoveredIndex === index ? "#00ffe7" : "#0dcaf0",
              }}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
