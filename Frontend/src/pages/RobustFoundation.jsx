const OurStrengths = () => {
  const strengths = [
    {
      title: 'Governance',
      description:
        'We ensure transparency, accountability, and strong leadership to guide you through every decision.',
      icon: '🛡️', // Optionally replace with actual images/icons
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
    {
      title: 'Innovation',
      description:
        'We leverage cutting-edge technology and creative thinking to provide innovative solutions that drive success.',
      icon: '🚀',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16">
      <div className="container mx-auto text-center">
        {/* More engaging heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          Discover Our Strengths: The Pillars of Success
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4">{strength.icon}</div> {/* Icon */}
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                {strength.title}
              </h2>
              <p className="text-sm md:text-base text-gray-600">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStrengths;
