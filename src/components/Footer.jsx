import React from 'react';
import '../styles/responsiveStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Bledi</h3>
          <p>Bledi is your ultimate guide to exploring the beauty of Tunisia.<br/>From stunning beaches to historic sites,<br/> we bring you everything you need to experience the best of Tunisia.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => window.location.href = '#hero'}>Home</li>
            <li onClick={() => window.location.href = '#third-section'}>Heritage</li>
            <li onClick={() => window.location.href = '#seasons-section'}>Seasons</li>
            <li onClick={() => window.open('beaches.html', '_blank')}>Beaches</li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: benhamadsarra@gmail.com</p>
          <p>Phone: +216 123 456 789</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/sarra-ben-hamad/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://github.com/SarraBenHamad" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.instagram.com/sarrabenhamad/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Bledi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;