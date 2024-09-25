import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from "./pages/Landing";
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonial from './pages/Testimonial';
import Footer from './pages/Footer';
import WhyUs from './pages/WhyUs';
import Achievement from './pages/Achievement';
import Faqs from './pages/Faqs';
import Partners from './pages/Partners';
import Clientals from './pages/Clientals';
import Robustfoundation from './pages/Robust foundation'
import Ourstrength from './pages/Ourstrength'

function App() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <section id="Home">
            <Landing />
          </section>
          <section id="About">
            <AboutUs />
          </section>
          <section id="Services">
            <Services />
          </section>

          <Partners />
          <Clientals />

          <Testimonial />

          <section id="Achievement">
            <Achievement />
          </section>
          <section id="Whyus">
            <WhyUs />
          </section>
          <section id="FAQs">
            <Faqs />
          </section>
          <section id="Ourstrength">
            < Ourstrength/>
          </section>
          <section id="Robust foundation">
            <Robustfoundation />
          </section>
          <Footer />
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
