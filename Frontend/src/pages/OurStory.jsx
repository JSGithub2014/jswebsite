import React from 'react';
import Footer from './Footer';
import StoryHero from '../components/AboutUs/StoryHero';
import GoalCard from '../components/AboutUs/GoalCard';
import StoryShowCase from '../components/AboutUs/StoryShowCase';

function OurStory() {
  const sections = [
    {
      title: "Our Vision",
      description: [
        "To lead the way in innovation and excellence, setting the gold standard for quality and sustainability across all sectors.",
        "We empower our teams to think boldly, embrace change, and create lasting value for our clients and communities.",
        "By fostering collaboration and embracing diverse perspectives, we drive meaningful progress and inspire future generations.",
        "Together, we strive to build a brighter, more sustainable world."
      ]
    },
    {
      title: "Our Mission",
      description: [
        "Our mission is to empower communities through innovative solutions, fostering a culture of excellence.",
        "We are committed to sustainability and strive to make a positive impact in every community we serve.",
        "Together, we aim to create a brighter future through collaboration and integrity."
      ]
    },
    {
      title: "Our Values",
      description: (
        <>
          Integrity: Upholding the highest standards of honesty and ethics.<br />
          Innovation: Embracing creativity and new ideas to drive progress.<br />
          Collaboration: Working together to achieve common goals.<br />
          Excellence: Striving for the highest quality in everything we do.
        </>
      )
    }
  ];

  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-white flex flex-col items-center text-black p-6 relative">
        <StoryHero />
        <StoryShowCase/>
        <h2 className="font-bold text-center my-12 heading-font tracking-wider text-black text-3xl md:text-5xl">
          <span className='heading-font tracking-wider text-[rgb(255,102,0)]'>The Heart</span> of Our Organization
        </h2>
        {sections.map((section, index) => (
          <GoalCard
            key={index}
            title={section.title}
            description={section.description}
            direction={index % 2 === 0 ? 'left' : 'right'} // Alternate direction
          />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default OurStory;
