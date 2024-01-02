import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">
      <FontAwesomeIcon icon={faBuilding} color='' size="2x" />
      </div>
        <span className='header-text'>101 Acres</span>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
