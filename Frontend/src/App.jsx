import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from "./pages/Landing";
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';
import WhyUs from './pages/WhyUs';
import Achievement from './pages/Achievement';


function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <React.Fragment>
        <div>
        <section id="landing">
          <Landing />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="testimonials">
          <Testimonial />
        </section>
        <section id="achievement">
          <Achievement />
        </section>
        <section id="whyUs">
          <WhyUs/>
        </section>
        <Footer />
        </div>
        
      </React.Fragment>
    </Router>
  );
}

export default App;
