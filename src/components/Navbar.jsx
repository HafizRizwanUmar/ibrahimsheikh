import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">IY.</Link>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/portfolio">WORKS</Link>
        <Link to="/showreel">SHOWREEL</Link>
        <Link to="/contact" className="text-accent">CONTACT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
