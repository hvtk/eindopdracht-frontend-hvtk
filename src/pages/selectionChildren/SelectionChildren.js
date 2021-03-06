import React from "react";
import {useForm} from "react-hook-form";

import './SelectionChildren.css';

import ButtonB from "../../components/buttons/ButtonB";
import BackToHome from "../../components/BackToHome";
import TheSelectedPage from "../../components/TheSelectedPage";
import GoToProfilePage from "../../components/GoToProfilePage";
import LogOut from "../../components/LogOut";
import BorderBottom from "../../components/bordersPageText/BorderBottom";


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

        <div className="children-layout">
            <div className="layout-input-border-top" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
            <BorderBottom></BorderBottom>
            <div id="border-left"></div>
            <div className="phone-numbers" id="phone-numbers-grid">
                 <div className="position-text-in-box-phone-numbers">
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
            <div id="picture-children-background-grid" className="picture-children-background">
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
            <BackToHome></BackToHome>
            <TheSelectedPage>
                KINDEREN-PAGINA
            </TheSelectedPage>
            <GoToProfilePage></GoToProfilePage>
            <LogOut></LogOut>
        </div>
    )
}

export default SelectionChildren;

