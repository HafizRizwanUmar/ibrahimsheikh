import { Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import './Pages.css';

const Portfolio = () => {
  return (
    <div className="portfolio container section">
      <div className="bg-text">WORKS</div>
      
      <h1 className="section-title">[ PORTFOLIO ]</h1>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link to={`/portfolio/${project.id}`} key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p className="text-accent">{project.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
