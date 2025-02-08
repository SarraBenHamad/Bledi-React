import React from 'react';
import '../styles/responsiveStyles.css';
import beachImage from "../assets/beach.jpg"
import nightlifeImage from "../assets/nightlife.jpg"
import watersportImage from "../assets/watersport.jpg"

const Summer = () => {
  return (
    <div id="summer-section">
        <div className="bg">
        </div>
        <div className="spring-content">
            <h2 className="season-title">Summer</h2>
            <p className="season-p">In the summer, Tunisia is the ultimate seaside destination: endless beaches, hotels and clubs to suit everyone and bustling tourist resorts. In summer, the country really comes alive at night, with plenty of opportunities to let your hair down.</p>
             <div className="card-container">
                <div className="card">
                    <div className="card-img-cont">
                        <img src={beachImage} alt="spa" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Beaches</h3>
                        <p>
                            Tunisia's beaches boast golden sands and crystal-clear waters, ideal for relaxation and water sports, promising a perfect seaside getaway.</p>
                         <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <h2>COME EXPLORE</h2>
                    <div className="card-img-cont">
                        <img src={nightlifeImage} alt="Aindrahem snow" loading="lazy"/>

                    </div>
                    <div className="card-info">
                        <h3>Night life</h3>
                        <p>Tunisia's summer nights come alive with bustling beach clubs, vibrant bars, and cultural events, offering unforgettable experiences under the sta</p>
                        <button className="btn-season" onClick={() => window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img-cont">
                        <img src={watersportImage} alt="oasis" loading="lazy"/>
                    </div>
                    <div className="card-info">
                        <h3>Water sports</h3>
                        <p>Tunisia's coastal waters are ideal for water sports enthusiasts, offering opportunities for diving, snorkeling, windsurfing, and more, amidst stunning Mediterranean vistas.</p>
                        <button className="btn-season" onClick={()=> window.open('soon.html', '_blank')}>READ MORE</button>
                    </div>
                    
                </div>
             </div>           
        
        </div>
    </div>
  );
};

export default Summer;