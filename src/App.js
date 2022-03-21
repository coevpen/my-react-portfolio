import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';
// import About from './Components/About';
// import Portfolio from './Components/Portfolio';
// import Resume from './Components/Resume';
// import ContactForm from './Components/Contact';

// the <main> will contain the rendered pages
// the <nav> will have the links
// the <header> will have the hero and nav
// the footer will hold the linkedIn and GitHub links

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <main>

      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
