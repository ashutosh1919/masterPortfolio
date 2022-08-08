import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div class="container">
        <div class="square">
          <img src={blog.image} className="blog-card-image mask" />
          <div class="blog-card-title">{blog.title}</div>
          <h2 className="blog-card-subtitle">{blog.description}</h2>

          <div>
            <a href={blog.url} target="_" class="button">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
