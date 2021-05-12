import React from "react";
import {useForm} from "react-hook-form";

import './SelectionElderly.css';
import elderly from '../../assets/images/selectionElderly/ImageElderly.svg';
import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";


function SelectionElderly() {

    const {handleSubmit}= useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

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
            <div className="phoneNumbers" id="phone-numbers">
                  <span className="positionTextInBox">  <img src={phoneIcon} alt=""/>  112 <br/>
                    <span> bij levensbedrijgende situaties</span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 113 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> denk je aan zelfmoord? </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 0800-0188 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> hulp na seksueel misbruik </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 0800-2000 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> hulp bij huiselijk geweld </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 030-3400600 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> ouderen infolijn (van seniorenorganisatie KBO-PCOB)</span>
                 </span>
            </div>
            <div className="searchProblemsRight" id="search-problems-right" onSubmit={handleSubmit(onFormSubmit)}>
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
                    Eenzaam
                </button>
                <button
                    type="submit" >
                    Dementie
                </button>
                <button
                    type="submit" >
                    Depressief
                </button>
                <button
                    type="submit" >
                    Angstig
                </button>
            </div>
        </div>
    )
}



export default SelectionElderly;

