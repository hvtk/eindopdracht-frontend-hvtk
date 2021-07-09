import React from "react";

import './Button.css'

function Button({children}) {
    return (
        <button className="button-in-search-selection-box"
            type="submit">
            {children}
        </button>
    )
}

export default Button