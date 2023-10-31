import React from "react";
import Article from "./Article"; // Assuming you have an Article component

function ArticleList(props) {
  const { posts } = props; // Assuming posts is an array of post objects

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
      ))}
    </main>
  );
}

export default ArticleList;
