import React, { useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function RecentCards() {
  // mock data
  const [card, setCard] = useState([
    {
      title: "Microbiology Midterm 10",
      terms: 145,
      userName: "Lorenze Hernandez",
    },
    {
      title: "Chemistry Exam 2",
      terms: 100,
      userName: "Emily Ylime",
    },
    {
      title: "Econ 2010",
      terms: 33,
      userName: "Juan Two",
    },
  ]);

  const noteCard = card.map((item) => {
    return (
      <div className="recent-card-content" key={item.title}>
        <div>
          <h3>{item.title}</h3>
          <p className="terms-amount">{item.terms} terms</p>
        </div>
        <div className="this-user">
          <AccountCircleIcon />
          <p>{item.userName}</p>
        </div>
      </div>
    );
  });

  return <div className="recent-card-container">{noteCard}</div>;
}

export default RecentCards;
