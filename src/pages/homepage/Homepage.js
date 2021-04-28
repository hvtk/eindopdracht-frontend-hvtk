import React from "react";

import './Homepage.css';
import './assets/icons/callicon.svg'
//import call from './assets/icons/callicon.svg';
//import { default as call} from './assets/icons/callicon.svg';
import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";


function Homepage() {

    return (

        <div >
            <PhoneNumbers
               image="./assets/icons/callicon.svg"
               title="112"
               description="bij levensbedrijgende situaties"
            />
        </div>
    )
}

/*function Homepage() {

    return (
        <div>
            <call />
        </div>
    )
}*/


export default Homepage;

