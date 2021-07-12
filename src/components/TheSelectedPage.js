import React from "react";

import './TheSelectedPage.css'

function TheSelectedPage({selectedPage}) {
    return (
        <div
            id="selected-page"
            className="selectedPage"
        >
            {selectedPage}
        </div>
    )
}

export default TheSelectedPage
