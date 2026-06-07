import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import './Pages.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-bg-image"></div>
      
      <div className="container">
        <div className="bg-text">
          {personalInfo.name.toUpperCase()}
        </div>
        
        <section className="hero">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p 
              className="hero-subtitle text-accent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {personalInfo.role}
            </motion.p>
          </div>
        </section>

        <section className="intro section">
          <div className="intro-grid">
            <div className="intro-left">
              <h2 className="section-title">[ ABOUT ME ]</h2>
            </div>
            <div className="intro-right">
              <p className="bio-text">{personalInfo.bio}</p>
              <div className="action-links">
                <Link to="/about" className="btn">More About Me</Link>
                <Link to="/portfolio" className="btn btn-outline">View Works</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
