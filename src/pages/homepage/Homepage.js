import React from "react";

import './Homepage.css';
import { ReactComponent as call} from "./assets/icons/telephoneicon.svg";
import PhoneNumbers from "../../components/pageBasics/PhoneNumbers";


function Homepage() {

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
}


export default Homepage;

