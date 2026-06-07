import { education, skills, specializations } from '../data/portfolioData';
import './Pages.css';

const About = () => {
  return (
    <div className="about container section">
      <div className="bg-text">ABOUT</div>
      
      <h1 className="section-title">[ ABOUT ME ]</h1>

      <div className="about-grid">
        <div className="about-left">
          <h2 className="about-section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <p className="education-year">{edu.year}</p>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="text-secondary">{edu.institution}</p>
              <p>{edu.description}</p>
            </div>
          ))}

          <h2 className="about-section-title" style={{ marginTop: '3rem' }}>Specializations</h2>
          {specializations.map((spec, index) => (
            <div key={index} className="specialization-item">
              <h3>{spec.title}</h3>
              <p className="text-secondary">{spec.description}</p>
            </div>
          ))}
        </div>

        <div className="about-right">
          <h2 className="about-section-title">Skills & Software</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
