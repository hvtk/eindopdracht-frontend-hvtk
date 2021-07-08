import React from "react";

import './Button.css'

function Button({type, children}) {
    return (
        <button className="button-in-search-selection-box"
            type={type}>
            {children}
        </button>
    )
}

export default Button