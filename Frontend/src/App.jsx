import React from 'react';
import Landing from "./pages/Landing";
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';

function App() {
  return (
    <React.Fragment>

      <Landing />
      <AboutUs />
      <Services />
      <WhyUs />
    </React.Fragment>
    
  )
}

export default App