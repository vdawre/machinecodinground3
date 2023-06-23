import React, { useState, useContext, useEffect } from "react";
import data from './data';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [value, setValue] = useState(data);

    

return <AppContext.Provider value={{value, setValue}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};