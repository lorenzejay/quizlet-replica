import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import RecentCards from "./RecentCards";

function HomeDash() {
  const [toggleDisplay, setToggleDisplay] = useState("");

  const removeCard = (e) => {
    setToggleDisplay("none");
  };
  return (
    <div className="home-dash">
      <div className="first-card" style={{ display: toggleDisplay }}>
        <PeopleIcon style={{ height: 60 }} />
        <div>
          <h2>Quizlet is better with friends! Create a class to share study sets.</h2>
          <button className="card-btn">Create a class</button>
        </div>
        <button onClick={removeCard} className="close-card-btn">
          X
        </button>
      </div>
      <div className="recent-cards">
        <div className="recent-cards-title">
          <h3>Recent</h3>
          <a href="./">View All</a>
        </div>
        <div className="recent-cards-grid">
          <RecentCards />
        </div>
      </div>
    </div>
  );
}

export default HomeDash;
