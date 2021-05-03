import React from "react";
import {useForm} from "react-hook-form";

import './AfterSearchQuery.css';


function AfterSearchQuery() {


    const {handleSubmit}= useForm()

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="afterSearchLayout">
            <div className="layoutInputBorderTop" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <button
                    type="submit" >
                    Voorlezen
                </button>
                <button
                    type="submit" >
                    Taalkeuze
                </button>
            </div>
            <div id="border-right"></div>
            <div className="layoutInputBorderBottom" id="border-bottom">
                <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>
            <div id="border-left"></div>
            <div className="searchProblemsLeft" id="search-problems-left"></div>
            <div className="webAddressBox" id="web-address-box"></div>
            <div className="searchOptionWeb" id="search-option-web"> AFTER SEARCH QUARY </div>
            <div className="postalCodeBox" id="postal-code-box"></div>
            <div className="ageBox" id="age-box"></div>
            <div className="pictureSearchWebSmall" id="picture-search-web-small"></div>
        </div>
    )
}




export default AfterSearchQuery;

