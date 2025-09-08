import React from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <ProfileHeader />
      <Tabs />   {/* ✅ Tabs contains Posts, About, Friends, Photos */}
    </div>
  );
}

export default App;
