import React from "react";

import './GoToProfilePage.css'
import {Link} from "react-router-dom";

function GoToProfilePage() {
    return (
        <div
            id="go-to-profile-page"
            className="goToProfilePage">
            <Link to="/profile">
                Ga naar de profielpagina
            </Link>
        </div>
    )
}

export default GoToProfilePage
