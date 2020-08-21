import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from "@material-ui/icons/BarChart";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SettingsIcon from "@material-ui/icons/Settings";
import FolderIcon from "@material-ui/icons/Folder";
import { Layers } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div>
      <div className="side-bar">
        <ul>
          <li className="home-btn">
            <HomeIcon /> Home
          </li>
          <li>
            <BarChartIcon />
            Progress
          </li>
          <li>
            <StorefrontIcon /> Premium Content
          </li>
          <li>
            <SettingsIcon /> Settings
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <Layers />
            Sets
          </li>
          <li>
            <FolderIcon /> Folders
          </li>
          <li>Classes</li>
        </ul>
        <hr />
        <ul className="resources">
          <li>Upgrade</li>
          <li>Help Center</li>
          <li>Privacy Policy</li>
          <li>Blog</li>
        </ul>

        <ul className="social-media-icons">
          <li>
            <InstagramIcon />
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
