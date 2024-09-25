import Lenis from 'lenis';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if necessary
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
import Robustfoundation from './pages/RobustFoundation'; // Adjusted path
import ScrollToTop from './components/ScrollToTop'; // Adjust the path if necessary

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Duration of the scroll animation (higher = smoother)
      easing: (t) => t * (2 - t), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); 
    };
  }, []);

  return (
    <Router>
      <React.Fragment>
        <Navbar /> {/* Add the Navbar here */}
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
          <section id="RobustFoundation">
            <Robustfoundation />
          </section>
          <Footer />
          <ScrollToTop /> {/* Add the ScrollToTop button here */}
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
