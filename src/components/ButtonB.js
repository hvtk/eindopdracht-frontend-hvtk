import React from "react";

function ButtonB({type, children}) {
    return (
        <button
                type={type}>
            {children}
        </button>
    )
}

export default ButtonB