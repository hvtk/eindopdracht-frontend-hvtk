import React, { createContext,useState } from "react";

//Authenticatie
// 1.Bedenk welke data je in de context beschikbaar moet stellen en maak daar een raamwerkje voor:
//   (login, logout, state)
// 2.maak de state aan den de lege functies
// 3.plaats de state en de functies in een data object en geef die mee via de value={} prop
// 4.test de context door een component aan te melden en de context met useContext met alles = useContext(AuthContext)

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
//.Inlogfunctie: het proces van inloggen (JWT token in Local Storage zetten en gebruikersdata opslaan in de context)
// in de provider regelen.
//.Uitleg functie: het proces van uitloggen (JWT token uit de local storage halen en context terughalen)
//.Implementeren dat bij refresh wordt gecheckt of er nog een JWT token is en zo ja: gebruikersdata ophalen.


export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    // state voor de gebruikersdata
    const[authState, setAuthState] = useState( {
        user: null,
        }
    )

    //inlogfunctie
    function login() {
        // we hebben de JWT token nodig om daaruit de user ID te halen
        // JWT token in de local storage zetten
        // alle gebruikersdata ophalen
        // die data gebruiken om de context te vullen
        // doorlinken naar de profielpagina
        console.log('Login!');
    }

    //uitlogfunctie
    function logout() {
        console.log('log uit!')
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
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;
