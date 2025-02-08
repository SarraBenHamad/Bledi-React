import React from 'react';
import '../styles/responsiveStyles.css';

const AboutTunisia = () => {
  return (
    <div id="second-section">
      <h2 className="title">About Tunisia</h2>
      <div className="line"></div>
      <div className="sur2">
        <p className="paragraph">
        Discover Tunisia,<br/>
                where adventure and history come alive! <br/>
                Wander through the lively markets of Tunis, where the aroma of spices and vibrant colors delight your senses.<br/>
                Swim in the crystal-clear Mediterranean Sea, or ride a camel over the stunning Sahara dunes. Explore the ancient ruins of Carthage and the fascinating underground houses of Matmata.<br/>
                Tunisia is full of unique experiences and unforgettable moments.<br/>
                Pack your bags and get ready for an amazing journey in Tunisia!
        </p>
        <div id="aboutTunisia-img" loading="lazy"></div>
      </div>
      <div className="stats">
        <div className="stat-box">
          <h3 className="number">1.300</h3>
          <h3 className="specification">KILOMETERS</h3>
          <h4 className="details">of mediterranean beaches</h4>
        </div>
        <div class="stat-box">
                <h3 class="number">1 st</h3>
                <h3 class="specification">in the world</h3>
                <h4 class="details">at the international olive oil competition</h4>
            </div>
            <div class="stat-box">
                <h3 class="number">over 700</h3>
                <h3 class="specification">Historic Monuments</h3>
                <h4 class="details">just in medina of tunis</h4>
            </div>
      </div>
    </div>
  );
};

export default AboutTunisia;