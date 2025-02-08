import React from 'react';
import '../styles/responsiveStyles.css';
import museumsImage from '../assets/Tunisia museum.jpeg';
import campingImage from '../assets/camping.jpg';
import weavingImage from '../assets/carpet.jpg';


const Spring = () => {
  return (
    <div id="spring-section">
        <div className="bg">
        </div>
        <div className="spring-content">
            <h2 className="season-title">Spring</h2>
            <p className="season-p">The season of light and greenery, it is springtime in Tunisia that inspired the painter, Paul Klee, during his famous trip to the country. Make the most of this beautiful season for a break by the water, to practise your favourite water sport or to explore sites and locations imbued with history.</p>
             <div className="card-container">
                <div className="card">
                    <div className="card-img-cont">
                        <img src={museumsImage} alt="museum image" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Museums</h3>
                        <p>Discover Tunisia's captivating museums, from the Bardo's stunning Roman mosaics to Carthage's ancient treasures, each offering a fascinating glimpse into the country's vibrant history.</p>
                         <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <h2>COME EXPLORE</h2>
                    <div className="card-img-cont">
                        <img src={campingImage} alt="Aindrahem snow" loading="lazy"/>

                    </div>
                    <div className="card-info">
                        <h3>Camping</h3>
                        <p>Experience the magic of spring camping in Tunisia, where mild weather and vibrant blooms create the perfect outdoor adventure.</p>
                         <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img src={weavingImage} alt="oasis" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Weaving and carpets</h3>
                        <p>
                            Tunisia has a rich tradition of weaving rugs, where centuries-old craftsmanship blends with vibrant patterns to create a tapestry of cultural heritage.</p>
                         <button className="btn-season" onClick={()=>window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                    
                </div>
             </div>           
        
        </div>
    </div> 
  );
};

export default Spring;