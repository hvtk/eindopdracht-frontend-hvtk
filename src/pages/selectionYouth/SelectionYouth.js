import React from "react";
import {useForm} from "react-hook-form";

import './SelectionYouth.css';

import Button from "../../components/buttons/Button";
import ButtonB from "../../components/buttons/ButtonB";
import BackToHome from "../../components/BackToHome";
import TheSelectedPage from "../../components/TheSelectedPage";
import GoToProfilePage from "../../components/GoToProfilePage";
import LogOut from "../../components/LogOut";
import BorderBottom from "../../components/bordersPageText/BorderBottom";

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

        <div className="selection-youth-layout">
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
                 <span className="position-text-in-box">  <img src={phoneIcon} alt=""/>  112 <br/>
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
            <div className="picture-youth-small" id="picture-youth-small-grid"> <img className="imageYouth" src={imageYouth} alt=""/> </div>
            <div className="search-problems-right" id="search-problems-right-grid" onSubmit={handleSubmit(onFormSubmit)}>
              <p>
                <Button>
                    Zoeken
                </Button>
              </p>
                <h4> Info over... </h4>
              <p>
                <Button>
                    Aandoeningen A - Z
                </Button>
              </p>
              <p>
                <Button>
                    Testen
                </Button>
              </p>
              <p>
                <Button>
                    Depressief
                </Button>
              </p>
              <p>
                <Button>
                    Eenzaam
                </Button>
              </p>
              <p>
                <Button>
                    Burn-out
                </Button>
              </p>
              <p>
                <Button>
                    Persoonlijke verhalen
                </Button>
              </p>
              <p>
                <Button>
                    Zelfstandig wonen, hoe?
                </Button>
              </p>
            </div>
            <BackToHome></BackToHome>
            <TheSelectedPage>
                JONGEREN-PAGINA
            </TheSelectedPage>
            <GoToProfilePage></GoToProfilePage>
            <LogOut></LogOut>
        </div>
    )
}

export default SelectionYouth;
