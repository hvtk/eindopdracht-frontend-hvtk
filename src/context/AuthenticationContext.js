import React, {createContext, useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom'
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const history = useHistory();

    const[authState, setAuthState] = useState( {
        user: null,
        status: 'pending',

        }
    )

    async function fetchUserData(jwtToken) {

        const decoded = jwt_decode(jwtToken);
        const username = decoded.sub;

        try {

            const result = await axios.get(`https://localhost:8443/users/${username}`, {
                headers: {
                   "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })

            setAuthState({
                user: {
                    username: result.data.username,
                    age: result.data.age,
                    postalCode: result.data.postalCode,
                    jwt: result.data.jwt,
                },
                status: "done"
            })
        } catch (e) {
            console.error(e);

            setAuthState({
                user: null,
                status: 'done',
            })
        }
    }

    useEffect(() => {
        // is er een token?
        const token = localStorage.getItem('token');
        // is er geen user?
        if(token != null /* token != null ipv !== undefined om op te vangen dat token = null als de token niet in localstorage staat*/  && authState.user === null) {

            fetchUserData(token);
        } else {

            setAuthState({
                user: null,
                status: 'done',
            })
        }
    }, []);

    async function login(jwtToken) {
        localStorage.setItem('token', jwtToken);

        fetchUserData(jwtToken)
    }

    function logout() {

        localStorage.clear();

        setAuthState ({
            user: null,
            status: 'done',
        })
        history.push("/")

    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done'
            ? children
            :<p>Loading...</p>
            }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
