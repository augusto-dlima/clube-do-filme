import React from "react";
import styled from "styled-components";
import { RiStarSmileFill } from "react-icons/ri";


const Favorite = () => {

    return (

        <Container>

            <RiStarSmileFill />

        </Container>


    )
}

const Container = styled.div`
position:absolute;
width:48px;
height:48px;
display:flex;
justify-content:center;
align-items:center;
transition:0.5s ease-in-out;
border-radius:100%;
background-color: ${(props)=>props.theme.backgroundBody};
z-index:10;

top:0;
right:0;
margin:1rem;
// bootom:100;
// left:100;

svg{
    
transition:0.5s ease-in-out;
font-size:1.5rem;
color:${(props)=>props.theme.fontAccentColor}

}

`

export default Favorite