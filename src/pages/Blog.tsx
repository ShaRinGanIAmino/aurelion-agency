import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

export type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Elevating Brands Through Creative Design",
    subtitle: "How visuals can transform your business identity",
    image: blog1,
    content:
      "Discover how design-driven marketing leads to stronger emotional connections and increased engagement.",
  },
  {
    id: "2",
    title: "The Future of Digital Marketing in 2025",
    subtitle: "Strategies that scale with innovation",
    image: blog2,
    content:
      "Explore the upcoming trends and how to align your digital strategy with the evolving landscape.",
  },
  {
    id: "3",
    title: "Building a Strong Online Presence",
    subtitle: "Consistency, branding, and content strategy",
    image: blog3,
    content:
      "A solid foundation online starts with clear messaging and continuous content creation.",
  },
];

const Blog: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-6xl title text-main font-bold">
          Our Latest Insights
        </h2>
        <p className="mt-4 text-lg paragraph text-gray-700">
          Stay inspired with our expert tips, industry trends, and creative
          journeys.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl md:text-2xl font-bold title text-main">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 paragraph">{post.subtitle}</p>
              <p className="text-gray-700 paragraph text-base line-clamp-3">
                {post.content}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-500 hover:underline font-semibold paragraph"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
