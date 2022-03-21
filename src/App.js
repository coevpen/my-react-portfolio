import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import ContactForm from './Components/Contact';

// the <main> will contain the rendered pages
// the <nav> will have the links
// the <header> will have the hero and nav
// the footer will hold the linkedIn and GitHub links

function App() {
  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div className="App">
      <header>
        <Nav 
          setContactSelected={setContactSelected}
          contactSelected={contactSelected}
        />
      </header>

      <main>
        {!contactSelected ? (
          <>
            <About/>
            <Portfolio/>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
