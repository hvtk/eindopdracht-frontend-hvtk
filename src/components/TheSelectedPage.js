import React from "react";

import styles from './TheSelectedPage.module.css'

function TheSelectedPage({children}) {
    return (
        <p
            id={styles['selected-page-grid']}
            className={styles['selected-page']}
        >
            {children}
        </p>
    )
}

export default TheSelectedPage
