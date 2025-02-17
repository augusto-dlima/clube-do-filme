import React from "react";
import styled from "styled-components";
import error from '../../../src/error.jpg'
import { getDataGenre } from "../../js/service.js";
import { Link } from "react-router-dom";

const Card = (props) => {

    return (

        <DivCard>

            <Background>

                <Image src={props.background ? props.background : error} alt={'imagem de fundo do filme'} />

            </Background>

            <Information>

                <Title>{props.title}</Title>

                <Sinopse>{props.sinopse}</Sinopse>

                <Genres>

                    {

                        props.genres.map(genre => {

                            return (

                                <Link to={`/${genre}`}>
                                    <p key={genre}>{getDataGenre(genre,'name')}</p>
                                </Link>


                            )



                        })


                    }

                </Genres>


            </Information>


        </DivCard>


    )



}



const Sinopse = styled.p`

flex-grow:2;
font-family:${(props) => props.theme.text};
font-size:1rem;
overflow-y:auto;
opacity:0;

`

const Genres = styled.div`

flex-grow:1;
font-family:${(props) => props.theme.text};
font-size:1rem;
display:flex;
gap:0.5rem;
opacity:0;

a{
    
color:#fff;
text-decoration: none;

&:hover{
    
transition: 0.5s ease-in-out;
color:${(props)=>props.theme.fontAccentColor};

}

`

const Information = styled.div`


top:8rem;
right:0.5rem;
bottom:0.5rem;
left:0.5rem;
display:flex;
flex-direction:column;
position:absolute;
color:#fff;
opacity:0.8;
padding:1rem;
gap:2rem;
text-align:justify;
border-radius:1rem;
transition: 0.5 ease-in-out;




&:hover{

transition: 0.5 ease-in-out;

}

::-webkit-scrollbar {
    width: 0px;
}

`

const Title = styled.h1`

flex-grow:1;
font-family:${(props) => props.theme.title};
font-size:1.5rem;
text-align:left;

`

const DivCard = styled.div`

width:28rem;
max-width: 30rem;
min-width: 10rem;
height:16rem;
background-color:#000;
border-radius:1rem;
position:relative;
transition: 0.5 ease-in-out;
cursor:pointer;


&:hover{

${Information}{


transition: 1s ease-in-out;
background-color:#000;
top:0.5rem;


}

${Sinopse}{


transition: 1s ease-in-out;
opacity:1;


}

${Genres}{


transition: 1s ease-in-out;
opacity:1;


}


}


}

`

const Background = styled.div`

width:100%;
height:100%;
display:flex;
border-radius:1rem;

`

const Image = styled.img`

width:100%;
border-radius:1rem;

`



export default Card