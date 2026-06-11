import React from "react";

function BlogDetail({ blog, onBack }) {
  return (
    <div className="detail">
      <button className="backBtn" onClick={onBack}>
        ← Back to Blogs
      </button>

      <div className="detailCard">
        <h1>{blog.title}</h1>
        <h4>Author: {blog.author}</h4>
        
        {blog.tags && blog.tags.length > 0 && (
          <div className="tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        <p>{blog.content}</p>

        {blog.externalLink && (
          <div className="externalLinkBox">
            <strong>🔗 Integrated Source: </strong>
            <a href={blog.externalLink} target="_blank" rel="noopener noreferrer">
              {blog.externalLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogDetail;