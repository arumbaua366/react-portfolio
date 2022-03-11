import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function MyApp() {
  return (
    <div class="row align-items-end">
      <Nav />
     <About />
     <Footer />
    </div>
  );
}

