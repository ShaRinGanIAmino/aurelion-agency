import about from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about-us"
      className="bg-white text-gray-800 px-8 md:px-16 py-20"
    >
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold title text-main leading-tight">
          Empowering Brands Through Creative Marketing
        </h1>
        <p className="mt-4 text-lg md:text-xl paragraph">
          At Aurelion Creative, we build bold brands, craft compelling
          strategies, and deliver results that matter.
        </p>
      </div>

      {/* Who We Are: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-20 items-center justify-between mb-20 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6 order-1 md:order-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-main title">Who We Are</h2>
          <p className="paragraph text-lg">
            Aurelion Creative is a full-service marketing agency driven by
            innovation and strategy. We’re a diverse team of thinkers, creators,
            and problem solvers dedicated to helping brands grow and thrive in a
            digital-first world.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-2">
          <img
            src={about}
            alt="Our Team"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>

      {/* What We Do: Text Right, Image Left (but Text first on mobile) */}
      <div className="flex flex-col md:flex-row gap-0 md:gap-20 items-center justify-between mb-20 max-w-6xl mx-auto">
        <div className="md:w-1/2 space-y-6 order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-main title">What We Do</h2>
          <p className="paragraph text-lg">
            From branding and design to digital marketing and web development,
            we provide comprehensive solutions that help businesses connect,
            engage, and grow. Every project we take on is custom-crafted to meet
            your unique goals.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 order-2 md:order-1">
          <img
            src={about}
            alt="What We Do"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
