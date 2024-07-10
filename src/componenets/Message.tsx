import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Message() {
    const navigate = useNavigate();
    const [state, setState] = useState("공사중");
    alert(state)
    // if("공사중" == state){
    //     return navigate("/");
    // }
    return (
        <div>공사중</div>
    )
}

export default Message