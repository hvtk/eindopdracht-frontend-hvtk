import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import ImageUploading from "react-images-uploading";
import axios from "axios";

import './Profilepage.css';

import {AuthContext} from "../../context/AuthenticationContext";

import ButtonB from "../../components/ButtonB";

function Profilepage() {

    const { user } = useContext(AuthContext);
    console.log(user);

    const {handleSubmit, register} = useForm();

    const [images, setImages] = useState([]);
    const maxNumber = 69;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    async function onFormSubmitFile(data) {
        console.log(data);
        try {

            const result = await axios.post(`https://localhost:8443/users/signup`,{
                onImageUpload:data.imageList,
            })
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
                <ButtonB
                    submit >
                    Voorlezen
                </ButtonB>
                <ButtonB
                    submit >
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
            <div className="layoutInputBorderBottom" id="border-bottom">
              <h4> GEEF NIET OP! JE BENT AL ZOVER GEKOMEN. </h4>
            </div>
            <div id="border-left"></div>
            <div className="profileBox" id="profile-box">
              <h3> Profielpagina </h3>
              <h4> Profielfoto: </h4>
                <div onSubmit={handleSubmit(onFormSubmitFile)} >
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
                                        <img className="upload-image-size" src={image.data_url} alt=""/>
                                        <div>
                                            <button onClick={() => onImageUpdate(index)}> Update </button>
                                            <button onClick={() => onImageRemove(index)}> Remove </button>
                                            <button type="Submit"> Safe file to database </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
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