import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <div style={{ width: '70%', margin: '0 auto' }}>
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-warning mb-4 text-center">Projects</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card bg-dark text-light h-100">
            <img src="https://via.placeholder.com/600x300?text=Hate+Speech+Project" className="card-img-top" alt="Hate Speech" />
            <div className="card-body">
              <h5 className="card-title">Hate Speech Recognition System</h5>
              <p className="card-text">A full-stack system using XLNet, Django, React, and PostgreSQL to detect and classify hate speech in English text.</p>
              <a href="#" className="btn btn-outline-info">View Project</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-dark text-light h-100">
            <img src="https://via.placeholder.com/600x300?text=E-Commerce+Website" className="card-img-top" alt="E-Commerce" />
            <div className="card-body">
              <h5 className="card-title">E-Commerce Website</h5>
              <p className="card-text">A responsive e-commerce frontend with payment integration and product management using Firebase.</p>
              <a href="#" className="btn btn-outline-info">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
}
