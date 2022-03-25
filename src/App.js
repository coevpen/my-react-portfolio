import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/Page/PageContent/About';
import ContactForm from './Components/Page/PageContent/Contact';
import Portfolio from './Components/Page/PageContent/Portfolio';
import Resume from './Components/Page/PageContent/Resume';


// the <main> will contain the rendered pages
// the <nav> will have the links
// the <header> will have the hero and nav
// the footer will hold the linkedIn and GitHub links

function App() {
  const [pageSelected, setPageSelected] = useState("About");

  const renderPage = () => {
    switch(pageSelected){
      case "About":
        return <About />;
      case "ContactForm":
        return <ContactForm />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return null;

    }

  };

  return (
    <div>
      <Header
      pageSelected={pageSelected}
      setPageSelected={setPageSelected}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
