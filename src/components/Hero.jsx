import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="d-flex justify-content-center align-items-center text-center text-light"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ width: "70%", margin: "0 auto" }}>
        {/* Main motion wrapper (only background fade in) */}
        <motion.div
          className="py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Name pops down first */}
          <motion.h1
            className="display-3 fw-bold"
            style={{ color: "#00ffaa", fontFamily: "times-new-roman" }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Muhammad Huzaifa Shafiq
          </motion.h1>

          {/* Delayed entry of animated role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                "Computer Scientist",
                2000,
                "Software Developer",
                2000,
                "Web Developer",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="fs-4 d-block text-light mt-3"
              style={{ fontWeight: "bold" }}
            />
          </motion.div>

          {/* Delayed entry of short description */}
          <motion.p
            className="fs-5 mt-4 px-3"
            style={{ color: "gray" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            I specialize in building beautiful, responsive websites and intelligent
            software systems using modern web technologies and AI models.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
