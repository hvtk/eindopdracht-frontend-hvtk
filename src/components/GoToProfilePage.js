import React from "react";

import styles from './GoToProfilePage.module.css'
import {Link} from "react-router-dom";

function GoToProfilePage() {
    return (
        <div
            id={styles['go-to-profile-page-grid']}
            className={styles['go-to-profile-page']}>
            <Link to="/profile">
                Ga naar de profielpagina
            </Link>
        </div>
    )
}

export default GoToProfilePage
