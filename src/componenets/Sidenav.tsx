import React from "react";
import "./style/Sidenav.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BrushIcon from '@mui/icons-material/Brush';
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
function Sidenav() {
  return (
    <div className="sidenav">
      <div className="sidenav__buttons">
        <Link to={"/home"}>
          <button className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </button>
        </Link>
        <Link to={"/project"}>
          <button className="sidenav__button">
            <AccountTreeIcon />
            <span>project</span>
          </button>
        </Link>
        <Link to={"/publishing"}>
          <button className="sidenav__button">
            <BrushIcon />
            <span>Publishing</span>
          </button>
        </Link>
        <a href="https://velog.io/@9511dasol/posts" target="_blank">
          <button className="sidenav__button">
            <FormatBoldIcon />
            <span>Blog</span>
          </button>
        </a>
        <a href="https://github.com/9511dasol" target="_blank">
          <button className="sidenav__button">
            <GitHubIcon />
            <span>GitHub</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sidenav;
