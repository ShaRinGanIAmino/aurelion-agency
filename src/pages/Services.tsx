import { Link } from "react-router-dom";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const services = [
  {
    img: service1,
    title: "Comprehensive Branding Services",
    shortDesc: "Elevate Your Business Identity",
    details: `
      At Aurelion Creative, branding isn't just about visuals—it's about crafting a story that defines who you are and how the world sees you. 

      Our comprehensive branding services include:
      • Brand Identity Development – From logos to typography and color palettes.
      • Brand Voice & Messaging – Creating consistent communication across channels.
      • Strategy Workshops – Helping you discover your core values and positioning.
      • Visual Storytelling – Imagery and design systems that narrate your brand story.

      With our deep market insight and creative finesse, we ensure your brand doesn’t just look good—it feels right and performs exceptionally.`,
  },
  {
    img: service2,
    title: "Dynamic Digital Marketing",
    shortDesc: "Strategies That Drive Engagement and Growth",
    details: `
      In today’s fast-paced digital world, data-backed strategy and creativity go hand in hand. 
      
      Our marketing solutions are tailored to your audience and business goals, including:
      • Social Media Campaigns – Engaging, trend-aware content strategies.
      • SEO & Content Strategy – Ranking with purpose and depth.
      • Email Marketing – Automation, segmentation, and compelling copywriting.
      • Performance Analytics – Continuous optimization for better ROI.

      We craft campaigns that connect emotionally while achieving quantifiable growth.`,
  },
  {
    img: service3,
    title: "Creative Design Solutions",
    shortDesc: "Captivate and Inspire Your Audience",
    details: `
      Great design doesn't just catch attention—it holds it.
      
      Our studio transforms abstract concepts into tangible, beautiful visuals:
      • Web & App Design – Sleek, responsive, and human-centered interfaces.
      • Packaging Design – Eye-catching and practical.
      • Motion Graphics – Animations that bring stories to life.
      • Print & Collateral – Brochures, posters, business cards, and more.

      Every design is aligned with your brand essence, making each touchpoint impactful.`,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="bg-main text-white py-20 px-8 md:px-16 text-center">
        <h1 className="text-4xl md:text-6xl title font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl paragraph max-w-3xl mx-auto">
          Tailored solutions that blend creativity, strategy, and innovation to
          elevate your brand and help it thrive in a competitive digital world.
        </p>
      </section>

      <section className="py-16 px-8 md:px-16 space-y-20">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl md:text-4xl font-bold text-main title">
                {service.title}
              </h2>
              <h3 className="text-lg md:text-xl italic text-gray-600 paragraph">
                {service.shortDesc}
              </h3>
              <p className="text-lg leading-relaxed whitespace-pre-line paragraph">
                {service.details}
              </p>
              <Link to="/approach">
                <button className="main-button mt-4">Explore More</button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-main text-white py-20 px-8 md:px-16 text-center">
        <h2 className="text-3xl md:text-5xl title font-bold mb-6">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-lg md:text-xl paragraph max-w-2xl mx-auto mb-8">
          Let’s connect and bring your next big idea to life through strategy,
          storytelling, and stunning design.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="main-button-swipe">
            <a href="https://www.linkedin.com/company/aurelion-creative/">
              Get in Touch
            </a>
          </button>
          <Link to="/approach">
            <button className="secondary-button-swipe">View Portfolio</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
