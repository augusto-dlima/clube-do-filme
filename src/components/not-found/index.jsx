import React from "react";
import styled from "styled-components";
import { RiFolderWarningFill } from "react-icons/ri";

const NotFound = ({ title }) => {

    return (


        <Notfound>

            <Background></Background>

            <RiFolderWarningFill />

            <Title>{title}</Title>


        </Notfound>


    )

}

const Notfound = styled.div`

width:100%;
height:90vh;
display:flex;
flex-direction:column;
gap:2rem;
justify-content:center;
align-items:center;
font-size:10rem;
position:relative;
background-color:#fff;
color:${(props) => props.theme.fontAccentColor};
transition: 0.5s ease-in-out;

svg{
z-index:2;

}

`

const Background = styled.div`

position:absolute;
background-color: #000;
top:0;
right:0;
bottom:0;
left:0;
opacity:0.9;

`

const Title = styled.h1`

max-width:35rem;
font-size:1.5rem;
transition: 0.5s ease-in-out;
font-family: ${(props)=>props.theme.title};
color:#fff;
margin-bottom:5rem;
text-align:justify; 
z-index:2;
`

export default NotFound