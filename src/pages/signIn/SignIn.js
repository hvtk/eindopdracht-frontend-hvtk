import React from "react";

import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

import './SignIn.css';


function SignIn() {
    const {handleSubmit, register}= useForm();


    function onFormSubmit(data) {
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
