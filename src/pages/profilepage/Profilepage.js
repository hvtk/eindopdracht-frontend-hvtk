import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import ImageUploading from "react-images-uploading";
import axios from "axios";

import './Profilepage.css';

import {AuthContext} from "../../context/AuthenticationContext";

import ButtonB from "../../components/buttons/ButtonB";
import BorderBottom from "../../components/bordersPageText/BorderBottom";

function Profilepage() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const {handleSubmit, register} = useForm();

    // const [images, setImages] = useState([]);
    // const maxNumber = 69;
    // const onChange = (imageList, addUpdateIndex) => {
    //     console.log(imageList, addUpdateIndex);
    //     setImages(imageList);
    // };

    async function onFormSubmitFile(data) {
        console.log(data);
        try {

            // Stel multipart form data samen
            const formData = new FormData();
            formData.append('file', data.avatar[0])

            // Configureer de headers voor de POST request
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${user.jwt}` // Voeg JWT toe, dit geeft toegang tot het uploaden van de foto
                }
            }

            // Stuur multipart form
            const result = await axios.post(`https://localhost:8443/users/${user.username}/avatar`, formData, config);

            // const result = await axios.post(`https://localhost:8443/users/${user.username}/avatar`,{
            //     file:data.avatar[0],
            // })
        } catch(e) {
            console.error(e)
        }
    }



    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (
        <>
          <div className="profilePageLayout">
            <div className="layoutInputBorderTop" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
              {/*<div className="layoutInputBorderBottom" id="border-bottom">
              <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>*/}
            <BorderBottom></BorderBottom>
            <div id="border-left"></div>
            <div className="profileBox" id="profile-box">
              <h3> Profielpagina </h3>
              <h4> Profielfoto: </h4>
                <div>
                    {/*Formulier om avatar te uploaden, en om afbeelding te tonen*/}
                    <img src={`https://localhost:8443/users/${user.username}/avatar`} />
                    <form onSubmit={handleSubmit(onFormSubmitFile)} >
                    <input type="file" name="avatar" {...register("avatar")}/>
                        Afbeelding mag niet groter zijn dan 1 MB. Afbeelding moet van type JPG zijn.

                    <input type="submit" value="Sla op"/>

                    {/*<ImageUploading*/}
                    {/*    multiple*/}
                    {/*    value={images}*/}
                    {/*    onChange={onChange}*/}
                    {/*    maxNumber={maxNumber}*/}
                    {/*    dataURLKey="data_url"*/}
                    {/*>*/}
                    {/*    {({*/}
                    {/*          imageList,*/}
                    {/*          onImageUpload,*/}
                    {/*          onImageRemoveAll,*/}
                    {/*          onImageUpdate,*/}
                    {/*          onImageRemove,*/}
                    {/*          isDragging,*/}
                    {/*          dragProps*/}
                    {/*      }) => (*/}
                    {/*        <div>*/}
                    {/*            <button*/}
                    {/*                style={isDragging ? {color: "red" } : null}*/}
                    {/*                onClick={onImageUpload}*/}
                    {/*                {...dragProps}*/}
                    {/*            >*/}
                    {/*                Click or Drop here*/}
                    {/*            </button>*/}
                    {/*            &nbsp;*/}
                    {/*            <button onClick={onImageRemoveAll}> Remove all Images </button>*/}
                    {/*            {imageList.map((image, index) => (*/}
                    {/*                <div key={index}>*/}
                    {/*                    <img className="upload-image-size" src={image.data_url} alt=""/>*/}
                    {/*                    <div>*/}
                    {/*                        <button onClick={() => onImageUpdate(index)}> Update </button>*/}
                    {/*                        <button onClick={() => onImageRemove(index)}> Remove </button>*/}
                    {/*                        <button type="Submit"> Save file to database </button>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            ))}*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</ImageUploading>*/}
                    </form>
                </div>
              <p> <h4> Gebruikersnaam: </h4> {user && user.username} </p>
              <p> <h4> Postcode: </h4> {user && user.postalCode} </p>
              <p> <h4> Leeftijd: </h4> {user && user.age} </p>
              <h5>Terug naar de <Link to="/">Startpagina</Link> </h5>
            </div>
            <div className="pictureProfileBackground" id="picture-profile-background"> </div>
          </div>
        </>

    )
}

export default Profilepage;