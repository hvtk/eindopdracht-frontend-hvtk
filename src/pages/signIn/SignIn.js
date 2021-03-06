import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import { useHistory, Link } from 'react-router-dom'
import axios from "axios";

import './SignIn.css';

import { AuthContext } from "../../context/AuthenticationContext";
import {AgeGroupContext} from "../../context/SearchAgeGroupContext";

import ButtonB from "../../components/buttons/ButtonB";
import BorderBottom from "../../components/bordersPageText/BorderBottom";

function SignIn() {
    const { login } = useContext(AuthContext);
    const history = useHistory();
    const {handleSubmit, register}= useForm();
    const {selectedAgeGroupForContext, setSelectedAgeGroupForContext} = useContext(AgeGroupContext);

    async function onFormSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('https://localhost:8443/authenticate', data);

            await login(result.data.jwt);

            if (selectedAgeGroupForContext === 'KINDEREN'){
                return history.push("/children")
            }
            if (selectedAgeGroupForContext === 'JONGEREN'){
                return history.push("/youth")
            }
            if (selectedAgeGroupForContext === 'VOLWASSENEN'){
                return history.push("/adults")
            }
            if (selectedAgeGroupForContext === 'OUDEREN'){
                return history.push("/elderly")
            }
        } catch(e) {
          console.error(e)
        }
        console.log(data);
    }

    function onSubmitReadout(data) {
        console.log(data);
    }

    return (
      <>
        <div className="sign-in-layout">
          <div className="layout-input-border-top" id="border-top" onSubmit={handleSubmit(onSubmitReadout)}>
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

          <form className="sign-in-box" id="sign-in-box-grid" onSubmit={handleSubmit(onFormSubmit)}>

            <h3> Inloggen </h3>

            <h4> Gebruikersnaam: </h4>

            <label htmlFor="username-field">
                <input
                type="text"
                name="username"
                id="username-field"
                placeholder="gebruikersnaam"
                {...register("username")}
                />
            </label>

            <h4> Wachtwoord: </h4>

            <label htmlFor="password-field">
                <input
                 type="password"
                 name="password"
                 id="password-field"
                 placeholder="wachtwoord"
                 {...register("password")}
                />
            </label>
            <br/>
            <ButtonB>
                Inloggen
            </ButtonB>
            <h5>Heb je je nog niet geregistreerd? <Link to="/signup">Registreer</Link> je dan eerst.</h5>
          </form>
          <div className="picture-sign-in" id="picture-sign-in-grid"></div>
        </div>
      </>
    )
}

export default SignIn;
