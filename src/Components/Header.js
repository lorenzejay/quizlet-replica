import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import { FileEarmarkPlus } from "react-bootstrap-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Moon } from "react-bootstrap-icons";
import { dark } from "@material-ui/core/styles/createPalette";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [removeStyleOnSearch, setRemoveStyle] = useState({ display: "" });

  const [darkTheme, setDarkTheme] = useState(true);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setRemoveStyle({ display: "none" });
  };
  //search will be used to filter out existing titles

  const changeTheme = (e) => {
    setDarkTheme(!darkTheme);
  };

  console.log(darkTheme);
  return (
    <nav className="header">
      <Link to="/">
        <h1 className="logo">Quizlet</h1>
      </Link>
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
        <button className="create-btn">
          <Link to="/create">Create</Link>
        </button>
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
          <a href="#" onClick={changeTheme}>
            {" Night Mode "}
            <Moon style={{ color: "black" }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
export const ThemeContext = React.createContext();
