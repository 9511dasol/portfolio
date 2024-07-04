import React from 'react';
import "./style/Home.css";
import Sidenav from "./Sidenav"
import { Outlet } from "react-router-dom";
function Home() {
    return (
        <div className='home'>
            <div className='home__nav'>
                <Sidenav />
            </div>
            <div className='home__list'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home