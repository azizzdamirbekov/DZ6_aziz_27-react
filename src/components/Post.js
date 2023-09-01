import React, { useState } from "react";
import "../index.css";

function Post({ post, currentCatImage, onEditPost, onDeletePost }) {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedComment, setEditedComment] = useState(post.description);

  const handleEditClick = () => {
    if (editing) {
      onEditPost(post.id, { title: editedTitle, description: editedComment });
    }
    setEditing(!editing);
  };

  return (
    <div className="all-block">
      {editing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <h1>{post.title}</h1>
      )}
      <div>
        <img
          src={post.image || currentCatImage}
          alt="Cat"
        />
      </div>

      {editing ? (
        <textarea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      ) : (
        <p>{post.description}</p>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={handleEditClick} className="edit-button">
          edit
        </button>
        <div style={{ width: "10px" }} />
        <button onClick={() => onDeletePost(post.id)}>
          delete
        </button>
      </div>
    </div>
  );
}

export default Post;
