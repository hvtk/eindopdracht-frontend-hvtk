import React from "react";

import axios from "axios";

import {useForm} from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import './SignIn.css';


// .importeer axios
// .start axios
// .async function
// .try catch block
//. in de try: axios post request naar het endpoint: https://localhost:8443/login?
//. error state en loading state aanmaken en communiceren aan de gebruiker
//. het postrequest bevat het endpoint en het data object met username and password zie code springboot
//. wat we terug krijgen is een JWT token die in de local storage moet komen
//. gebruiker doorsturen naar de profielpagina
//. de gebruikersdata moet in de context geplaatst worden zodat alle componenten erbij kunnen
//. importeer useContext en authContext
//. destructure daar de login functie uit.

function SignIn() {
    const {handleSubmit, register}= useForm();
    const history = useHistory();


    async function onFormSubmit(data) {
        try {
            const result = await axios.post('https://localhost:8443/login?',{
                username:data.username,
                password: data.password,
                age: data.age,
                postalCode: data.postalCode,
            })

            console.log(result.data); //. de positie van de data die we uit de post willen zien

            localStorage.setItem('hoeishetmogelijk', result.data) //positie JWT token in de pos

            history.push('/adults'); // de gekozen leeftijdsgroep


        } catch(e) {
            console.error(e)
        }
      console.log(data);
    }

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
      <>
        <div className="signInLayout">
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
            <button
                type="submit" >
                Inloggen
            </button>
            <h5>Heb je je nog niet geregistreerd? <Link to="/signup">Registreer</Link> je dan eerst.</h5>
          </form>
          <div className="pictureChildrenBackground" id="picture-children-background"></div>
        </div>
      </>
    )
}

export default SignIn;
