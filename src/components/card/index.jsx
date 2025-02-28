import React from "react";
import styled from "styled-components";
import Favorite from "../favorite/index.jsx";
import error from '../../../src/error.jpg';
import { getDataGenre, getFavoriteMovies } from "../../js/service.js";
import { Link } from "react-router-dom";

const Card = (props) => {

    const favorite = props.favorite == true ? getFavoriteMovies(props.id) : false;

    return (

        <Link to={`/movie/${props.id}`}>

            <DivCard>

                {favorite === true ? <Favorite /> : ''}

                <Background>

                    <Image src={props.background ? props.background : error} alt={'imagem de fundo do filme'} />

                </Background>

                <Information>

                    <Title>{props.title}</Title>

                    <Sinopse>{props.sinopse}</Sinopse>

                    <Genres>

                        {


                            !props.genres ? '' : props.genres.map(genre => {

                                return (

                                    <p key={genre}>{getDataGenre(genre, 'name')}</p>


                                )



                            })


                        }

                    </Genres>


                </Information>


            </DivCard>

        </Link>


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
flex-wrap:wrap;
gap:0.5rem;
opacity:0;

a{
    
color:#fff;
text-decoration: none;

&:hover{
    
transition: 0.5s ease-in-out;
color:${(props) => props.theme.fontAccentColor};

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
z-index:1;




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
height:16rem;
max-width:30rem;
min-width:10rem;
background-color:#000;
border-radius:1rem;
position:relative;
transition: 0.5 ease-in-out;
cursor:pointer;


  @media screen and (max-width:1440px){
        width:26rem;
        min-height:14rem;
        height:auto; 
    }


  @media screen and (max-width:1200px){
        width:22rem;    
         min-height:12rem;    
        
        ${Title}{font-size:1.2rem;}
        ${Genres}{display:none;}

    }


  @media screen and (max-width:1024px){
        width:18rem;
         min-height:10rem;
         height:auto;
          ${Information}{top:5rem;}
         ${Title}{font-size:1rem;}
         ${Sinopse}{font-size:0.8rem;}


    }



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