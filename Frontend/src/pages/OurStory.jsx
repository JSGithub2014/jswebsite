import React from 'react';
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
        "Together, we strive to build a brighter, more sustainable world. As Eleanor Roosevelt once said, 'The future belongs to those who believe in the beauty of their dreams.'"
      ]
    },
    {
      title: "Our Mission",
      description: [
        "Our mission is to empower communities through innovative solutions, fostering a culture of excellence.",
        "We are committed to sustainability and aim to make a positive impact in every community we serve.",
        "Together, we create a brighter future through collaboration and integrity. As Helen Keller stated, 'Alone we can do so little; together we can do so much.'"
      ]
    },
    {
      title: "Our Values",
      description: (
        "At the core of our business are values that drive our success: Integrity, where we uphold honesty and ethics in every interaction; Innovation, which fuels our adaptability and progress in a constantly changing world; Collaboration, as we believe in working together to achieve common goals through diverse perspectives; Excellence, striving for the highest quality in everything we do; and Continuous Improvement, as we are committed to refining our practices and delivering exceptional results. As Robert Collier said, “Success is the sum of small efforts, repeated day in and day out,” and we live by this principle every day."
      )
    }
  ];
  

  return (
    <React.Fragment>
     <main className="min-h-screen w-full bg-white flex flex-col items-center text-black p-6 relative">
  <StoryHero />
  <StoryShowCase />
  
  <h2 className="font-bold text-center my-12 heading-font tracking-wider text-black text-3xl md:text-5xl">
    <span className='heading-font tracking-wider text-[rgb(255,102,0)]'>The Heart</span> of Our Organization
  </h2>
  
  <div className="flex flex-col lg:flex-row justify-center items-stretch w-full">
    {sections.map((section, index) => (
      <div className="flex-1 min-w-[300px] max-w-md m-4" key={index}>
        <GoalCard
          title={section.title}
          description={Array.isArray(section.description) ? section.description.join(' ') : section.description}
        />
      </div>
    ))}
  </div>
</main>
    </React.Fragment>
  );
}

export default OurStory;
