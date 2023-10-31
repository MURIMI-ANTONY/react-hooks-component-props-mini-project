import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList"; // Import the ArticleList component

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About blogAbout={blogData.about} blogLogo={blogData.image} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
