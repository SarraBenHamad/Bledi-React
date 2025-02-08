import React from 'react';
import '../styles/responsiveStyles.css';
import rallyImage from '../assets/rally.jpg';
import golfImage from '../assets/golf.jpg';
import starwarsImage from '../assets/starwars.jpeg';

const Autumn = () => {
  return (
    <div id="autumn-section">
        <div className="bg">
        </div>
        <div className="autumn-content">
            <h2 className="season-title">Autumn</h2>
            <p className="season-p">Make the most of the mild autumns for a swim in the sea, boat trip or an adventure in the Sahara. And if you’re feeling a bit more athletic, there’s golf, water sports and kitesurfing too. Whatever you choose, you can follow it up with a pampering session at one of the many Thalasso & Spa centres.</p>
             <div className="card-container">
                <div className="card">
                    <div className="card-img-cont">
                        <img src={rallyImage} alt="spa" loading="lazy" />
                    </div>
                    <div className="card-info">
                        <h3>Adventure races and rallies</h3>
                        <p>
                            Tunisia is a hotspot for adventure races and rallies, offering thrilling desert terrains and challenging courses. </p>
                            <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
                        </div>
                </div>
                <div className="card">
                    <h2>COME EXPLORE</h2>
                    <div className="card-img-cont">
                        <img src={golfImage} alt="Aindrahem snow" loading="lazy"/>

                    </div>
                    <div className="card-info">
                        <h3>Golf</h3>
                        <p> There are ten large golf courses with contrasting landscapes, well designed and able to adapt to different levels of player.</p>
                        <button className="btn-season" onclick="window.open('soon.html', '_blank')">READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img src={starwarsImage} alt="oasis" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Sahara</h3>
                        <p>Tunisia's Sahara, with its vast dunes and stunning landscapes, is not only a natural wonder but also a famous filming location for Star Wars.</p>
                        
                         <button className="btn-season" onClick={()=>"window.open('soon.html', '_blank')"}>READ MORE</button>
                         {/* <!-- <button className="btn-season">READ MORE →</button> --> */}

                    </div>
                    
                </div>
             </div>           
        
        </div>
    </div> 
  );
};

export default Autumn;