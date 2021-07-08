import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import { useHistory, Link } from 'react-router-dom'
import axios from "axios";

import './SignIn.css';

import { AuthContext } from "../../context/AuthenticationContext";
import {AgeGroupContext} from "../../context/SearchAgeGroupContext";

import ButtonB from "../../components/ButtonB";

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
        <div className="signInLayout">
          <div className="layoutInputBorderTop" id="border-top" onSubmit={handleSubmit(onSubmitReadout)}>
              <ButtonB
                  submit>
                  Voorlezen
              </ButtonB>
              <ButtonB
                  submit>
                  Taalkeuze
              </ButtonB>
          </div>
          <div id="border-right"></div>
          <div className="layoutInputBorderBottom" id="border-bottom">
              <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
          </div>
          <div id="border-left"></div>

          <form className="signInBox" id="signIn-box" onSubmit={handleSubmit(onFormSubmit)}>

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
            <ButtonB
                submit>
                Inloggen
            </ButtonB>
            <h5>Heb je je nog niet geregistreerd? <Link to="/signup">Registreer</Link> je dan eerst.</h5>
          </form>
          <div className="pictureSignIn" id="picture-signIn"></div>
        </div>
      </>
    )
}

export default SignIn;
