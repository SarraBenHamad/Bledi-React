import React from 'react';
import '../styles/responsiveStyles.css';

const NavBar = () => {
  return (
    <div id="NavBar">
      <a href="#hero" id="logo">Bledi</a>
      <div id="Menu">
        <a href="#second-section" className="menu-class">About</a>
        <a href="#third-section" className="menu-class">Heritage</a>
        <a href="#seasons-section" className="menu-class">Seasons</a>
        <a href="#articles-section" className="menu-class">Articles</a>
        <a href="beaches.html" target="_blank" className="menu-class">Beaches</a>
      </div>
    </div>
  );
};

export default NavBar;