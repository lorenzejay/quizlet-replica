import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

function CardViewer(props) {
  const [frontSide, setFrontSide] = useState(true);
  const [count, setCount] = useState(0);

  //show which side on display
  const flipCard = () => {
    setFrontSide(!frontSide);
  };
  //getting all the cards to display
  const card = props.cardData.map((data) => {
    return (
      <div className="card" onClick={flipCard} key={data.key}>
        <h3>{frontSide ? data.front : data.back}</h3>
      </div>
    );
  });
  //prev and next button//
  let lastIndex = card.length - 1;
  const showNext = () => {
    setCount(count + 1);
    if (count >= card.length - 1) {
      setCount(0);
    }
  };

  const showPrev = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(lastIndex);
    }
  };
  //prev and next button//
  console.log(count);
  return (
    <div className="card-display-center">
      <div className="card-and-button">
        <button className="PN-btn" onClick={showPrev}>
          <NavigateBeforeIcon style={{ height: "48" }} />
        </button>
        {card[count]}
        <button className="PN-btn" onClick={showNext}>
          <NavigateNextIcon style={{ height: "48" }} />
        </button>
      </div>
      <button onClick={props.switchMode} className="card-btn">
        Switch to Editor
      </button>
    </div>
  );
}

export default CardViewer;
