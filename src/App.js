import React from "react";
import Hero from "./components/Hero";
import Features from './components/Features';
import NewItems from './components/NewItems';

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white">
      <Hero/>
      <Features/>
      <NewItems/>
    </div>
  );
};

export default App;
