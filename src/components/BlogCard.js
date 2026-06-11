import React from "react";

function BlogCard({ blog, onSelectBlog }) {
  return (
    <div className="card" onClick={() => onSelectBlog(blog)}>
      {/* Event Handling: click */}
      <h2>{blog.title}</h2>
      <p className="author">By {blog.author}</p>
      <span className="read">Click to read →</span>
    </div>
  );
}

export default BlogCard;