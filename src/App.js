import React from 'react';
import 'antd/dist/antd.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Features from './Components/Features';
import BusinessSolution from './Components/BusinessSolution';
import Mission from './Components/Mission';
import VideoPresentation from './Components/VideoPresentation';
import Skill from './Components/Skill';
import Counter from './Components/Counter';
import Portfolio from './Components/Portfolio';
import Testimonial from './Components/Testimonial';
import ContactForm from './Components/ContactForm';
import BrandSlider from './Components/BrandSlider';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <BusinessSolution />
      <Mission />
      <VideoPresentation />
      <Skill />
      <Counter />
      <Portfolio />
      <Testimonial />
      <ContactForm />
      <BrandSlider />
      <Footer />
    </>
  );
}

export default App;
