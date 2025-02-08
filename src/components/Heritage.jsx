import React, { useRef, useEffect } from 'react';
import '../styles/responsiveStyles.css';
import upsideImage from '../assets/upside.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import upsideDownImage from '../assets/upsidedown.png';

const Heritage = () => {
  const sliderRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  
  useEffect(() => {
    const images = sliderRef.current;
    const scrollbarThumb = scrollbarThumbRef.current;
    const maxScrollLeft = images.scrollWidth - images.clientWidth;

    const updateScrollThumbPosition = () => {
      const scrollPosition = images.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (100);
      scrollbarThumb.style.left = `${thumbPosition}%`;
    };

    images.addEventListener('scroll', updateScrollThumbPosition);
    return () => images.removeEventListener('scroll', updateScrollThumbPosition);
  }, []);

  const handleSlide = (direction) => {
    const images = sliderRef.current;
    const scrollAmount = images.clientWidth * direction;
    images.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div id="third-section">
      <img className="upside-img" src={upsideImage} loading="lazy" alt="upside" />
      <div className="blur"></div>
      <div className="content-container">
        <h2 className="title2">Universal Heritage</h2>
        <div className="line2"></div>
        <p className="heritage-p">
          Over its history, Tunisia has balanced influences from Africa, the East, and the West. Seven sites and monuments are
          <a id="unesco-link" href="https://whc.unesco.org/en/list/?search=tunisia&id_sites=&id_states=&id_search_region=&id_search_by_synergy_protection=&id_search_by_synergy_element=&search_yearinscribed=&search_yearinscribed_start=&search_yearinscribed_end=&themes=&criteria_restrication=&id_keywords=&media=&description=&components=0&order=country" target="_blank" rel="noopener noreferrer">
            UNESCO World Heritage sites
          </a> 
          due to their cultural significance. Tunisia's diverse heritage reflects Berber, Andalusian, Italian, Ottoman, and African traditions, creating a rich cultural expression.
        </p>

        <div className="container">
          <div className="slider-wrapper">
            <button onClick={() => handleSlide(-1)} className="slide-button material-symbols-rounded">chevron_left</button>
            <div className="images" ref={sliderRef}>
              <img src={image1} alt="Image 1" className="image-item" loading="lazy" />
              <img src={image2} alt="Image 2" className="image-item" loading="lazy" />
              <img src={image3} alt="Image 3" className="image-item" loading="lazy" />
              <img src={image4} alt="Image 4" className="image-item" loading="lazy" />
              <img src={image5} alt="Image 5" className="image-item" loading="lazy" />
              <img src={image6} alt="Image 6" className="image-item" loading="lazy" />
            </div>
            <button onClick={() => handleSlide(1)} className="slide-button material-symbols-rounded">chevron_right</button> 
          </div>

          <div className="slider-scrollbar">
            <div className="scrollbar-track">
              <div className="scrollbar-thumb" ref={scrollbarThumbRef}></div>
            </div>
          </div>
        </div>
      </div>
      <img className="upside-img" src={upsideDownImage} loading="lazy" alt="upside down" />
    </div>
  );
};

export default Heritage;
