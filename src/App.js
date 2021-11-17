import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <Header>

        <Nav></Nav>

      </Header>

      <About></About>

      <Contact></Contact>

      <Projects></Projects>

      <Footer></Footer>

    </div>
  );
}

export default App;
