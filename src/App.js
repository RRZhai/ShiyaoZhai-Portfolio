import './App.css';
import React, {useState} from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skill from './components/skill/Skills';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skill />
      </main>
    </>
  );
}

export default App;
