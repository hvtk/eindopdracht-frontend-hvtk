import React from "react";

import styles from './BorderBottom.module.css'

function BorderBottom() {
    return (
        <div
            className={styles['layout-input-border-bottom']}
            id={styles['border-bottom']}
        >
            <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
        </div>
    )
}

export default BorderBottom
