import React from 'react';
import ServicesCard from '../components/ServicesCard';
import financeLogo from '../assets/Services-finance.png';
import insuranceLogo from '../assets/Services-insurance.png';
import realEstateLogo from '../assets/Services-real-estate.png';

const services = [
    {
        logo: financeLogo,
        title: 'FINANCE',
        description: 'We specialize in providing expert lending consultancy services tailored to meet the unique needs of small and mid-sized businesses. Our mission is to empower our clients with the knowledge and resources necessary to secure the financing they need for growth and success.',
    },
    {
        logo: insuranceLogo,
        title: 'INSURANCE',
        description: 'We are dedicated to providing exceptional insurance consultancy services tailored to meet the unique needs of individuals and businesses. With a commitment to integrity and excellence, we help our clients navigate the complex world of insurance to ensure they are adequately protected.',
    },
    {
        logo: realEstateLogo,
        title: 'REAL ESTATE',
        description: 'We are committed to providing expert real estate consultancy services that empower clients to make informed decisions in the dynamic property market. With a focus on integrity, professionalism, and personalized service, we guide individuals and businesses through every aspect of real estate transactions.',
    },
];

function Services() {
    return (
        <div className='relative w-full h-auto lg:h-screen bg-transparent overflow-hidden flex flex-col justify-center items-center gap-7'>
            <div>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-thin text-center tracking-wider'>
                    <span className=' heading-font tracking-wider'>Our </span>
                    <span className=' heading-font text-[rgb(255,102,0)]'>Service</span>
                </h1>
            </div>
            <div>
                <p className='text-sm md:text-base lg:text-lg text-center'>
                    We offer a comprehensive range of advisory services designed to meet the diverse needs of our clients in finance, insurance, and real estate.
                </p>
            </div>
            <div className="flex justify-center flex-wrap">
                {services.map((service, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <ServicesCard
                            logo={service.logo}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </div>
            <div className='absolute right-[-30%] top-[-45%] z-[-1] w-[50vw] h-[50vw] rounded-full bg-[#F6EDE1]'></div>
        </div>
    );
}

export default Services;
