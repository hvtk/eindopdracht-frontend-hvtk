import React from "react";
import {useForm} from "react-hook-form";

import './SelectionElderly.css';
import elderly from '../../assets/images/selectionElderly/ImageElderly.svg';


function SelectionElderly() {


    const {handleSubmit}= useForm();

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="selectionElderlyLayout">
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
            <div className="pictureElderly" id="picture-elderly"> <img className="imageElderly" src={elderly} alt=""/></div>
            <div className="phoneNumbers" id="phone-numbers"></div>
            <div className="searchProblemsRight" id="search-problems-right"></div>
        </div>
    )
}



export default SelectionElderly;

