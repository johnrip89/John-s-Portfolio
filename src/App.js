import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [projectsSelected, setProjectsSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header>

        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
          projectsSelected={projectsSelected}
          setProjectsSelected={setProjectsSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        ></Nav>

      </Header>

      <main>
        {contactSelected ? (
          <Contact></Contact>
        ) : projectsSelected ? (
          <Projects></Projects>
        ) : resumeSelected ? (
          <Resume></Resume>
        ) : (
          <About></About>
        )}
      </main>

      <Footer></Footer>

    </div>
  );
}

export default App;
