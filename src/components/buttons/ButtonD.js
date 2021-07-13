import React from "react";

import styles from './ButtonD.module.css'

function ButtonD({clickHandler, children}) {
    return (
        <button className={styles['button-in-search-selection-box-with-push-to']}
                type="button"
                onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default ButtonD