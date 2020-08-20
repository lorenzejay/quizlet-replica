import React, { useState } from "react";
import "./App.css";
import CardEditor from "./Components/CardEditor";
import CardViwer from "./Components/CardViewer";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";

function App() {
  const [editor, setEditor] = useState(true);
  const [card, setCard] = useState([]);
  const [cardDisplay, setCardDisplay] = useState({ front: "", back: "", key: "" });

  let date = Date.now();

  const switchMode = () => {
    setEditor(!editor);
  };

  const handleChange = (e) => {
    setCardDisplay({ ...cardDisplay, [e.target.name]: e.target.value, key: date });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const items = cardDisplay;
    setCard([...card, items]);
    setCardDisplay({ ...cardDisplay, front: "", back: "" });
  };

  const deleteCard = (key) => {
    const filteredList = card.filter((item) => item.key !== key);
    setCard(filteredList);
  };

  React.useEffect(() => {
    const cardStorage = localStorage.getItem("card");
    if (cardStorage) {
      setCard(JSON.parse(cardStorage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  });

  const display = () => {
    if (editor) {
      return (
        <div>
          <CardEditor cardData={card} switchMode={switchMode} deleteCard={deleteCard} />;
          <form className="create-study-set-form">
            <input
              type="text"
              name="front"
              placeholder=" Enter Term"
              onChange={handleChange}
              value={cardDisplay.front || ""}
            />
            <input
              type="text"
              name="back"
              placeholder="Enter Definition"
              onChange={handleChange}
              value={cardDisplay.back || ""}
            />
            <button onClick={handleClick} className="create-card-btn">
              Create
            </button>
          </form>
        </div>
      );
    } else {
      return <CardViwer cardData={card} switchMode={switchMode} />;
    }
  };

  return (
    <div>
      <Header />
      <Homepage />
      {display()}
    </div>
  );
}

export default App;
