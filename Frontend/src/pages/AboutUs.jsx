const WhoWeAre = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
          We specialize in expert finance, insurance, and real estate advisory services, empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique needs, ensuring optimized financial health and comprehensive protection.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comprehensive Financial Solutions
            </h3>
            <p className="text-gray-600">
              From investment management and business funding to customized insurance plans, we guide you every step of the way.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Strategic Real Estate Advisory
            </h3>
            <p className="text-gray-600">
              As real estate advisors, we navigate market complexities, providing strategic insights for informed decisions.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Our Commitment
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            With a commitment to trust, integrity, and exceptional service, we strive to exceed expectations, helping you secure your future and grow your investments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
