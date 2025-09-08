import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Facebook</h1>
      <div className="header-icons">
        <span>🔍</span>
        <span>☰</span>
      </div>
    </div>
  );
}

export default Header;
