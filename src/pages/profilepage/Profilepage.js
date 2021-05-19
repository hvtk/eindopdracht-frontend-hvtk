import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthenticationContext";

import './Profilepage.css';
import axios from "axios";

// in invoervelden, met uitzondering van de foto worden vanuit de context gevuld!. Moet nog geprogrammeerd worden.

function Profilepage() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const {handleSubmit, register} = useForm();

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
        <>
          <div className="profilePageLayout">
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
              <p> <h4> Gebruikersnaam: </h4> {user && user.username} </p>
              <p> <h4> Postcode: </h4> {user && user.postalCode} </p>
              <p> <h4> Leeftijd: </h4> {user && user.age} </p>
              <h5>Terug naar de <Link to="/">Startpagina</Link> </h5>
            </div>
            <div className="pictureProfileBackground" id="picture-profile-background"> </div>
          </div>
        </>

    )
}

export default Profilepage;