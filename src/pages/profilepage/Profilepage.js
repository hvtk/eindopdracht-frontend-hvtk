import React, {useContext, useState} from "react";
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

    const [uploadedFile, setUploadFile]= useState(null);

    async function onFormSubmitFile(data) {
        console.log(data);
        try {

            const formData = new FormData();
            formData.append('file', data.avatar[0])

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.jwt}`
                }
            }

            const result = await axios.post(`https://localhost:8443/users/${user.username}/avatar`, formData, config);

        } catch(e) {
            console.error(e)
        }
    }

    async function fetchUploadFile() {
        try {
            const result = await axios.get(`https://localhost:8443/users/${user.username}/avatar`);
            setUploadFile(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
        <>
          <div className="profile-page-layout">
            <div className="layout-input-border-top" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
            <BorderBottom></BorderBottom>
            <div id="border-left"></div>
            <div className="profile-box" id="profile-box-grid">
              <h3> Profielpagina </h3>
              <h4> Profielfoto: </h4>
                <div className="file-upload">
                    {/*} <img className="upload-image-size" src={`https://localhost:8443/users/${user.username}/avatar`} />*/}
                    <form className="file-upload" onSubmit={handleSubmit(onFormSubmitFile)} >
                      <input
                          type="file"
                          name="avatar"
                          {...register("avatar")}/>
                      <p> Image max. 1 MB van type JPG </p>
                      <ButtonB>
                          Sla op
                      </ButtonB>
                        {uploadedFile &&
                            <div>
                                {uploadedFile.name}
                            </div>
                        }
                        <button className="upload-image-size"
                            type="button"
                            onClick={fetchUploadFile}
                            >
                            Haal file op
                        </button>
                    </form>
                </div>
              <p> <h4> Gebruikersnaam: </h4> {user && user.username} </p>
              <p> <h4> Postcode: </h4> {user && user.postalCode} </p>
              <p> <h4> Leeftijd: </h4> {user && user.age} </p>
              <h5>Terug naar de <Link to="/">Startpagina</Link> </h5>
            </div>
            <div className="picture-profile-background" id="picture-profile-background-grid"> </div>
          </div>
        </>
    )
}

export default Profilepage;