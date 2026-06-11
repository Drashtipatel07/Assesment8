import React, { useState } from "react";

function AddBlog({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [externalLink, setExternalLink] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !content) return;
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    onAdd({ title, author, content, externalLink, tags: tagsArray });
  };

  return (
    <div className="addBlogForm">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            required
          />
        </div>
        <div className="formGroup">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
            required
          />
        </div>
        <div className="formGroup">
          <label>External Blog Link (Optional)</label>
          <input
            type="url"
            value={externalLink}
            onChange={(e) => setExternalLink(e.target.value)}
            placeholder="https://example.com/my-post"
          />
        </div>
        <div className="formGroup">
          <label>Tags (Comma separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g. React, JavaScript, Web"
          />
        </div>
        <div className="formGroup">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Blog Content"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="formActions">
          <button type="button" className="secondaryBtn" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="primaryBtn">
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBlog;
