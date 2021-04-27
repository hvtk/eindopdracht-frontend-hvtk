import React from "react";

import './Homepage.css';
import { ReactComponent as call} from './assets/icons/callicon.svg';
//import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";


/*function Homepage() {

    return (
        <>
             <div >
                <p> Dit is de startpagina! </p>
                <call />
                <PhoneNumbers
                    image={call}
                    title="112"
                    description="bij levensbedrijgende situaties"
                    />
             </div>
        </>
    )
} */

function Homepage() {

    return (
        <div>
            <call />
        </div>
    )
}


export default Homepage;

