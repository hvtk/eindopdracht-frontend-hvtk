import React from "react";
import {useForm} from "react-hook-form";

import './SelectionYouth.css';



function SelectionYouth() {

    const {handleSubmit}= useForm();

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="selectionYouthLayout">
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
            <div className="pictureYouthSmall" id="picture-youth-small"></div>
            <div className="phoneNumbers" id="phone-numbers"></div>
            <div className="searchProblemsRight" id="search-problems-right"></div>
        </div>
    )
}




/*return (
        <div>
            Dit is het scherm na selectie op leeftijd voor jongeren!
        </div>
    )


}*/

export default SelectionYouth;
