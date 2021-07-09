import React from "react";

import './Button.css'

function ButtonD({clickHandler, children}) {
    return (
        <button className="button-in-search-selection-box"
                type="button"
                onClick={clickHandler}
        >
            {children}
        </button>
    )
}

export default ButtonD