import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  return (
    <div>
      <Header>

        <Nav></Nav>

      </Header>

      <About></About>

      <Contact></Contact>

      <Projects></Projects>

      <Resume></Resume>

      <Footer></Footer>

    </div>
  );
}

export default App;
