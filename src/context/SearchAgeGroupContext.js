/*import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {  } from "../pages/homepage/Homepage";

export const AgeGroupContext = createContext(null);

function AgeGroupContextProvider({children}) {
    // hier komt de state waarin we de context-data plaatsen
    const [selectedAgeGroupForContext, setSelectedAgeGroupForContext] = useState(null);
    const history = useHistory();

    function setAgeGroup() {
        if ( selectedAgeGroupForContext === ´KINDEREN') {
            setSelectedAgeGroupForContext(history.push("/children"));
        }
        if ( selectedAgeGroupForContext === ´JONGEREN') {
            setSelectedAgeGroupForContext(history.push("/youth"));
        }
        if ( selectedAgeGroupForContext === ´VOLWASSENEN') {
            setSelectedAgeGroupForContext(history.push("/adults"));
        }
        if ( selectedAgeGroupForContext === ´OUDEREN') {
            setSelectedAgeGroupForContext(history.push("/elderly"));
        }
    }

    return (
        <AgeGroupContext.Provider value={}>
        // hier komt het component waar we onze eigen provider omheen wikkelen
            { children }
        </AgeGroupContext.Provider>
    )
}

export default AgeGroupContextProvider;*/
