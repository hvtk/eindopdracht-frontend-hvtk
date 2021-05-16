import React from "react";

import './Homepage.css';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
//import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";
import phoneIcon from '../../assets/icons/callicon.svg'
import chatIcon from'../../assets/icons/chaticon.svg'
import whatsappIcon from '../../assets/icons/whattsappicon.svg'


function Homepage() {

    const {handleSubmit}= useForm();


    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

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

                <p className="ageSelectionBox"> <Link to="/signup">KINDEREN</Link> </p>
                <p className="ageSelectionBox"> <Link to="/signup">JONGEREN </Link> </p>
                <p className="ageSelectionBox"> <Link to="/signup">VOLWASSENEN</Link> </p>
                <p className="ageSelectionBox"> <Link to="/signup">OUDEREN</Link> </p>

            </div>
        </div>
    )
}

/*   return (
      <>
        <section className="containerHomepage">
          <form className="containerNumbers">

             <img src={phoneIcon} /> <h4> 112 </h4>
              <h4> bij levensbedrijgende situaties </h4>

          </form>

          <form className="containerSearchAge" >
           <h3> dit is het keuze menu </h3>
          </form>
        </section>
      </>
    )
}*/


/*return (
    <>
        <section className="containerHomepage">
            <form className="containerNumbers">

                <PhoneNumbers
                    image={phoneIcon}
                    title="112"
                    description="bij levensbedrijgende situaties"
                />

            </form>

            <form className="containerSearchAge" >
                <h3> dit is het keuze menu </h3>
            </form>
        </section>
    </>
)
}*/


export default Homepage;

