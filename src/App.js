import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Card } from './components/Card';
import { Memegenerator } from './meme-generator/Memegenerator';

export const App = () => {
  return (
    <div >
      {/* <Navbar />
      <Hero />
      <Card /> */}
      <Memegenerator/>
    </div>
  );
}


