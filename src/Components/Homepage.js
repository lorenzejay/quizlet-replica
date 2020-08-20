import React from "react";
import Sidebar from "./Sidebar";
import HomeDash from "./HomeDash";

function Homepage() {
  return (
    <div className="home-page">
      <Sidebar />
      <HomeDash />
    </div>
  );
}

export default Homepage;
