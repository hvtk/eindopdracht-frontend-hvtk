import React from "react";
import {Link} from "react-router-dom";

import './BackToHome.css'

function BackToHome() {
    return (
        <div
            id="back-to-home"
            className="backToHome">
            <Link to="/"> Home </Link>
        </div>
    )
}

export default BackToHome

