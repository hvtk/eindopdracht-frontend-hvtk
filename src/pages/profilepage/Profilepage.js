import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";

import './Profilepage.css';

// in invoervelden, met uitzondering van de foto worden vanuit de context gevuld!. Moet nog geprogrammeerd worden.

function Profilepage() {

    const {handleSubmit, register}= useForm();

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
        <>
          <div className="signUpLayout">
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
            <div className="profileBox" id="profile-box">
              <h3> Profielpagina </h3>
              <h4> Gegevens </h4>

              <h4> Profielfoto: </h4>

              <label htmlFor="profileImage-field">
                 <input
                    type="image"
                    name="profileImage"
                    id="profileImage-field"
                    {...register("profileImage")}
                 />
              </label>

              <p> <h4> Gebruikersnaam: </h4> ............ </p>

              <p> <h4> Wachtwoord: </h4> ............ </p>

              <p> <h4> Postcode: </h4> ............ </p>

              <p> <h4> Leeftijd: </h4> ............ </p>

              <h5>Terug naar de <Link to="/">Homepagina</Link> </h5>
            </div>
            <div className="pictureChildrenBackground" id="picture-children-background"></div>
          </div>
        </>

    )
}

export default Profilepage;