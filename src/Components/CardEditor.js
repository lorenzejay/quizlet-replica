import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function CardEditor(props) {
  const [card, setCard] = useState([]);
  const [cardDisplay, setCardDisplay] = useState({ front: "", back: "", key: "" });

  let date = Date.now();

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

  const cardTd = card.map((data) => {
    return (
      <tbody key={data.key}>
        <tr>
          <td>{data.front}</td>
          <td>{data.back}</td>
          <td>
            <button className="trash-btn" onClick={() => deleteCard(data.key)}>
              <DeleteIcon />
            </button>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <div className="card-display-center">
      <h3 className="editor-title">Create Study Set</h3>
      <table className="card-editor-table" style={{ width: "50%" }}>
        <thead>
          <tr>
            <td>Term</td>
            <td>Definition</td>
            <td></td>
          </tr>
        </thead>
        {cardTd}
      </table>
      <button className="card-btn" onClick={props.switchMode}>
        Switch to Viewer
      </button>
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
}

export default CardEditor;
