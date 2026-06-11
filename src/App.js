import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import AddBlog from "./components/AddBlog";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to React",
      author: "Alex Smith",
      content:
        "React is a JavaScript library used to build fast and interactive user interfaces using components.",
      externalLink: "https://react.dev/learn",
      tags: ["React", "UI", "JavaScript"]
    },
    {
      id: 2,
      title: "Understanding JSX",
      author: "Emma Watson",
      content:
        "JSX allows writing HTML inside JavaScript which makes UI development easier and cleaner.",
    },
    {
      id: 3,
      title: "Props vs State Explained",
      author: "Alex Smith",
      content:
        "Props are read-only data passed between components while state manages dynamic internal data.",
    },
    {
      id: 4,
      title: "What is SPA?",
      author: "John Doe",
      content:
        "SPA (Single Page Application) loads a single HTML page and updates content dynamically without reload.",
    },
    {
      id: 5,
      title: "React Components Basics",
      author: "Sophia Lee",
      content:
        "Components are reusable building blocks in React that return JSX UI elements.",
    },
    {
      id: 6,
      title: "Event Handling in React",
      author: "David Miller",
      content:
        "Event handling allows users to interact with UI using clicks, inputs, and other actions.",
    },
    {
      id: 7,
      title: "useState Hook",
      author: "Alex Smith",
      content:
        "useState is a React Hook used to manage state inside functional components.",
    },
    {
      id: 8,
      title: "useEffect Hook",
      author: "Emma Watson",
      content:
        "useEffect is used to handle side effects like API calls and DOM updates.",
    },
    {
      id: 9,
      title: "React Props Drilling",
      author: "John Doe",
      content:
        "Props drilling means passing data through multiple components unnecessarily.",
    },
    {
      id: 10,
      title: "Conditional Rendering",
      author: "Sophia Lee",
      content:
        "Conditional rendering shows different UI based on conditions using if or ternary operators.",
    },
    {
      id: 11,
      title: "JavaScript Basics",
      author: "David Miller",
      content:
        "JavaScript is a powerful programming language used for web development.",
    },
    {
      id: 12,
      title: "Arrow Functions",
      author: "Alex Smith",
      content:
        "Arrow functions provide a shorter syntax for writing functions in JavaScript.",
    },
    {
      id: 13,
      title: "Map Function in React",
      author: "Emma Watson",
      content:
        "Map is used to render lists dynamically in React applications.",
    },
    {
      id: 14,
      title: "React Key Concept",
      author: "John Doe",
      content:
        "Keys help React identify which items have changed in a list.",
    },
    {
      id: 15,
      title: "Virtual DOM",
      author: "Sophia Lee",
      content:
        "Virtual DOM improves performance by updating only changed parts of UI.",
    },



  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddBlog = (newBlog) => {
    setBlogs([{ id: Date.now(), ...newBlog }, ...blogs]);
    setIsAdding(false);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>📝 Advanced Blog SPA</h1>
        <p>{blogs.length} Blog Posts Loaded</p>
      </header>

      {selectedBlog ? (
        <BlogDetail
          blog={selectedBlog}
          onBack={() => setSelectedBlog(null)}
        />
      ) : isAdding ? (
        <AddBlog onAdd={handleAddBlog} onCancel={() => setIsAdding(false)} />
      ) : (
        <>
          <div className="controls">
            <input
              type="text"
              placeholder="Search blogs..."
              className="searchInput"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="primaryBtn" onClick={() => setIsAdding(true)}>
              + Add Blog
            </button>
          </div>
          <BlogList blogs={filteredBlogs} onSelectBlog={setSelectedBlog} />
        </>
      )}
    </div>
  );
}

export default App;