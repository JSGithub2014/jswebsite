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
      description: 'We are proud to have disbursed over ₹1,250 crore in loans, empowering businesses and individuals to achieve their financial goals.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-4 md:px-24 py-8">
  <style>
                {`
                  @font-face {
                    font-family: 'Gendy';
                    src: url('../assets/TTF/Gendy.ttf') format('truetype');
                  }
                  .heading-font {
                    font-family: 'Gendy', sans-serif;
                  }
                `}
            </style>

      {/* Page Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center heading-font tracking-wider">
        <span className='Font-extrabolder text-[rgb(255,102,0)] tracking-wider'>Our Achievements: </span> <span className='font-semibold black'>Journey of Trust and Success</span>
      </h2>

      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 flex flex-col justify-center p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                imgSrc={achievement.imgSrc}
                title={achievement.title}
                description={achievement.description}
                achievementNumber={achievement.achievementNumber}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
          <img
            src={achievementImage}
            alt="Illustration of achievements"
            className="w-full h-auto rounded-md"
            loading="lazy" // Improve SEO by lazy loading the image
          />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
