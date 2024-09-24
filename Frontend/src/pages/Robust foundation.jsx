const OurStrengths = () => {
    const strengths = [
      {
        title: 'Governance',
        description:
          'We ensure transparency, accountability, and strong leadership to guide you through every decision.',
        icon: '🛡️', // You can replace this with any relevant icon or image
      },
      {
        title: 'Knowledge',
        description:
          'Our deep expertise across industries ensures we provide accurate, insightful advice to all clients.',
        icon: '📚',
      },
      {
        title: 'Structure',
        description:
          'We develop well-defined frameworks to keep processes efficient and organized, ensuring clarity.',
        icon: '🏗️',
      },
      {
        title: 'Time Bound',
        description:
          'Our solutions are designed with precision, adhering to strict timelines for timely project delivery.',
        icon: '⏳',
      },
      {
        title: 'Cost Effective',
        description:
          'We optimize costs while maximizing value, ensuring you get the best returns on your investments.',
        icon: '💰',
      },
    ];
  
    return (
      <section className="bg-white py-12 px-4 md:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Our Strengths
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <div className="text-5xl mb-4">{strength.icon}</div> {/* Icon */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {strength.title}
                </h3>
                <p className="text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurStrengths;
  