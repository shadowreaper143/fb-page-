import React, { useState } from "react";
import "../styles/ProfileHeader.css";

function ProfileHeader() {
  const [isFriend, setIsFriend] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleAddFriend = () => {
    setIsFriend(!isFriend);
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="profile-header">
      <div className="cover-photo">
        <img src="./cover.jpg" alt="Cover" />
      </div>
      <div className="profile-info">
        <img src="./profile.jpg" alt="Profile" className="profile-pic" />
        <h2>Becada D. Omas</h2>
        <p>KILALANIN MO ANG INYONG SARILI | BDO.</p>

        {/* ✅ Buttons */}
        <div className="profile-actions">
          <button className="addfriend-btn" onClick={handleAddFriend}>
            {isFriend ? "Friend ✓" : "Add Friend"}
          </button>
          <button className="follow-btn" onClick={handleFollow}>
            {isFollowing ? "Following ✓" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
