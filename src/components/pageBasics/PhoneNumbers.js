import React from "react";

import './PhoneNumber.css'

function PhoneNumbers({image, title, description}) {
    return (
        <div className="phoneNumbers">
            <img src={image} alt=""/>
            <h4 className="phoneNumbers-number">
                {title}
            </h4>
            <h5 className="phoneNumbers-description">
                {description}
            </h5>
        </div>
    )
}

export default PhoneNumbers;

