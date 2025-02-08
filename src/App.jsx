import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutTunisia from './components/AboutTunisia';
import Heritage from './components/Heritage';
import Seasons from './components/Seasons';
import Winter from './components/Winter';
import Spring from './components/Spring';
import Summer from './components/Summer';
import Autumn from './components/Autumn';
import Articles from './components/Articles';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './styles/responsiveStyles.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <AboutTunisia />
      <Heritage />
      <Seasons />
      <Winter />
      <Spring />
      <Summer />
      <Autumn />
      <Articles />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;