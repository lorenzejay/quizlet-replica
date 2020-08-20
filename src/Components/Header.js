import React from "react";
import { Search } from "react-bootstrap-icons";
import { FileEarmarkPlus } from "react-bootstrap-icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Dropdown } from "react-bootstrap";

function Header() {
  const createModal = () => {
    return <div>modal</div>;
  };
  return (
    <div className="header">
      <h1 className="logo">Quizlet</h1>
      <div className="search-container">
        <Search className="search-icon" height="10vh" />
        <input placeholder="Seach" className="search-input" />
      </div>
      <div className="create-container">
        <FileEarmarkPlus />
        <button className="create-btn">Create</button>
      </div>
      <button className="upgrade-btn">Upgrade: free 7-day trial</button>
      <Dropdown>
        <Dropdown.Toggle className="account-btn" variant="success" id="dropdown-basic">
          <AccountCircleIcon style={{ height: "10vh" }} onClick={createModal} />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-card">
          <Dropdown.Item href="#/action-1">Your Study Sets</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Refer a Friend</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Help Center</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Free Premium</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Night Mode</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Header;
