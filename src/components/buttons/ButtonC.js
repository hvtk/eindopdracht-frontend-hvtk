import React from "react";

import styles from './ButtonC.module.css'

function ButtonC({clickHandler, children}) {
    return (
        <button className={styles['button-in-age-selection-box']}
                type="button"
                onClick={clickHandler}
                >
            {children}
        </button>
    )
}

export default ButtonC