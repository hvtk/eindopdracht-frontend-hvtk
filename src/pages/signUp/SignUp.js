import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import { Link, useHistory} from "react-router-dom";
import axios from "axios";

import './SignUp.css';

import ButtonB from "../../components/buttons/ButtonB";

import {AgeGroupContext} from "../../context/SearchAgeGroupContext";

function SignUp() {
    const {handleSubmit, register}= useForm();
    const [authenticateSucces, toggleAuthenticateSucces] = useState(false);
    const history = useHistory();
    const {selectedAgeGroupForContext, setSelectedAgeGroupForContext} = useContext(AgeGroupContext);
    console.log(selectedAgeGroupForContext)

    async function onFormSubmit(data) {
        console.log(data);
        try {

            const result = await axios.post(`https://localhost:8443/users/signup`,{
                username:data.username,
                password: data.password,
                age: data.age,
                postalCode: data.postalCode,
            })

            setTimeout(() => {
                history.push('/signin');
            }, 2000)

        } catch(e) {
            console.error(e)
        }
    }

    function onSubmitReadout(data) {
        console.log(data);
    }

    return (
      <>
          <div className="signUpLayout">
              <div className="layoutInputBorderTop" id="border-top" onSubmit={handleSubmit(onSubmitReadout)}>
                  <ButtonB>
                      Voorlezen
                  </ButtonB>
                  <ButtonB>
                      Taalkeuze
                  </ButtonB>
              </div>
              <div id="border-right"></div>
              <div className="layoutInputBorderBottom" id="border-bottom">
                  <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
              </div>
              <div id="border-left"></div>

                  <form className="signUpBox" id="signUp-box" onSubmit={handleSubmit(onFormSubmit)}>
                     <h3> registreren </h3>
                     <h4> Postcode: </h4>
                     <label htmlFor="postalCode-field">
                        <input
                          type="text"
                          name="postalCode"
                          id="postalCode-field"
                          placeholder="postcode"
                          {...register("postalCode")}
                         />
                     </label>
                     <h4> Leeftijd: </h4>
                     <label htmlFor="age-field">
                         <input
                           type="number"
                           name="age"
                           id="age-field"
                           placeholder="age"
                           {...register("age")}
                         />
                     </label>
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
                     <h4> Herhaal wachtwoord </h4>
                     <label htmlFor="repeatPassword-field">
                        <input
                          type="password"
                          name="repeatPassword"
                          id="repeatPassword-field"
                          placeholder="herhaal-wachtwoord"
                          {...register("repeatPassword")}
                         />
                     </label>
                     <br/>
                     <ButtonB>
                        Registreren
                     </ButtonB>

                         <h5>Heb je je al geregistreerd? Je kunt <Link to="/signin">hier</Link> inloggen.</h5>

                     {authenticateSucces === true && <p> Registreren is gelukt! Je wordt nu doorgestuurd naar de inlogpagina</p>}
                  </form>
              <div className="pictureSignUp" id="picture-signUp"></div>
          </div>
      </>
    );
}

export default SignUp;

