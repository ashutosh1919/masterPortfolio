import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";

export default function Blogs({ section }) {
  if (!section) return null;
  const blogs = Array.isArray(section.blogs) ? section.blogs : [];
  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        <h1 className="blog-header-text">{section.title}</h1>
        <p className="subTitle blog-subtitle">{section.subtitle}</p>
      </div>
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogs.map((blog, index) => (
            <BlogCard key={`${blog.url}-${index}`} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
