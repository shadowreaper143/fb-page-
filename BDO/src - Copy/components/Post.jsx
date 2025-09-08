import React from "react";
import "../styles/Post.css";

const Post = ({ profilePic, username, text, image }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={profilePic} alt="profile" className="post-profile-pic" />
        <span className="post-username">{username}</span>
      </div>
      <p className="post-text">{text}</p>
      {image && <img src={image} alt="post" className="post-image" />}
    </div>
  );
};

export default Post;
