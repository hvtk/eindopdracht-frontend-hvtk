import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import './SelectionElderly.css';

import Button from "../../components/buttons/Button";
import ButtonB from "../../components/buttons/ButtonB";

import elderly from '../../assets/images/selectionElderly/ImageElderly.svg';
import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";
import BackToHome from "../../components/BackToHome";
import TheSelectedPage from "../../components/TheSelectedPage";
import GoToProfilePage from "../../components/GoToProfilePage";
import LogOut from "../../components/LogOut";



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
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
            <div className="layoutInputBorderBottom" id="border-bottom">
                <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>
            <div id="border-left"></div>
            <div className="pictureElderly" id="picture-elderly"> <img className="imageElderly" src={elderly} alt=""/></div>
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
                    <img src={phoneIcon} alt=""/> 030-3400600 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/> <br/>
                    <span> ouderen infolijn (van seniorenorganisatie KBO-PCOB)</span>
                 </span>
            </div>
            <div className="searchProblemsRight" id="search-problems-right" onSubmit={handleSubmit(onFormSubmit)}>
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
                    Eenzaam
                </Button>
              </p>
              <p>
                <Button>
                    Dementie
                </Button>
              </p>
              <p>
                <Button>
                    Depressief
                </Button>
              </p>
              <p>
                <Button>
                    Angstig
                </Button>
              </p>
            </div>
            {/* <div id="back-to-home" className="backToHome"> <Link to="/"> Home </Link> </div>
            <div id="selected-page" className="selectedPage"> OUDEREN-PAGINA </div>
            <div id="go-to-profile-page" className="goToProfilePage"> <Link to="/profile"> Ga naar de profielpagina </Link> </div>
            <div id="log-out" className="logOut"> Uit loggen </div> */}
            <BackToHome></BackToHome>
            <TheSelectedPage>
                OUDEREN-PAGINA
            </TheSelectedPage>
            <GoToProfilePage></GoToProfilePage>
            <LogOut></LogOut>
        </div>
    )
}



export default SelectionElderly;

