import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Message() {
    const navigate = useNavigate();
    const [state, setState] = useState("공사중");
    if ("공사중" === state) {
        alert(state)
        console.log("first")
        navigate("/home");
    }
    return (
        <div>공사중</div>
    )
}

export default Message