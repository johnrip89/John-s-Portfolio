import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header>

        <Nav></Nav>

      </Header>

      <Projects></Projects>

      <Footer></Footer>

    </div>
  );
}

export default App;
