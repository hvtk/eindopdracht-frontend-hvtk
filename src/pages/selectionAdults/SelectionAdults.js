import React from "react";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";

import './SelectionAdults.css';

import Button from "../../components/buttons/Button";
import ButtonB from "../../components/buttons/ButtonB";
import ButtonD from "../../components/buttons/ButtonD";
import BackToHome from "../../components/BackToHome";
import TheSelectedPage from "../../components/TheSelectedPage";
import GoToProfilePage from "../../components/GoToProfilePage";
import LogOut from "../../components/LogOut";

import phoneIcon from "../../assets/icons/callicon.svg";
import whatsappIcon from "../../assets/icons/whattsappicon.svg";
import chatIcon from "../../assets/icons/chaticon.svg";

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
     <>
        <div className="selectionAdultsLayout">
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

            <div className="phoneNumbers" id="phone-numbers">
                <span className="positionTextInBoxPhoneNumbers">
                    <img src={phoneIcon} alt=""/>  112 <br/>
                    <span> bij levensbedrijgende situaties</span>
                    <br/>
                    <img src={phoneIcon} alt=""/> 113 <img src={whatsappIcon} alt=""/> <img src={chatIcon} alt=""/>
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
                   <ButtonD
                      clickHandler={() => {
                          history.push("/search/aidWorkers");
                      }}
                      >
                      Burn-out
                   </ButtonD>
                </p>
                <p>
                   <Button>
                      Verslaving
                   </Button>
                </p>
                <p>
                   <Button>
                      Dementie
                   </Button>
                </p>
            </div>
            {/* <div id="back-to-home" className="backToHome"> <Link to="/"> Home </Link> </div> */}
            <BackToHome></BackToHome>
            {/* <div id="selected-page" className="selectedPage"> VOLWASSENEN-PAGINA </div> */}
            <TheSelectedPage>
                VOLWASSENEN-PAGINA
            </TheSelectedPage>
            {/* <div id="go-to-profile-page" className="goToProfilePage"> <Link to="/profile"> Ga naar de profielpagina </Link> </div> */}
            <GoToProfilePage></GoToProfilePage>
            {/* <div id="log-out" className="logOut"> Uit loggen </div> */}
            <LogOut></LogOut>
        </div>
     </>
    )
}

export default SelectionAdults;
