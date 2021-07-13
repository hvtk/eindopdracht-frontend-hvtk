import React from "react";

import './TheSelectedPage.css'

function TheSelectedPage({children}) {
    return (
        <p
            id="selected-page"
            className="selectedPage"
        >
            {children}
        </p>
    )
}

export default TheSelectedPage
