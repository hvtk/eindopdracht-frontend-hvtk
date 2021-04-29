import React from "react";

import './Homepage.css';
import {useForm} from "react-hook-form";
//import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";
//import phoneIcon from '../../assets/icons/callicon.svg'

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
                 <div id="border-top__item">
                     <h4> H </h4>
                 </div>
            </div>
            <div id="border-right"></div>
            <div className="layoutInputBorderBottom" id="border-bottom">
                <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>
            <div id="border-left"></div>
            <div className="pictureHomepage" id="picture-homepage"></div>
            <div className="phoneNumbers" id="phone-numbers"></div>
            <div className="searchAge" id="search-age"></div>
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

