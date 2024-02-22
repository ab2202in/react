import React,{createContext,useContext,useState} from "react";
import ThemeSelector from "./ThemeSelector";
import ThemedComponent from "./ThemedComponent";

export const ThemeContext =createContext('black');

function UseContextComponent(){
    const [theme, setTheme] =useState ('light');

    const contextValue ={theme,setTheme};

    return(
        <ThemeContext.Provider value={contextValue}>
            <ThemedComponent/>
            <ThemeSelector/>
        </ThemeContext.Provider>
    )
}

export default UseContextComponent;