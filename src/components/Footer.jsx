import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
        </div>
        <div className="footer-links">
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">[ LINKEDIN ]</a>
          <a href={personalInfo.socials.vimeo} target="_blank" rel="noreferrer">[ VIMEO ]</a>
          <a href={personalInfo.socials.artstation} target="_blank" rel="noreferrer">[ ARTSTATION ]</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
