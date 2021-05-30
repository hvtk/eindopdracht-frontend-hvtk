import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import './SelectionAdults.css';
import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";
import {Link} from "react-router-dom";


function SelectionAdults() {

    const {handleSubmit}= useForm();
    const history = useHistory()

    function onFormSubmit(data) {
        console.log(data);
    }

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="selectionAdultsLayout">
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
                <span className="positionTextInBoxPhoneNumbers">
                    <img src={phoneIcon} alt=""/>  112 <br/>
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
            <div className="pictureAdults" id="picture-adults"> </div>
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
                      className="searchSelectionBox"
                      type="button"
                      onClick={() => {
                          history.push("/search/aidWorkers");
                      }}
                   >
                      Burn-out
                   </button>
                </p>
                <p>
                   <button
                      type="submit" className="searchSelectionBox">
                      Verslaving
                   </button>
                </p>
                <p>
                   <button
                      type="submit" className="searchSelectionBox">
                      Dementie
                   </button>
                </p>
            </div>
            <div id="back-to-home" className="backToHome"> <Link to="/"> Home </Link> </div>
            <div id="selected-page" className="selectedPage"> VOLWASSENEN-PAGINA </div>
            <div id="go-to-profile-page" className="goToProfilePage"> <Link to="/profile"> Ga naar de profielpagina </Link> </div>
            <div id="log-out" className="logOut"> Uit loggen </div>
        </div>
    )
}

export default SelectionAdults;
