import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AgeGroupContext = createContext(null);

function AgeGroupContextProvider({children}) {
    // hier komt de state waarin we de context-data plaatsen
    const [selectedAgeGroupForContext, setSelectedAgeGroupForContext] = useState(null);

    return (
        <AgeGroupContext.Provider value={{setSelectedAgeGroupForContext, selectedAgeGroupForContext}}>
        // hier komt het component waar we onze eigen provider omheen wikkelen
            { children }
        </AgeGroupContext.Provider>
    )
}

export default AgeGroupContextProvider;
