import React, {useState, useContext} from "react";

import './Homepage.css';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import phoneIcon from '../../assets/icons/callicon.svg'
import chatIcon from'../../assets/icons/chaticon.svg'
import whatsappIcon from '../../assets/icons/whattsappicon.svg'
import {AgeGroupContext} from "../../context/SearchAgeGroupContext"


function Homepage() {
const {selectedAgeGroupForContext, setSelectedAgeGroupForContext} = useContext(AgeGroupContext);
    const {handleSubmit}= useForm();
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(null);
    const history = useHistory();
    console.log(selectedAgeGroupForContext);

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
      <>
        <div className="homepageLayout">
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
                <span className="positionTextInBoxPhoneNumbers">  <img src={phoneIcon} alt=""/>  112 <br/>
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
                    <img src={phoneIcon} alt=""/> 0800-2432 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> kinder telefoon </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 0900-0767 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> de luisterlijn (18 tot 25 jaar)</span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 0900-1450 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> Mind Korrelatie (13 tot 25 jaar) </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 043-2058106 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> @ease praten over gevoelens? (12 tot 25 jaar) </span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 030-3400600 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> ouderen infolijn (van seniorenorganisatie KBO-PCOB)</span>
                </span>
            </div>

            <div className="pictureHomepage" id="picture-homepage"> </div>

            <div className="searchAge" id="search-age">

                <h4> Kies de leeftijdsgroep </h4>

                <button className="ageSelectionBox"
                  type="button"
                  onClick={() => {
                      setSelectedAgeGroupForContext('KINDEREN');
                      history.push("/signup");
                  }}
                >
                  KINDEREN
                </button>
                <button className="ageSelectionBox"
                  type="button"
                  onClick={() => {
                      setSelectedAgeGroupForContext('JONGEREN');
                      history.push("/signup");
                  }}
                >
                    JONGEREN
                </button>
                <button className="ageSelectionBox"
                   type="button"
                   onClick={() => {
                       setSelectedAgeGroupForContext('VOLWASSENEN');
                       history.push("/signup");
                   }}
                >
                    VOLWASSENEN
                </button>
                <button className="ageSelectionBox"
                   type="button"
                   onClick={() => {
                       setSelectedAgeGroupForContext('OUDEREN');
                       history.push("/signup");
                   }}
                >
                    OUDEREN
                </button>
            </div>
        </div>
      </>
    )
}

export default Homepage;

