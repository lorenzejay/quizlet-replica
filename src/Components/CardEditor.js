import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function CardEditor(props) {
  const cardTd = props.cardData.map((data) => {
    return (
      <tbody key={data.key}>
        <tr>
          <td>{data.front}</td>
          <td>{data.back}</td>
          <td>
            <button className="trash-btn" onClick={() => props.deleteCard(data.key)}>
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
    </div>
  );
}

export default CardEditor;
