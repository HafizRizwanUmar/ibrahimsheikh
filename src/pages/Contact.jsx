import { personalInfo } from '../data/portfolioData';
import './Pages.css';

const Contact = () => {
  return (
    <div className="contact container section">
      <div className="bg-text">HELLO</div>
      
      <div className="contact-grid">
        <div className="contact-left">
          <h1 className="contact-headline">LET'S BRING YOUR IDEAS TO LIFE</h1>
          <a href={`mailto:${personalInfo.email}`} className="btn">GET IN TOUCH →</a>
        </div>
        
        <div className="contact-right">
          <h2 className="section-title">[ CONTACTS ]</h2>
          
          <div className="contact-info-item">
            <h4>Email</h4>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          </div>

          <div className="contact-info-item">
            <h4>Phone</h4>
            <p>{personalInfo.phone}</p>
          </div>

          <div className="contact-info-item">
            <h4>Socials & Portfolios</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="text-accent">LinkedIn</a>
              <a href={personalInfo.socials.behance} target="_blank" rel="noreferrer" className="text-accent">Behance</a>
              <a href={personalInfo.socials.artstation} target="_blank" rel="noreferrer" className="text-accent">ArtStation</a>
              <a href={personalInfo.socials.vimeo} target="_blank" rel="noreferrer" className="text-accent">Vimeo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
