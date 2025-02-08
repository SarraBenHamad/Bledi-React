import React from 'react';
import '../styles/responsiveStyles.css';

const Seasons = () => {
  return (
    <div id="seasons-section">
      <h2 className="title3">Tunisia Through Seasons</h2>
      <div className="line3"></div>
      <div className="seasons">
        <div id="winter" className="season-item">
          <h3 className="season-word">Winter</h3>
        </div>
        <div id="spring" className="season-item">
          <h3 className="season-word">Spring</h3>
        </div>
        <div id="summer" className="season-item">
          <h3 className="season-word">Summer</h3>
        </div>
        <div id="autumn" className="season-item">
          <h3 className="season-word">Autumn</h3>
        </div>
      </div>
    </div>
  );
};

export default Seasons;