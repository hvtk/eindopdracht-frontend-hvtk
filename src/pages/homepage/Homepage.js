import React from "react";

import './Homepage.css';
import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";
import phoneIcon from '../../assets/icons/callicon.svg'

function Homepage() {

    return (
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
}


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

