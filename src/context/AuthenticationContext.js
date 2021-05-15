import React, {createContext, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import axios from "axios";

//Authenticatie
// 1.Bedenk welke data je in de context beschikbaar moet stellen en maak daar een raamwerkje voor:
//   (login, logout, state)
// 2.maak de state aan den de lege functies
// 3.plaats de state en de functies in een data object en geef die mee via de value={} prop
// 4.test de context door een component aan te melden en de context met useContext met alles = useContext(AuthContext)
// 5.Inlogfunctie: het proces van inloggen (JWT token in Local Storage zetten en gebruikersdata opslaan in de context)
// in de provider regelen.

// .AuthContext maken met createContext
// .ContextProvider functie component bouwen met daarin:
//      het echte AuthContext.Provider component
//      geef een dataopject mee via de value={}
//      stukje state etc.
//
//.wikkelen we de Provider om <App> heen in index.js

//Authenticatie

//.informatie die in de context moet staan (login, logout, state)
//.Stukje state maken voor de gebruikersdata

//.Uitleg functie: het proces van uitloggen (JWT token uit de local storage halen en context terughalen)
//.Implementeren dat bij refresh wordt gecheckt of er nog een JWT token is en zo ja: gebruikersdata ophalen.


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();
    // state voor de gebruikersdata
    const[authState, setAuthState] = useState( {
        user: null,
        status: 'pending',

        }
    )

    async function fetchUserData(jwtToken) {
        // we hebben de jwttoken nodig om daaruit de user ID te halen
        // hier gebruiken we de package jwt-decode voor
        const decoded = jwt_decode(jwtToken);
        const username = decoded.sub; //sub is de benaming van de id in de decoded jwttoken in de console

        // gebruikersinformatie ophalen
        try {
            const result = await axios.get(`https://localhost/8443/${username}/authorities"`, {  /* was userID in fake-server */
                headers: {
                   "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`, //ge encode jwttoken. de headliner komt uit de documentatie van de API
                }
            })

            // die data gebruiken om de context te vullen
            setAuthState({
                user: {
                    username: result.data.username,
                    age: result.data.age,
                    postalCode: result.data.postalCode,
                    jwt: result.data.jwt,
                },
            })
        } catch (e) {
            console.error(e);
        }
    }

    // wanneer de applicatie geladen wordt, willen we checken of er een token is, en als die er is maar er is geen gebruiker,
    // dan willen we alsnog de gebruikersdata ophalen.

    useEffect(() => {
        // is er een token?
        const token = localStorage.getItem('token');
        // is er geen user?
        if(token !== undefined && authState.user === null) {
            // haal dan de gebruikersdata op
            fetchUserData(token);

        } else {
            // zo nee, dan geen user, maar wel status op 'done'
            setAuthState({
                user: null,
                status: 'done',
            })
        }
    }, []);

    //inlogfunctie
    async function login(jwtToken) {
        // JWT token in de local storage zetten
        localStorage.setItem('token', jwtToken); //positie JWT token in de pos

        // gebruikersdata ophalen
        fetchUserData(jwtToken)
        // doorlinken naar de profielpagina
        history.push('/profile'); // de profielpagina
    }

    //uitlogfunctie
    function logout() {
        // leeghalen van de localstorage (met localestorage.clear
        localStorage.clear();
        //user in de context weer op nul zetten.
        setAuthState ({
            user: null,
            status: 'done',
        })
        history.push("/")
        // console.log('log uit!')
    }
    // omdat authState een object is en we nog steeds gebruik willen maken van die automatische state updates
    // zullen we de authState "spreadden"
    const data = {
        ...authState,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
            ? children
            :<p>Loading...</p>   //vanaf hier komt de foutmelding. loading... zie je nog kort verschijnen.
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
