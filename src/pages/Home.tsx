import cube from "../assets/cube.svg";
import about from "../assets/about.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import brand from "../assets/brand.png";

const services = [
  {
    img: service1,
    title: "Comprehensive Branding Services to Elevate Your Business Identity",
    description:
      "We craft compelling brand narratives that resonate with your audience.",
  },
  {
    img: service2,
    title:
      "Dynamic Digital Marketing Strategies to Drive Engagement and Growth",
    description:
      "Our data-driven campaigns ensure maximum reach and impact for your brand.",
  },
  {
    img: service3,
    title: "Creative Design Solutions That Captivate and Inspire Your Audience",
    description:
      "Let us bring your vision to life with stunning visuals and designs.",
  },
];

const testimonials = [
  {
    quote:
      "Aurelion Creative transformed our marketing strategy and helped us reach new heights! Their innovative approach is unmatched.",
    name: "John Doe",
    title: "CEO, Stellar Inc.",
  },
  {
    quote:
      "The team exceeded our expectations. Their design and execution were flawless!",
    name: "Jane Smith",
    title: "CMO, BrightTech",
  },
  {
    quote:
      "Highly professional and deeply creative. Would absolutely work with them again.",
    name: "Ahmed Zaki",
    title: "Founder, Nomad Co.",
  },
  {
    quote:
      "Aurelion Creative transformed our marketing strategy and helped us reach new heights! Their innovative approach is unmatched.",
    name: "John Doe",
    title: "CEO, Stellar Inc.",
  },
  {
    quote:
      "The team exceeded our expectations. Their design and execution were flawless!",
    name: "Jane Smith",
    title: "CMO, BrightTech",
  },
  {
    quote:
      "Highly professional and deeply creative. Would absolutely work with them again.",
    name: "Ahmed Zaki",
    title: "Founder, Nomad Co.",
  },
];

const Home = () => {
  return (
    <body>
      {/* Landing Section */}
      <section
        id="landing"
        className="flex flex-col md:flex-row items-center md:items-baseline justify-between p-8 md:px-16 md:py-20"
      >
        <div className="mb-8 md:mb-0">
          <h1 className="text-3xl md:text-8xl title text-main leading-tight md:w-11/12 w-[100%]">
            Unleash Your Business with Aurelion Creative
          </h1>
        </div>
        <div className="space-y-6 md:w-3/5 w-[100%]">
          <p className="paragraph text-base md:text-lg max-w-lg">
            At Aurelion Creative, we believe in crafting extraordinary
            experiences that resonate. Our grand vision empowers brands to
            explore limitless creativity and achieve their fullest potential.
          </p>
          <div className="flex space-x-4">
            <button className="title main-button">Learn More</button>
            <button className="title secondary-button">Approach</button>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section
        id="video"
        className="w-full md:w-screen h-full md:h-screen px-4 py-4 bg-gray-200 flex justify-center items-center"
      >
        <div className="w-full h-full max-w-4xl md:max-w-[1600px] max-h-[90vh] aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/gXFATcwrO-U?si=HILa7DXJBZ7s_AQ6"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="p-8 md:px-16 md:py-20 bg-gray-50 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="max-w-full md:max-w-3/5 text-center md:text-left space-y-8">
          <h3 className="max-w-full md:max-w-11/12 text-xl md:text-5xl title text-main md:leading-15 leading-8">
            Unleashing Creative Potential: A Unique Approach to Marketing
            Excellence
          </h3>
          <p className="paragraph text-xl max-w-full md:max-w-4/5">
            At Aurelion Creative, we believe in crafting marketing strategies
            that resonate. Our innovative approach combines creativity with
            data-driven insights to deliver exceptional results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img
                src={cube}
                alt="cube"
                className="w-12 md:w-16 h-12 md:h-16"
              />
              <h6 className="font-semibold paragraph text-xl">
                Innovative Strategies
              </h6>
              <p className="paragraph text-center md:text-left text-lg max-w-64">
                We tailor unique marketing solutions that elevate your brand and
                engage your audience.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img
                src={cube}
                alt="cube"
                className="w-12 md:w-16 h-12 md:h-16"
              />
              <h6 className="font-semibold paragraph text-xl">
                Creative Vision
              </h6>
              <p className="paragraph text-center md:text-left text-lg max-w-64">
                Our team harnesses limitless creativity to forge impactful
                campaigns that shine.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 w-full md:max-w-2/5">
          <img src={about} alt="About Us" className="w-full h-auto" />
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="p-8 md:px-16 md:py-20 bg-gray-900">
        <div className=" text-center md:text-left space-y-4 flex flex-col md:flex-row items-center justify-between">
          <h3 className="max-w-4xl text-2xl md:text-6xl title text-blue-300 md:text-white md:leading-18 leading-8">
            Unlock Your Brand's Potential with Our Tailored Marketing Solutions
          </h3>
          <p className="paragraph max-w-2xl text-lg text-white">
            At Aurelion Creative, we specialize in transforming your brand's
            identity through innovative strategies. Our team harnesses the power
            of creativity to elevate your presence in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Map over services array to dynamically create service cards */}
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 border-0 space-y-4 text-center border-main flex flex-col justify-start items-start"
            >
              <img
                src={service.img}
                alt={service.title}
                className="md:w-300 md:h-100 mx-auto object-contain w-200 h-60"
              />
              <h4 className="text-left text-xl md:text-2xl title text-blue-300 leading-8 md:leading-10">
                {service.title}
              </h4>
              <p className="paragraph text-left text-lg md:text-xl text-white">
                {service.description}
              </p>
              <button className="text-blue-300 font-semibold paragraph hover:underline">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="bg-gray-100 p-8 md:px-16 md:py-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl title text-main mb-6 md:leading-15 leading-8">
          Unlock Your Brand's Potential with Aurelion Creative's Innovative
          Marketing Solutions
        </h2>
        <p className="paragraph max-w-4xl mx-auto mb-8 text-lg">
          When you partner with Aurelion Creative, you gain access to a team
          that understands your unique vision and goals. Our tailored strategies
          are designed to elevate your brand and engage your audience
          effectively.
        </p>
        <a href="#" className="relative group block w-full">
          <img
            src={brand}
            alt="Portfolio Example"
            className="w-full h-auto object-cover"
          />
          <span className="absolute inset-0 bg-main bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <span className="text-white text-3xl font-semibold title">
              View Projects
            </span>
          </span>
        </a>
      </section>
      {/* Feedbacks Section */}
      <section
        id="feedbacks"
        className="relative bg-white py-12 overflow-hidden"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-main title text-center my-16">
          “ What Our Clients Say ”
        </h2>

        {/* Gradient edges */}
        <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="relative z-20 w-max animate-scroll-container flex gap-6 min-w-0">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[250px] sm:w-[280px] md:w-[300px] max-w-full bg-gray-100 rounded-lg p-6 shadow-md mx-2 overflow-hidden flex flex-col justify-center items-center text-center"
            >
              <h3 className="text-sm sm:text-base md:text-lg italic text-main paragraph mb-4 line-clamp-6 break-words overflow-hidden">
                “{t.quote}”
              </h3>
              <div>
                <h6 className="font-bold paragraph">{t.name}</h6>
                <p className="text-sm text-gray-600 paragraph">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Reach Section */}
      <section id="reach" className="bg-main text-white text-center py-16 px-8">
        <div className="max-w-3xl mx-auto text-left">
          <h3 className="text-2xl md:text-4xl font-bold mb-4 title">
            Let's create something amazing
          </h3>
          <p className="text-lg mb-8 paragraph">
            Connect with us today to explore how we can elevate your brand to
            new heights and create innovative solutions tailored just for you.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-4">
            <button className="title main-button-swipe">Contact</button>
            <button className="title secondary-button-swipe">Consult</button>
          </div>
        </div>
      </section>
    </body>
  );
};

export default Home;
