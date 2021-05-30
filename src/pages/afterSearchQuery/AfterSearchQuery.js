import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";

import './AfterSearchQuery.css';
import imageSearchPostalcodeAge from '../../assets/images/afterSearchQuery/ImageSeachPostalcodeAge.svg';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


function AfterSearchQuery() {

    const params = useParams()
    console.log(params)
    const {handleSubmit, register}= useForm()
    const [data, setData] = useState([])

    useEffect(()=> {
        const fetchData = async () => {
            try {
                const result = await axios.get(`https://localhost:8443/${params.endpoint}`);
                setData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData()
    }, [params.endpoint])
    console.log("DIT IS DATA", data)
    
    function onFormSubmit(data) {
        console.log(data);
    }

    function onFormSubmitReadout(data) {
        console.log(data);
    }

    return (

        <div className="afterSearchLayout">
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
            <div className="searchProblemsLeftElderly" id="search-problems-left" onSubmit={handleSubmit(onFormSubmit)}>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Zoeken
                </button>
              </p>
                <h4> Info over... </h4>
              <p>
                <button
                    type="submit"className="searchSelectionBox" >
                    Aandoeningen A - Z
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Problemen thuis
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Seksualiteit
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Eenzaam
                </button>
              </p>
              <p>
                <button
                    type="submit" className="searchSelectionBox">
                    Persoonlijke verhalen
                </button>
              </p>
            </div>
            <div className="webAddressBox" id="web-address-box">
            </div>
            <div className="searchOptionWebQuery" id="search-option-web-query">
                {data.map((aidWorker) => {
                    return (
                        <div>
                            <a href={aidWorker.aidWorkerWebbAddress}>{aidWorker.aidWorkerName}</a>
                        </div>)
                })}
            </div>
            <div className="postalCodeBox" id="postal-code-box">
                <label htmlFor="postalCode-field">
                    <input
                        type="text"
                        name="postalCode"
                        id="postalCode-field"
                        placeholder="postcode"
                        {...register("postalCode")}
                    />
                </label>
            </div>
            <div className="ageBox" id="age-box">
                <label htmlFor="ageBox-field">
                    <input
                        type="text"
                        name="age"
                        id="ageBox-field"
                        placeholder="leeftijd"
                        {...register("age")}
                    />
                </label>
            </div>
            <div className="pictureSearchWebSmall" id="picture-search-web-small"><img className="imageSearchPostalcodeAge" src={imageSearchPostalcodeAge} alt=""/> </div>
            <div id="back-to-home" className="backToHome"> <Link to="/"> Home </Link> </div>
            <div id="selected-page" className="selectedPage"> ZOEK-PAGINA </div>
            <div id="go-to-profile-page" className="goToProfilePage"> <Link to="/profile"> Ga naar de profielpagina </Link> </div>
            <div id="log-out" className="logOut"> Uit loggen </div>
        </div>
    )
}

export default AfterSearchQuery;

