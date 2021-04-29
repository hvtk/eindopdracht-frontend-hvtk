import React from "react";

import {useForm} from "react-hook-form";
import { Link } from "react-router-dom";

//import './components/pageBasics/ColorBoxes.css';

import './SignUp.css';


function SignUp() {
    const {handleSubmit, register}= useForm();

    function onFormSubmit(data) {
        console.log(data);
    }

    return (
      <>
          <div className="signUpLayout">
            <form className="signUp-box" id="signUpBox" onSubmit={handleSubmit(onFormSubmit)}>

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
              <button
                type="submit" >
                Registreren
              </button>
             <h5>Heb je je al geregistreerd? Je kunt <Link to="/signin">hier</Link> inloggen.</h5>
            </form>
          </div>
      </>
    );
}



export default SignUp;

