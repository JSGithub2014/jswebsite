import React from 'react';
import AchievementCard from '../components/AchievementCard';
import achievementImage from '../assets/achievement-page-img.png'; 
import GrowthIcon from '../assets/achivement-growth-icon.jpg'; 
import BuildingIcon from '../assets/achivement-building-icon.png'; 
import RupeesIcon from '../assets/achivement-rupees-icon.png'; 
import InsuranceIcon from '../assets/achivement-insurance-icon.png'; 

function Achievement() {
  const achievements = [
    {
      imgSrc: GrowthIcon,
      achievementNumber: "576+",
      title: 'Business/Individual Served',
      description: 'With a proven track record of serving over 576 businesses and individuals, we take pride in our commitment to excellence and customer satisfaction.'
    },
    {
      imgSrc: BuildingIcon,
      achievementNumber: "350+",
      title: 'Real Estate Deals',
      description: 'With over 350 real estate deals successfully closed, our expertise and dedication have made us a trusted partner in the real estate industry.'
    },
    {
      imgSrc: InsuranceIcon,
      achievementNumber: "150+",
      title: 'Families Protected',
      description: 'We are proud to have safeguarded over 150 families, providing them with the security and peace of mind they deserve.'
    },
    {
      imgSrc: RupeesIcon,
      achievementNumber: "1250Cr.+",
      title: 'Loan Disbursed',
      description: 'We are proud to have disbursed more than ₹1,250 crore in loans, empowering businesses and individuals to achieve their financial goals.'
    },
  ];

  return (
    <div className="h-auto flex flex-col items-center px-4 md:px-24 py-4 bg-slate-200">
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between lg:mt-8 my-3 md:w-1/2 md:order-1">
          <h2 className="lg:text-5xl text-3xl font-thin mb-4 text-center heading-font tracking-wider text-shadow">
            <span className='text-[rgb(255,102,0)] tracking-wider heading-font'>Journey</span>
            <span className='black heading-font'> of Trust <br /> and <span className='text-[rgb(255,102,0)] tracking-wider heading-font'>Success</span> </span>
          </h2>
          <img
            src={achievementImage}
            alt="Illustration of achievements"
            className="w-full h-auto rounded-md mb-8"
            loading="lazy"
            aria-describedby="achievement-image-description"
          />
          <p id="achievement-image-description" className="sr-only">
            An illustration depicting the achievements of our company, highlighting our commitment and success in various domains.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-start p-2">
          <div className="flex flex-col gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                imgSrc={achievement.imgSrc}
                title={achievement.title}
                description={achievement.description}
                achievementNumber={achievement.achievementNumber}
                className="w-full h-40" // Set a specific height
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
