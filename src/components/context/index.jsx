import React, { useState } from "react";
import { createContext } from "react";
import { getTheme } from "../../js/service";


export const themes = {


    light: {


        fontColor: '#000',
        fontAccentColor: '#FF0033',
        fontColorTitle: '',
        colorLogo: '',
        backgroundHeader: '#e5e5e5',
        backgroundBody: '#fff',
        backgroundToggler: '#fff',
        fontColorToggler: '#000',
        fontAccentColorToggler: '#FF0033',
        title: 'ember-bold',
        text: 'ember-regular',
        box:'#000'




    },
    dark: {


        fontColor: '#fff',
        fontAccentColor: '#1A98FF',
        fontColorTitle: '',
        colorLogo: '',
        backgroundHeader: '#000',
        backgroundBody: '#141920',
        backgroundToggler: '#fff',
        fontColorToggler: '#fff',
        fontAccentColorToggler: '#1A98FF',
        title: 'ember-bold',
        text: 'ember-regular',
        box:'#fff'


    }




}


export const ThemeContext = createContext({});

const ThemeProvider = (props) => {

    const localTheme = getTheme();

    const [theme,setTheme] = useState(localTheme==='dark'?themes.dark: themes.light);

    return (


        <ThemeContext.Provider value={{theme,setTheme}}>


            {props.children}


        </ThemeContext.Provider>

    )


}

export default ThemeProvider