import Lenis from 'lenis';
import React, { useEffect, useState } from 'react'; // Add useState
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
import RobustFoundation from './pages/RobustFoundation';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Ourstrengths from './pages/Ourstrength';
import Loading from './components/Loading'; // Adjust the path as needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => t * (2 - t),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds
    }, 3000); // Adjust duration as needed

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <Loading />; // Show loading screen while loading
  }

  return (
    <Router>
      <React.Fragment>
        <div className='overflow-x-hidden'>
          <Navbar />
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
            <Ourstrengths />
            <RobustFoundation />
            <Footer />
            <ScrollToTop />
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
