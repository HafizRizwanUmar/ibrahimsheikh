import { showreel } from '../data/portfolioData';
import './Pages.css';

const Showreel = () => {
  return (
    <div className="showreel container section">
      <div className="bg-text">SHOWREEL</div>
      
      <h1 className="section-title">[ PROFESSIONAL SHOWREEL ]</h1>

      <div className="video-container">
        <video 
          src={showreel.videoUrl} 
          title={showreel.title} 
          controls 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="showreel-info">
        <h2 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>{showreel.title}</h2>
        <p className="bio-text">{showreel.description}</p>
      </div>
    </div>
  );
};

export default Showreel;
