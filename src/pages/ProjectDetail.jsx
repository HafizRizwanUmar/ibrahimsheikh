import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import './Pages.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div className="container section"><h2>Project not found</h2><Link to="/portfolio" className="btn">Back to Portfolio</Link></div>;
  }

  return (
    <div className="project-detail container section">
      <div className="bg-text">PROJECT</div>

      <div className="project-header">
        <Link to="/portfolio" className="text-accent mb-4" style={{ display: 'inline-block', marginBottom: '2rem' }}>← Back to Works</Link>
        <h1 className="section-title" style={{ marginBottom: '1rem' }}>{project.title}</h1>
        <p className="hero-subtitle text-secondary">{project.description}</p>
      </div>

      <img src={project.image} alt={project.title} className="project-hero-image" />

      <div className="project-meta">
        <div className="meta-item">
          <h4>Client / Context</h4>
          <p>{project.client}</p>
        </div>
        <div className="meta-item">
          <h4>Role</h4>
          <p>{project.role}</p>
        </div>
        <div className="meta-item">
          <h4>Software</h4>
          <p>{project.software}</p>
        </div>
        <div className="meta-item">
          <h4>Year</h4>
          <p>{project.year}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
