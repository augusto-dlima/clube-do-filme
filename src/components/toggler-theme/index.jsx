import React, { useContext, useState } from "react";
import styled from "styled-components";
import { PiSunFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";
import { ThemeContext } from "../context";
import { themes } from "../context";
import { setThemeLocal } from "../../js/service";

const TogglerTheme = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const [icon, seticon] = useState(theme === themes.light ? 'light' : 'dark')


    function toggler() {

        theme == themes.light ? setTheme(themes.dark) : setTheme(themes.light);
        icon == 'light' ? seticon('dark') : seticon('light');
        icon == 'light' ? setThemeLocal('dark') : setThemeLocal('light');

    }

    return (

        <Toggler onClick={() => {  toggler() }} >

            {icon == 'light' ? <PiMoonFill /> : <PiSunFill />}

        </Toggler>

    )

}


const Toggler = styled.div`

display:flex;
justify-content:center;
align-items:center;
width:2rem;
height:2rem;
border-radius:100%;
color:${(props)=>props.theme.fontColor};
cursor:Pointer;

&:hover{

transition: 0.5s ease-in-out;
background-color:${(props)=>props.theme.backgroundToggler};
color:${(props)=>props.theme.fontAccentColorToggler};

}

`

export default TogglerTheme