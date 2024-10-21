import React from 'react';
import StoryHero from '../components/AboutUs/StoryHero';
import GoalCard from '../components/AboutUs/GoalCard';
import StoryShowCase from '../components/AboutUs/StoryShowCase';

function OurStory() {
  const sections = [
    {
      title: "Our Vision",
      description: [
        "✨ **Leading the Future**: To lead the way in innovation and excellence, setting the gold standard for quality and sustainability across all sectors.",
        "🌟 **Empowering Change**: We empower our teams to think boldly, embrace change, and create lasting value for our clients and communities.",
        "🌍 **Collaboration for Progress**: By fostering collaboration and embracing diverse perspectives, we drive meaningful progress and inspire future generations.",
        "🚀 **A Brighter Tomorrow**: Together, we strive to build a brighter, more sustainable world. \"The future belongs to those who believe in the beauty of their dreams.\" – Eleanor Roosevelt"
      ]
    },
    {
      title: "Our Mission",
      description: [
        "🤝 **Empowering Communities**: Our mission is to empower communities through innovative solutions, fostering a culture of excellence.",
        "🌱 **Commitment to Sustainability**: We are committed to sustainability and strive to make a positive impact in every community we serve.",
        "🔗 **Building Connections**: Together, we aim to create a brighter future through collaboration and integrity. \"Alone we can do so little; together we can do so much.\" – Helen Keller"
      ]
    },
    {
      title: "Our Values",
      description: (
        <>
          🛡️ **Integrity**: Our values are founded on integrity, upholding the highest standards of honesty and ethics in all our dealings. Trust is the cornerstone of lasting relationships, and we strive to earn it through our actions. 
          <br />
          💡 **Innovation**: Innovation is at the heart of our approach; we embrace creativity and new ideas to drive progress, ensuring that we remain adaptable in an ever-changing landscape. 
          <br />
          🤝 **Collaboration**: Collaboration is key to our success; we work together across teams and disciplines, leveraging diverse perspectives to achieve common goals. 
          <br />
          🌟 **Excellence**: We strive for excellence, aiming for the highest quality in everything we do, from the services we provide to the relationships we cultivate. 
          <br />
          📈 **Continuous Improvement**: Our commitment to these values guides our decisions and inspires us to continuously improve and deliver exceptional results. \"Success is the sum of small efforts, repeated day in and day out.\" – Robert Collier
        </>
      )
    }
  ];
  

  return (
    <React.Fragment>
      <div className="min-h-screen w-full bg-white flex flex-col items-center text-black p-6 relative">
        <StoryHero />
        <StoryShowCase />
        <h2 className="font-bold text-center my-12 heading-font tracking-wider text-black text-3xl md:text-5xl">
          <span className='heading-font tracking-wider text-[rgb(255,102,0)]'>The Heart</span> of Our Organization
        </h2>
        {sections.map((section, index) => (
          <GoalCard
            key={index}
            title={section.title}
            description={Array.isArray(section.description) ? section.description.join(' ') : section.description}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default OurStory;
