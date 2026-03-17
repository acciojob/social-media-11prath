import React from "react";

function PostsPage() {
  return (
    <div className="posts-list">
      <div className="post">
        <h3>First Post</h3>

        <a href="/posts/1">
          <button className="button">Edit</button>
        </a>
      </div>
    </div>
  );
}

export default PostsPage;