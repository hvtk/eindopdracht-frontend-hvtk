import React from "react";
import {Link} from "react-router-dom";

import styles from './BackToHome.module.css'

function BackToHome() {
    return (
        <div
            id={styles['back-to-home-grid']}
            className={styles['back-to-home']}>
            <Link to="/"> Home </Link>
        </div>
    )
}

export default BackToHome

