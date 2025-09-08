import React from "react";
import "../styles/Friends.css";

function Friends() {
  return (
    <div className="friends">
      <h4>Friends</h4>
      <div className="friend-grid">
        <div>
          <img src="cordapia.jpg" alt="f1" />
          <p>Cordapia</p>
        </div>
        <div>
          <img src="eric.jpg" alt="f2" />
          <p>Eric</p>
        </div>
        <div>
          <img src="jepoy.jpg" alt="f3" />
          <p>Jp Gwapo</p>
           </div>
        <div>
           <img src="ledge.jpg" alt="f1" />
          <p>Lady Mae</p>
        </div>
        <div>
          <img src="jaisong.jpg" alt="f2" />
          <p>Jaizel Mae</p>
        </div>
        <div>
          <img src="wilfred.jpg" alt="f3" />
          <p>Thai Member</p>
        </div>
      </div>
    </div>
  );
}

export default Friends;
