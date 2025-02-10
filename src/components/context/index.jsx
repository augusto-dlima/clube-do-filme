import React, { useState } from "react";
import { createContext } from "react";


export const themes = {


    light: {


        fontColor: '#000',
        fontAccentColor: '',
        fontColorTitle: '',
        colorLogo: '',
        backgroundHeader: '',
        backgroundBody: '#fff',
        backgroundTogler: '#000',
        fontColorToggler: '#000',
        fontAccentColorToggler: '#fff'




    },
    dark: {


        fontColor: '#fff',
        fontAccentColor: '',
        fontColorTitle: '',
        colorLogo: '',
        backgroundHeader: '',
        backgroundBody: '#000',
        backgroundTogler: '#fff',
        fontColorToggler: '#fff',
        fontAccentColorToggler: '#000'


    }




}


export const ThemeContext = createContext({});

const ThemeProvider = (props) => {

    const [theme,setTheme] = useState(themes.light);

    return (


        <ThemeContext.Provider value={{theme,setTheme}}>


            {props.children}


        </ThemeContext.Provider>

    )


}

export default ThemeProvider