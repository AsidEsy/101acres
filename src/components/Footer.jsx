import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import './styles.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            123 Main Street, Cityville, State, 12345
            <br />
            Email: info@101acres.com
            <br />
            Phone: +1 (123) 456-7890
          </p>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="your-facebook-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="your-twitter-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="your-instagram-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 101 Acres. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
