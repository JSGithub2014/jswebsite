// src/pages/Achievement.jsx
import React from 'react';
import AchievementCard from '../components/AchievementCard';
import achievementImage from '../assets/achievement-page-img.png'; // Adjust the path as necessary
import GrowthIcon from '../assets/achivement-growth-icon.jpg'; // Make sure the image path is correct
import BuildingIcon from '../assets/achivement-building-icon.png'; // Make sure the image path is correct
import RupeesIcon from '../assets/achivement-rupees-icon.png'; // Make sure the image path is correct

function Achievement() {
  const achievements = [
    { 
      imgSrc: GrowthIcon, // Path to the image
      title: 'Business/Individual Served', 
      description: 'With a proven track record of serving over 576 businesses and individuals, we take pride in our commitment to excellence and customer satisfaction.' 
    },
    { 
      imgSrc: BuildingIcon,
      title: 'Real Estate Deals', 
      description: 'With over 350 real estate deals successfully closed, our expertise and dedication have made us a trusted partner in the real estate industry.' 
    },
    { 
      imgSrc: GrowthIcon, // Use the same or different images as needed
      title: 'Families Protected', 
      description: 'We are proud to have safeguarded over 150 families, providing them with the security and peace of mind they deserve.' 
    },
    { 
      imgSrc: RupeesIcon, // Use the same or different images as needed
      title: 'Loan Disbursed', 
      description: 'We are proud to have disbursed over ₹1,250 crore in loans, empowering businesses and individuals to achieve their financial goals.' 
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-screen px-24">
      <div className="md:w-1/2 flex flex-col justify-center p-4">
        <h2 className="text-xl font-bold mb-4">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              imgSrc={achievement.imgSrc}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
        <img
          src={achievementImage}
          alt="Achievements"
          className="w-full h-auto rounded-md"
        />
      </div>
    </div>
  );
}

export default Achievement;
