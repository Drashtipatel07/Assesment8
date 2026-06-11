import React from "react";
import BlogCard from "./BlogCard";

function BlogList({ blogs, onSelectBlog }) {
  return (
    <div className="grid">
      {/* Props passing */}
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelectBlog={onSelectBlog}
        />
      ))}
    </div>
  );
}

export default BlogList;