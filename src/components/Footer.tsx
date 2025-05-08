import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white title">
            Aurelion Creative
          </h4>
          <p className="text-gray-400 text-sm paragraph">
            Elevating brands through creativity and innovation. Let's build
            something extraordinary together.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-main transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-main transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-main transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-main transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-2">
          <h6 className="text-lg font-semibold text-white paragraph">
            Services
          </h6>
          <ul className="text-sm space-y-1">
            <li>
              <a
                href="#services"
                className="hover:text-main transition paragraph"
              >
                Branding
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-main transition paragraph"
              >
                Digital Marketing
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-main transition paragraph"
              >
                Design Solutions
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <h6 className="text-lg font-semibold text-white paragraph">
            Company
          </h6>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#about" className="hover:text-main transition paragraph">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-main transition paragraph"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#feedbacks"
                className="hover:text-main transition paragraph"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-main transition paragraph">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h6 className="text-lg font-semibold text-white paragraph">
            Contact
          </h6>
          <p className="text-sm paragraph">
            123 Aurelion Street, Creativity City
          </p>
          <p className="text-sm paragraph">
            Email: contact@aurelioncreative.com
          </p>
          <p className="text-sm paragraph">Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-xs paragraph">
        &copy; {new Date().getFullYear()} Aurelion Creative. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
