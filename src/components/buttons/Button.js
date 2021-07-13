import React from "react";

import styles from './Button.module.css'

function Button({children}) {
    return (
        <button className={styles['button-in-search-selection-box']}
            type="submit">
            {children}
        </button>
    )
}

export default Button