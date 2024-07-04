import React from 'react'
import "./style/Sidenav.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
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
                <Link to={"/universty"}>
                    <button className="sidenav__button">
                        <SchoolTwoToneIcon />
                        <span>Univ.</span>
                    </button>
                </Link>
                <Link to={"/academy"}>
                    <button className="sidenav__button">
                        <SchoolTwoToneIcon />
                        <span>Acad.</span>
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