import React from "react";
import {useForm} from "react-hook-form";

import './SelectionChildren.css';
import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";
import adhdcartoon from "../../assets/images/selectionChildren/ADHD size.svg";
import trauma from "../../assets/images/selectionChildren/Trauma size.svg";
import boos from "../../assets/images/selectionChildren/Upset.svg";
import stop from "../../assets/images/selectionChildren/Stop.svg";
import gedrag from "../../assets/images/selectionChildren/Gedrags-problemen size.svg";
import Arguingparents from "../../assets/images/selectionChildren/Unsafe-home-situation.svg";
import Violence from "../../assets/images/selectionChildren/Violence.svg";
import Autisme from "../../assets/images/selectionChildren/Autisme-coaching size.svg";
import emotionscartoon from "../../assets/images/selectionChildren/Emotionele-problemen size.svg";
import emotions from "../../assets/images/selectionChildren/Emotional problems.svg";
import Lonely from "../../assets/images/selectionChildren/Lonely2.svg";

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
            <div className="phoneNumbers" id="phone-numbers">
                 <div className="positionTextInBox">
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
                    <img src={phoneIcon} alt=""/> 0800-2432 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> kinder telefoon </span>
                    <br/>
                </div>
            </div>
            <div id="picture-children-background" className="pictureChildrenBackground">
                    <p> <img id="imageSize1" src={adhdcartoon} alt="" /> <br/> ADHD </p>
                    <p> <img id="imageSize1" src={trauma} alt="" /> <br/> Trauma/angstig </p>
                    <p> <img id="imageSize2" src={boos} alt="" /> <br/>  Boos </p>
                    <p> <img id="imageSize2" src={stop} alt="" /> <br/>   Stop </p>
                    <p> <img id="imageSize2" src={gedrag} alt="" /> <br/> Gedrags problemen </p>
                    <p> <img id="imageSize2" src={Arguingparents} alt="" /> <br/> Ruzie ouders </p>
                    <p> <img id="imageSize2" src={Violence} alt="" /> <br/> Mishandeling </p>
                    <p> <img id="imageSize2" src={Autisme} alt="" /> <br/> Autisme </p>
                    <p> <img id="imageSize1" src={emotionscartoon} alt="" /> <br/> Emotionele problemen </p>
                    <p> <img id="imageSize1" src={emotions} alt="" /> <br/> Emotionele problemen </p>
                    <p> <img id="imageSize2" src={Lonely} alt="" /> <br/> Eenzaam </p>
            </div>
            { /* <div id="back-to-home" className="backToHome">
                <button className="ageSelectionBox"
                        type="button"
                        onClick={() =>
                            history.push("/signup");
                        }
                >
                    HOMEPAGE
                </button>
            </div>
            <div id="selected-page" className="selectedPage" >
                <button className="ageSelectionBox"
                        type="button"
                        onClick={() => {
                            setSelectedAgeGroupForContext('KINDEREN');
                            history.push("/signup");
                        }}
                >
                    KINDEREN
                </button>

            </div>*/}
        </div>
    )
}

export default SelectionChildren;

