const WhoWeAre = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 md:px-16">
      <div className="container mx-auto text-center">
        {/* Main heading for SEO */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[rgb(255,102,0)] mb-6">
          Who We Are
        </h1>

        {/* Descriptive paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
          We specialize in <strong>expert financial services, insurance solutions, and real estate advisory</strong>, 
          empowering individuals, families, and businesses to achieve their goals. Our tailored solutions address unique 
          needs, ensuring optimized financial health and comprehensive protection.
        </p>

        {/* Services section */}
        <div className="grid md:grid-cols-2 gap-8">
          <article className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-[rgb(58,59,59)] mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-gray-600">
              From <strong>investment management</strong> and business funding to customized insurance plans, we guide 
              you every step of the way with our expert solutions.
            </p>
          </article>

          <article className="bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-[rgb(58,59,59)] mb-4">
              Strategic Real Estate Advisory
            </h2>
            <p className="text-gray-600">
              As trusted real estate advisors, we help you navigate market complexities, providing the 
              <strong> strategic insights</strong> you need to make informed decisions.
            </p>
          </article>
        </div>

        {/* Our Commitment Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-[rgb(255,102,0)] mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            With a commitment to <strong>trust, integrity, and exceptional service</strong>, 
            we strive to exceed your expectations, helping you secure your future and grow your investments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
