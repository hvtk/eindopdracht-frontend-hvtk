import React from "react";

const
function LabelSignUp({clickHandler, children}) {
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