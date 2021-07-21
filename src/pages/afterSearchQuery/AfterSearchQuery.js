import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import axios from "axios";

import './AfterSearchQuery.css';

import Button from "../../components/buttons/Button";
import ButtonB from "../../components/buttons/ButtonB";
import BorderBottom from "../../components/bordersPageText/BorderBottom";
import BackToHome from "../../components/BackToHome";
import TheSelectedPage from "../../components/TheSelectedPage";
import GoToProfilePage from "../../components/GoToProfilePage";
import LogOut from "../../components/LogOut";

import imageSearchPostalcodeAge from '../../assets/images/afterSearchQuery/ImageSeachPostalcodeAge.svg';

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

        <div className="after-search-layout">
            <div className="layout-input-border-top" id="border-top" onSubmit={handleSubmit(onFormSubmitReadout)}>
                <ButtonB>
                    Voorlezen
                </ButtonB>
                <ButtonB>
                    Taalkeuze
                </ButtonB>
            </div>
            <div id="border-right"></div>
            <BorderBottom></BorderBottom>
            <div id="border-left"></div>
            <div className="search-problems-left-elderly" id="search-problems-left" onSubmit={handleSubmit(onFormSubmit)}>
              <p>
                <Button>
                    Zoeken
                </Button>
              </p>
                <h4> Info over... </h4>
              <p>
                <Button>
                    Aandoeningen A - Z
                </Button>
              </p>
              <p>
                <Button>
                    Problemen thuis
                </Button>
              </p>
              <p>
                <Button>
                    Seksualiteit
                </Button>
              </p>
              <p>
                <Button>
                    Eenzaam
                </Button>
              </p>
              <p>
                <Button>
                    Persoonlijke verhalen
                </Button>
              </p>
            </div>
            <div className="web-address-box" id="web-address-box-grid">
            </div>
            <div className="search-option-web-query" id="search-option-web-query-grid">
                {data.map((aidWorker) => {
                    return (
                        <div>
                            <a href={aidWorker.aidWorkerWebbAddress}>{aidWorker.aidWorkerName}</a>
                        </div>)
                })}
            </div>
            <div className="postal-code-box" id="postal-code-box-grid">
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
            <div className="age-box" id="age-box-grid">
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
            <div className="picture-search-web-small" id="picture-search-web-small-grid"><img className="image-search-postalcode-age" src={imageSearchPostalcodeAge} alt=""/> </div>
            <BackToHome></BackToHome>
            <TheSelectedPage>
                ZOEK-PAGINA
            </TheSelectedPage>
            <GoToProfilePage></GoToProfilePage>
            <LogOut></LogOut>
        </div>
    )
}

export default AfterSearchQuery;

