import React from "react";
import Header from "./components/Header";
import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import "./styles/App.css";
import profile from './assets/profile.jpg';
import cover from './assets/cover.jpg';
import OMAS from './assets/OMAS.jpg';
import sen from './assets/sen.jpg';
import jan from './assets/jan.jpg';

function App() {
  return (
    <div>
      <img src={cover} alt="Cover" />
      <img src={profile} alt="Profile" />
      <img src={OMAS} alt="OMAS" />
      <img src={sen} alt="Sen" />
      <img src={jan} alt="Jan" />
    </div>
  );
}

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
