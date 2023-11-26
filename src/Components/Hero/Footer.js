import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Anda dapat menambahkan file CSS untuk styling
import Logo from './logos.png'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer-links">
        <Link to="/Tentang">Tentang</Link>
        <Link to="/Fitur">Fitur</Link>
      </div>
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} SehatYuk
      </div>
    </footer>
  );
}

export default Footer;
