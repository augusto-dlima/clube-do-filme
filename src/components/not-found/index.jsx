import React from "react";
import styled from "styled-components";
import { RiFolderWarningFill } from "react-icons/ri";

const DivDefault = ({ children }) => {

    return (

        <NotfoundDefault>


            {children}


        </NotfoundDefault>


    )


}


const DivTwo = ({ children }) => {

    return (

        <NotfoundTwo>


            {children}


        </NotfoundTwo>


    )


}

const NotFound = ({ title, background }) => {

    const tag = background ? 'NotFound' : 'NotFoundTwo';


    return (



        <>

            {background == true ? <DivTwo>

                {background == true ? <BackgroundTwo ></BackgroundTwo> : <Background></Background>}

                <RiFolderWarningFill />

                <Title >{title}</Title>

            </DivTwo> : <DivDefault>

                {background == true ? <BackgroundTwo ></BackgroundTwo> : <Background></Background>}

                <RiFolderWarningFill />

                <Title >{title}</Title>

            </DivDefault>}



        </>


    )

}

const NotfoundDefault = styled.div`

width:100%;
min-height:90vh;
display:flex;
flex-direction:column;
gap:2rem;
padding:2rem;
justify-content:center;
align-items:center;
font-size:10rem;
position:relative;
background-color:${(props) => props.theme.backgroundHeader};
color:${(props) => props.theme.fontAccentColor};
transition: 0.5s ease-in-out;

svg{
z-index:2;

}

`

const NotfoundTwo = styled.div`

display: flex;
width:80%;
min-height:60vh;
flex-direction:column;
gap:2rem;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
background-color:${(props) => props.theme.backgroundHeader};

svg{
    
color:${(props) => props.theme.fontAccentColor};
font-size:5rem;
// margin-bottom:1rem;

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

const BackgroundTwo = styled.div`

position:absolute;
background-color: ${(props) => props.theme.BackgroundHeader};
top:0;
right:0;
bottom:0;
left:0;

`

const Title = styled.h1`

max-width:35rem;
font-size:1.5rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.title};
color:#fff;
margin-bottom:5rem;
text-align:justify; 
z-index:2;
`

export default NotFound