import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
  {/* Section content here */}


    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-info text-center">About Me</h2>
      <p className="mt-3 fs-5 text-light text-center">
        I am Muhammad Huzaifa Shafiq, a Computer Science graduate.
        I specialize in frontend development using HTML, CSS, JavaScript, React.js, and backend tools like Django and Flask.
        <br /><br />
        I’ve developed real-world projects like a Hate Speech Recognition System (using XLNet), an E-commerce site, 
        and a University Management System. I am also skilled in Android Development (Java), PostgreSQL, Git/GitHub, 
        and tools like VS Code and Android Studio.
        <br /><br />
        My strengths include problem-solving, teamwork, and adaptability, which I apply in every software project I work on.
      </p>
    </motion.div>
    </div>
  );
}
