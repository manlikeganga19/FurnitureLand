import React from "react";
import Hero from "./components/Hero";
import Features from './components/Features';
import NewItems from './components/NewItems';
import FeaturesSecond from "./components/FeaturesSecond";
import Products from './components/Products';
import Testimonial from './components/Testimonial'
import Newsletter from './components/Newsletter'


const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero/>
      <Features/>
      <NewItems/>
      <FeaturesSecond/>
      <Products/>
      <Testimonial/>
      <Newsletter/>
    </div>
  );
};

export default App;
