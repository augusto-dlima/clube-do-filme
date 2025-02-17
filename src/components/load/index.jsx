import React from "react";

import { RiLoader3Line } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
import { TypeAnimation } from 'react-type-animation';


import {getData} from "../../js/service";

const Loading = () => {

    const response = getData();

    return (

        <Load>

            <RiLoader3Line />

            {

                !response &&

                <TypeAnimation
                    sequence={[

                       'Bem-vindo ao clube do filme!',
                       3000,                     
                       
                       'Na primeira visita, pode demorar um pouco para carregar as informações, mas não se preocupe, depois disso, tudo fica mais rápido!',

                       3000,
            
                    ]}
                    speed={10}
                    style={{ fontSize: '2rem' }}
                    repeat={0}
                />


            }


        </Load>


    )
}

const rotate = keyframes`

to{

transform: rotate(360deg);

}

`

const Load = styled.div`

widht:100%;
min-height:50vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:5rem;
padding:5rem;
text-align:justify;
color: ${(props) => props.theme.fontColor};
font-family: ${(props) => props.theme.text};

svg{

font-size:3rem;
pading:1rem;
transition:0.5s ease-in-out;
color: ${(props) => props.theme.fontAccentColor};
animation: ${rotate} 1s linear infinite;


}

`

export default Loading