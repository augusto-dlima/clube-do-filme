import React from "react";
import PageConfig from "../../styles/page-config";

import { RiLoader3Line } from "react-icons/ri";
import styled, { keyframes } from "styled-components";
import { TypeAnimation } from 'react-type-animation';


import { getData } from "../../js/service";

const LoadingSearch = () => {


    return (

        <Config>

            <Load>

                <RiLoader3Line />

            </Load>

        </Config>

    )


}

const Loading = ({ param }) => {

    const response = true;

    return (


        <>

            {param === 'search' ? <LoadingSearch /> : <PageConfig>

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

                                'Esse projeto é um trabalho de estudo, então, por favor, não hesite em explorar e me dar feedback!',

                                3000,


                            ]}
                            speed={30}
                            style={{ fontSize: '1.5rem' }}
                            repeat={0}
                        />


                    }


                </Load>

            </PageConfig>}


        </>




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
padding:0 15rem;
text-align:justify;
color: ${(props) => props.theme.fontColor};
font-family: ${(props) => props.theme.titleList};

svg{

font-size:3rem;
pading:1rem;
transition:0.5s ease-in-out;
color: ${(props) => props.theme.fontAccentColor};
animation: ${rotate} 1s linear infinite;


}

`

const Config = styled.div`


`

export default Loading