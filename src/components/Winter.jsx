import React from 'react';
import '../styles/responsiveStyles.css';
import spaImage from '../assets/spa.jpg';
import oasisImage from '../assets/oasis.jpg';
import winterImage from '../assets/winter.jpg';

const Winter = () => {
  return (
    <div id="winter-section">
      <div className="bg"></div>
      <div className="winter-content">
        <h2 className="season-title">Winter</h2>
        <p className="season-p">Mild and sunny, the winter is perfect for long walks, horse rides, drives and motorbike trips. It’s the ideal season for exploring the Sahara or visiting medinas, museums and archaeological sites. Alternatives include a spa treatment and fitness regime or a round of golf on one of Tunisia’s greens.</p>
        <div className="card-container">
          <div className="card">
            <div className="card-img-cont">
              <img src={spaImage} alt="spa" loading="lazy" />
            </div>
            <div className="card-info">
              <h3>Thalasso & Spa</h3>
              <p>Tunisia has been honing its expertise in this field since 1994...</p>
              <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
            </div>
          </div>
          <div className="card">
                    <h2>COME EXPLORE</h2>
                    <div className="card-img-cont">
                        <img src={oasisImage} alt="oasis" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Canyons and Oases</h3>
                        <p>Tozeur rises up out of the desert,
                            nestled into a huge oasis that is home
                            to hundreds and thousands of palm trees.</p>
                         <button className="btn-season"onclick={()=>window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img src={winterImage}alt="Aindrahem snow" loading="lazy"/>

                    </div>
                    <div className="card-info">
                        <h3>Enjoy snowy spots</h3>
                        <p>In winter,Ain Draham, transforms into a snowy 
                            wonderland. Visitors can enjoy hiking and 
                            cozy lodges, experiencing a unique winter 
                            getaway in Tunisia. </p>
                         <button className="btn-season" onClick={() =>window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Winter;