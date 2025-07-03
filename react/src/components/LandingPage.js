import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Collection from './Collection';
import About from './About';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Collection />
      <About />
      <Footer />
    </div>
  );
};

export default LandingPage;
