import React from "react";
import {useForm} from "react-hook-form";

import './SelectionYouth.css';
import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";
import imageYouth from "../../assets/images/selectionYouth/ImageYouth.svg";



function SelectionYouth() {

    const {handleSubmit}= useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

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
                    <img src={phoneIcon} alt=""/> 0900-0767 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> de luisterlijn (18 tot 25 jaar)</span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 0900-1450 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> Mind Korrelatie (13 tot 25 jaar) </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 043-2058106 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> @ease praten over gevoelens? (12 tot 25 jaar) </span>
                 </span>
            </div>
            <div className="pictureYouthSmall" id="picture-youth-small"> <img className="imageYouth" src={imageYouth} alt=""/> </div>
            <div className="searchProblemsRight" id="search-problems-right" onSubmit={handleSubmit(onFormSubmit)}>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Zoeken
                </button>
              </p>
                <h4> Info over... </h4>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Aandoeningen A - Z
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Testen
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Depressief
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Eenzaam
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Burn-out
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Persoonlijke verhalen
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Zelfstandig wonen, hoe?
                </button>
              </p>
            </div>
        </div>
    )
}

export default SelectionYouth;
