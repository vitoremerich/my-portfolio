import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
