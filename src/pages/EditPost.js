import React, { useState } from "react";

function EditPost() {
  const [title, setTitle] = useState("First Post");
  const [content, setContent] = useState("Post content");

  return (
    <div className="post">
      <input
        id="postTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        id="postContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="button">Save</button>
    </div>
  );
}

export default EditPost;