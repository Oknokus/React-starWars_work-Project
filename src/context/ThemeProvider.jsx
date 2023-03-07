import React, { useContext, useState } from "react";

import { changeColorTheme } from "../services/changeColorTheme";

export const THEME_DARK = "dark"; 
export const THEME_NEITRAL = "neitral";
export const THEME_LIGHT = "light";


const ThemeContext = React.createContext();

const ThemeProvider = ({ children, ...props }) => {
    const[theme, setTheme] = useState(null)
    
    const change = (name)=> {
        setTheme(name);
        changeColorTheme(name)
    }

    return(
        <ThemeContext.Provider value={{
        theme: theme,
        change: change
    }}    
        { ...props }
    >
        { children }
    </ThemeContext.Provider>
    )
};

export default ThemeProvider;

export const useTheme = () => {
    return(
     useContext(ThemeContext)
    )
};

