import React from "react";

import {useForm} from "react-hook-form";

//import '/SignIn.css';


function SignIn() {
    const {handleSubmit, register}= useForm();


    function onFormSubmit(data) {
      console.log(data);
    }

    return (
        <>
        <div>
            Dit is het inlogscherm!
        </div>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <h4> gebruikersnaam </h4>

            <label htmlFor="gebruikersnaam">
                <input
                type="text"
                name="gebruikersnaam"
                id="gebruikersnaam"
                placeholder="gebruikersnaam"
                {...register("gebruikersnaam")}
                />
            </label>

        </form>
    </>
    )
}

export default SignIn;
