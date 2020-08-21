import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { FileEarmarkPlus } from "react-bootstrap-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Moon } from "react-bootstrap-icons";

function Header() {
  const [search, setSearch] = useState("");
  const [removeStyleOnSearch, setRemoveStyle] = useState({ display: "" });

  const handleChange = (e) => {
    setSearch(e.target.value);
    setRemoveStyle({ display: "none" });
  };
  //search will be used to filter out existing titles

  return (
    <div className="header">
      <h1 className="logo">Quizlet</h1>
      <div className="search-container">
        <Search className="search-icon" />
        <input
          style={{ width: removeStyleOnSearch.display === "none" ? "65vw" : "10vw" }}
          placeholder="Seach"
          className="search-input"
          onChange={handleChange}
          value={search || ""}
        />
      </div>
      <div className="create-container" style={removeStyleOnSearch}>
        <FileEarmarkPlus />
        <button className="create-btn">Create</button>
      </div>
      <button className="upgrade-btn" style={removeStyleOnSearch}>
        Upgrade: free 7-day trial
      </button>
      <div className="dropdown" style={removeStyleOnSearch}>
        <AccountCircleIcon style={{ height: "7vh" }} />
        <div className="dropdown-content">
          <a href="/">Your Study Sets</a>
          <a href="/">Settings</a>
          <a href="/">Refer a Friend</a>
          <a href="/">Log Out</a>
          <a href="/">Help Center</a>
          <a href="/">Free Premium</a>
          <a href="/">
            {" Night Mode "}
            <Moon style={{ color: "black" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
