import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
/* import InteractiveMap from './components/InteractiveMap'; */

const App: React.FC = () => {
  return (
    <div className="bg-[#FFF0F0] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        {/* <InteractiveMap /> */}
        <Stats />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;