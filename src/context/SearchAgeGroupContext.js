import React, {createContext, useState} from "react";
import {useHistory} from "react-router-dom";

export const AgeGroupContext = createContext(null);

function AgeGroupContextProvider({children}) {

    const [selectedAgeGroupForContext, setSelectedAgeGroupForContext] = useState(null);

    return (
        <AgeGroupContext.Provider value={{setSelectedAgeGroupForContext, selectedAgeGroupForContext}}>
                    { children }
        </AgeGroupContext.Provider>
    )
}

export default AgeGroupContextProvider;
