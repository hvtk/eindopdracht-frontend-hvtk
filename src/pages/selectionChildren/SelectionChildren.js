import React from "react";
import {useForm} from "react-hook-form";

import './SelectionChildren.css';


function SelectionChildren() {


    const {handleSubmit}= useForm();

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="childrenLayout">
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
            <div className="phoneNumbers" id="phone-numbers"></div>
            <div id="picture-children-background"></div>
        </div>
    )
}

export default SelectionChildren;

