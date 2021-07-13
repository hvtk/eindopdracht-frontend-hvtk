import React from "react";

import './ButtonC.css'

function ButtonC({clickHandler, children}) {
    return (
        <button className="button-in-age-selection-box"
                type="button"
                onClick={clickHandler}
                >
            {children}
        </button>
    )
}

export default ButtonC