import React from "react";

import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

import './SignIn.css';


function SignIn() {
    const {handleSubmit, register}= useForm();


    function onFormSubmit(data) {
      console.log(data);
    }

    return (
      <>
        <form className="containerBasicLeft" onSubmit={handleSubmit(onFormSubmit)}>

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

      </>
    )
}

export default SignIn;
