import React from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";
import { getData } from "../../js/service";
import { themes } from "../../components/context";


const PageStart = ({ children, button }) => {

    return (


        <PageConfigStart>

            {

                button &&

                <BtnScrolTop>

                    <FaArrowCircleUp onClick={() => {

                        scrollTo(0, 0);

                    }} />


                </BtnScrolTop>


            }



            {children}

        </PageConfigStart>


    )
}

const PageCenter = ({ children, button }) => {

    return (


        <PageConfigCenter>

            {

                button &&

                <BtnScrolTop>

                    <FaArrowCircleUp onClick={() => {

                        scrollTo(0, 0);

                    }} />


                </BtnScrolTop>


            }



            {children}

        </PageConfigCenter>


    )
}








const PageConfig = ({ children, button, direction }) => {

    return (

        direction == 'start' ? <PageStart button={button} children={children} /> : <PageCenter button={button} children={children} />

    )



}

export default PageConfig

const PageConfigCenter = styled.div`

width:100vw;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:1rem;
padding: 6rem 2rem;
transition: 0.5s ease-in-out;
background-color: ${(props) => props.theme.backgroundBody};
color: ${(props) => props.theme.fontColor};
position: relative;
z-index:1;

  @media screen and (max-width:700px){

        padding: 2rem 1rem;
        gap:1rem;

    }

      @media screen and (max-width:500px){

        padding: 2rem 1rem;
        gap:1rem;

    }


`

const PageConfigStart = styled.div`

width:100vw;
min-height:100vh;
display:flex;
justify-content: start;
align-items:center;
flex-wrap:wrap;
gap:1rem;
padding: 6rem 2rem;
transition: 0.5s ease-in-out;
background-color: ${(props) => props.theme.backgroundBody};
color: ${(props) => props.theme.fontColor};
position: relative;
z-index:1;


`

const BtnScrolTop = styled.div`

position:fixed;
width:3rem;
height:3rem;
border-radius:10rem;
top:0;
right:0;
margin-right:10rem;
margin-top:90vh;
background-color:${(props) => props.theme.fontAccentColor};
cursor:pointer;
font-size:3rem;
z-index:2;
opacity:0.5;

&:hover{

transition: 0.5s ease-in-out;
opacity:1;

}

@media screen and (max-width:1024px){

    margin-right:3rem;

    }


`