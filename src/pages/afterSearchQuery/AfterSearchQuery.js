import React from "react";
import {useForm} from "react-hook-form";

import './AfterSearchQuery.css';
import imageSearchPostalcodeAge from '../../assets/images/afterSearchQuery/ImageSeachPostalcodeAge.svg';


function AfterSearchQuery() {

    const {handleSubmit, register}= useForm()

    function onFormSubmit(data) {
        console.log(data);
    }

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
            <div className="searchProblemsLeftElderly" id="search-problems-left" onSubmit={handleSubmit(onFormSubmit)}>
                <button
                    type="submit" >
                    Zoeken
                </button>
                <h4> Info over... </h4>
                <button
                    type="submit" >
                    Aandoeningen A - Z
                </button>
                <button
                    type="submit" >
                    Problemen thuis
                </button>
                <button
                    type="submit" >
                    Seksualiteit
                </button>
                <button
                    type="submit" >
                    Eenzaam
                </button>
                <button
                    type="submit" >
                    Persoonlijke verhalen
                </button>
            </div>
            <div className="webAddressBox" id="web-address-box"></div>
            <div className="searchOptionWeb" id="search-option-web"> AFTER SEARCH QUARY </div>
            <div className="postalCodeBox" id="postal-code-box">
                <label htmlFor="postalCode-field">
                    <input
                        type="text"
                        name="postalCode"
                        id="postalCode-field"
                        placeholder="postcode"
                        {...register("postalCode")}
                    />
                </label>
            </div>
            <div className="ageBox" id="age-box">
                <label htmlFor="ageBox-field">
                    <input
                        type="text"
                        name="age"
                        id="ageBox-field"
                        placeholder="leeftijd"
                        {...register("age")}
                    />
                </label>
            </div>
            <div className="pictureSearchWebSmall" id="picture-search-web-small"><img className="imageSearchPostalcodeAge" src={imageSearchPostalcodeAge} alt=""/> </div>
        </div>
    )
}




export default AfterSearchQuery;

