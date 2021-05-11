import React, { createContext,useState } from "react";


// .AuthContext maken met createContext
// .ContextProvider functie component bouwen met daarin:
//      het echte AuthContext.Provider component
//      geef een dataopject mee via de value={}
//      stukje state etc.
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
        console.log('Login!');
    }

    //uitlogfunctie
    function logout() {
        console.log('log uit!')
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>

    )
}

export default AuthContextProvider;
