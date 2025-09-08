import React from "react";
import "../styles/Photos.css";

function Photos() {
  return (
    <div className="photos">
      <h4>Photos</h4>
      <div className="photo-grid">
        <img src="OMAS.jpg" alt="p1" />
        <img src="sen.jpg" alt="p2" />
        <img src="jan.jpg" alt="p3" />
      </div>
    </div>
  );
}

export default Photos;
