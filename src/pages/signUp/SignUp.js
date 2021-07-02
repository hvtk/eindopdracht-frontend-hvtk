import React, {useContext, useState} from "react";

import axios from "axios";

import ImageUploading from "react-images-uploading";

import {useForm} from "react-hook-form";
import { Link, useHistory} from "react-router-dom";
import './SignUp.css';
import {AgeGroupContext} from "../../context/SearchAgeGroupContext";

function SignUp() {
    const {handleSubmit, register}= useForm();
    const [authenticateSucces, toggleAuthenticateSucces] = useState(false);
    const history = useHistory();
    const {selectedAgeGroupForContext, setSelectedAgeGroupForContext} = useContext(AgeGroupContext);
    console.log(selectedAgeGroupForContext)

    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

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

                  <form className="signUpBox" id="signUp-box" onSubmit={handleSubmit(onFormSubmit)}>
                     <h3> registreren </h3>
                     <h4> Profielfoto: </h4>
                      <div>
                          <ImageUploading
                              multiple
                              value={images}
                              onChange={onChange}
                              maxNumber={maxNumber}
                              dataURLKey="data_url"
                          >
                              {({
                                  imageList,
                                  onImageUpload,
                                  onImageRemoveAll,
                                  onImageUpdate,
                                  onImageRemove,
                                  isDragging,
                                  dragProps
                              }) => (
                                  <div>
                                      <button
                                          style={isDragging ? {color: "red" } : null}
                                          onClick={onImageUpload}
                                          {...dragProps}
                                      >
                                        Click or Drop here
                                      </button>
                                      &nbsp;
                                      <button onClick={onImageRemoveAll}> Remove all Images </button>
                                      {imageList.map((image, index) => (
                                          <div key={index}>
                                              <img src={image.data_url} alt="" width="100" />
                                              <div>
                                                <button onClick={() => onImageUpdate(index)}> Update </button>
                                                <button onClick={() => onImageRemove(index)}> Remove </button>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              )}
                          </ImageUploading>
                      </div>
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

                     {authenticateSucces === true && <p> Registreren is gelukt! Je wordt nu doorgestuurd naar de inlogpagina</p>}
                  </form>
              <div className="pictureSignUp" id="picture-signUp"></div>
          </div>
      </>
    );
}

export default SignUp;

