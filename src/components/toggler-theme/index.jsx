import React, { useContext } from "react";
import styled from "styled-components";
import { PiSunFill } from "react-icons/pi";
// import { PiMoonFill } from "react-icons/pi";
import { ThemeContext } from "../context";
import { themes } from "../context";

const TogglerTheme = () => {

    const {theme,setTheme} = useContext(ThemeContext);

    return (

        <Toggler>

            <PiSunFill />

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
color:#000;
cursor:Pointer;

&:hover{

transition: 0.5s ease-in-out;
background-color:#000;
color:#fff;

}

`

export default TogglerTheme