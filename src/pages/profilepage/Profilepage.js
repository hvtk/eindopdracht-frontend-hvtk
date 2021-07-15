import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

import './Profilepage.css';

import {AuthContext} from "../../context/AuthenticationContext";

import ButtonB from "../../components/buttons/ButtonB";
import BorderBottom from "../../components/bordersPageText/BorderBottom";

function Profilepage() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const {handleSubmit, register} = useForm();

    async function onFormSubmitFile(data) {
        console.log(data);
        try {

            // Stel multipart form data samen
            const formData = new FormData();
            formData.append('file', data.avatar[0])

            // Configureer de headers voor de POST request
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.jwt}` // Voeg JWT toe, dit geeft toegang tot het uploaden van de foto
                }
            }

            // Stuur multipart form
            const result = await axios.post(`https://localhost:8443/users/${user.username}/avatar`, formData, config);

        } catch(e) {
            console.error(e)
        }
    }

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
        <>
          <div className="profilePageLayout">
            <div className="layoutInputBorderTop" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
              {/*<div className="layoutInputBorderBottom" id="border-bottom">
              <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>*/}
            <BorderBottom></BorderBottom>
            <div id="border-left"></div>
            <div className="profileBox" id="profile-box">
              <h3> Profielpagina </h3>
              <h4> Profielfoto: </h4>
                <div className="file-upload">
                    {/*Formulier om avatar te uploaden, en om afbeelding te tonen*/}
                    <img className="upload-image-size" src={`https://localhost:8443/users/${user.username}/avatar`} />
                    <form className="file-upload" onSubmit={handleSubmit(onFormSubmitFile)} >
                      <input
                          type="file"
                          name="avatar"
                          {...register("avatar")}/>
                      <p> Image max. 1 MB van type JPG </p>
                      <ButtonB>
                          Sla op
                      </ButtonB>
                    </form>
                </div>
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