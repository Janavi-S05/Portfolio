import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import './App.css';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      {/* <Works /> */}
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
