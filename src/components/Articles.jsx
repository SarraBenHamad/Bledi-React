import React from 'react';
import '../styles/responsiveStyles.css';

const Articles = () => {
  return (
    <div id="articles-section">
      <h2 className="title4">Articles</h2>
      <div className="line4"></div>
      <div className="articles-container">
        <div className="article-elements">
          <div className="article" id="article1">
            <button className="article-btn" onClick={() => window.open('https://carthagemagazine.com/medina-of-tunis/', '_blank')}>VIEW ARTICLE</button>
          </div>
          <a href="https://carthagemagazine.com/medina-of-tunis/" target="_blank" rel="noopener noreferrer" className="article-title">Medina of Tunis</a>
          <div className="date">October 21, 2022</div>
        </div>
        <div className="article-elements">
                <div className="article" id="article2">
                    <button className="article-btn" onClick={()=>window.open('https://carthagemagazine.com/sidi-bou-said-tunisia-travel-guide/', '_blank')}>VIEW ARTICLE</button>

                </div>
                <a href="https://carthagemagazine.com/sidi-bou-said-tunisia-travel-guide/" target="_blank" rel="noopener noreferrer" className="article-title">The Ultimate Sidi Bou Said, Tunisia, Travel Guide for First-Timers</a>
                <div className="date">October 23, 2020</div>
            </div>
            <div className="article-elements">
                <div className="article" id="article3">
                    <button className="article-btn" onClick={()=>window.open('https://carthagemagazine.com/tunisian-traditional-costumes/', '_blank')}>VIEW ARTICLE</button>

                </div>
                <a href="https://carthagemagazine.com/tunisian-traditional-costumes/" target="_blank" rel="noopener noreferrer" className="article-title">Tunisians Celebrate their Heritage with Magnificent Traditional Outfits</a>
                <div className="date">March 13, 2022</div>
            </div>
      </div>
    </div>
  );
};

export default Articles;