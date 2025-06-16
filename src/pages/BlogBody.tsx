import React from "react";
import { useParams } from "react-router-dom";
import type { BlogPost } from "./Blog";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

// Temporary mock blog data (you could move this to a separate file if needed)
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Elevating Brands Through Creative Design",
    subtitle: "How visuals can transform your business identity",
    image: blog1,
    content: `
      At Aurelion Creative, we understand the power of visuals in storytelling. 
      From mood boards to finalized concepts, our design process is rooted in empathy and strategy.
      
      Brands today need to resonate emotionally and visually — and that's where we come in. 
      In this blog, we explore real examples and tips you can apply to elevate your brand.
    `,
  },
  {
    id: "2",
    title: "The Future of Digital Marketing in 2025",
    subtitle: "Strategies that scale with innovation",
    image: blog2,
    content: `
      2025 is shaping up to be the year of intelligent automation and human-centered design. 
      Explore how brands are staying ahead with adaptive strategies that embrace AI, personalization, and data.
    `,
  },
  {
    id: "3",
    title: "Building a Strong Online Presence",
    subtitle: "Consistency, branding, and content strategy",
    image: blog3,
    content: `
      A strong online presence begins with consistency — in visuals, voice, and values. 
      Learn how to create a scalable system to grow your reach and maintain trust.
    `,
  },
];

const BlogBody: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const blog = blogPosts.find((post) => post.id === id);

  if (!blog) {
    return (
      <div className="py-20 text-center text-red-500 text-xl font-semibold">
        Blog not found.
      </div>
    );
  }

  return (
    <section className="bg-white py-20 px-8 md:px-16 text-gray-900">
      <div className="max-w-4xl mx-auto space-y-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <h1 className="text-3xl md:text-5xl title text-main font-bold">
          {blog.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 italic paragraph">
          {blog.subtitle}
        </h2>
        <p className="text-lg leading-relaxed paragraph whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </section>
  );
};

export default BlogBody;
