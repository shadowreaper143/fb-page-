import React, { useState } from "react";
import Post from "./Post";
import Intro from "./Intro";
import Friends from "./Friends";
import Photos from "./Photos";
import "../styles/Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="tabs-container">
      {/* Tab Buttons */}
      <div className="tabs">
        <button
          className={activeTab === "posts" ? "active" : ""}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={activeTab === "friends" ? "active" : ""}
          onClick={() => setActiveTab("friends")}
        >
          Friends
        </button>
        <button
          className={activeTab === "photos" ? "active" : ""}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "posts" && (
          <>
            <Post
              profilePic="./profile.jpg"
              username="Becada D. Omas"
              text="Find the perfect plan B with BDO| OMAS."
              image="./OMAS.jpg" alt="post1"
            />
            <Post
              profilePic="./profile.jpg"
              username="Becada D. Omas"
              text="Sometimes all you need is sen  to brighten the day!"
              image="./sen.jpg" alt="post2"
            />
            <Post
              profilePic="./profile.jpg"
              username="Becada D. Omas"
              text="Life is better with good friends #De asis🐱"
              image="./jan.jpg" alt="post3"
            />
          </>
        )}
        {activeTab === "about" && <Intro />}
        {activeTab === "friends" && <Friends />}
        {activeTab === "photos" && <Photos />}
      </div>
    </div>
  );
};

export default Tabs;
