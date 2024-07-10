import React from 'react'
import "./style/Sidenav.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
function Sidenav() {
    return (
        <div className='sidenav'>
            <div className='sidenav__buttons'>
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
                <Link to={"/Message"}>
                    <button className="sidenav__button">
                        <ChatIcon />
                        <span>Message</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Sidenav