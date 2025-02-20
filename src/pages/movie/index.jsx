import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getMovie } from "../../js/service";
import error from '../../../src/not-image.png';
import PageConfig from "../../styles/page-config";
import Carousel from "../../components/carousel";
import { getDataGenre, getFavoriteMovies, setFavoriteMovies } from "../../js/service";



const MovieDetails = () => {

    scrollTo(0, 0);

    
    
    const movie = getMovie(useParams().id);

    console.log(movie)
    
    const [validation, setValidation] = useState(getFavoriteMovies(movie.id))

    useEffect(()=>{


        setValidation(getFavoriteMovies(movie.id));


    })


    function configButton() {

        setFavoriteMovies(movie);
        setValidation(validation?false:true);

    }

    return (

        <>

            <Movie>

                <Background>
                    <Image src={movie.backdropPath ? `https://image.tmdb.org/t/p/original${movie.backdropPath}` : error} />
                </Background>

                <Details>

                    <Info>

                        <Title>{movie.title}</Title>

                        <Sinopse>{movie.overView}</Sinopse>

                        <Genres>

                            {

                                movie.idGenres.map(genre => {

                                    return (

                                        <Link key={genre} to={`/genre/${genre}`}>

                                            <p >{getDataGenre(genre, 'name')}</p>

                                        </Link>


                                    )



                                })


                            }

                        </Genres>

                        <Actions>

                            <Button onClick={() => { configButton() }}>{validation ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</Button>
                            <Button>Assistir trailer</Button>



                        </Actions>


                        <Title>Filmes relacionados:</Title>

                        <DivCarousel>

                            <Carousel movies={getDataGenre(movie.idGenres[0]).movies} />

                        </DivCarousel>


                    </Info>


                </Details>


            </Movie>



        </>

    )


}

const Movie = styled.div`

width:100%;
height:100%;
position:relative;

`

const DivCarousel = styled.div`

width:100%;
height:100%;
// background-color:#000;


`

const Movies = styled.div`

width:100%;
margin-top2rem;
transition:0.5s ease-in-out;
background-color:${(props) => props.theme.backgroundBody};
color:${(props) => props.theme.fontColor};
padding: 5rem 3rem;
position:relative;

`

const Info = styled.div`

width:100%;
height:100%;
padding: 15rem 3rem 2rem 3rem;
color:#fff;
display:flex;
gap:3rem;
flex-direction:column;
justify-content:flex-end;
position:relative;

`

const Title = styled.h1`

width:50%;
font-size:2rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.title};
color:#fff;

`


const Sinopse = styled.p`

max-width:100%;
font-family:${(props) => props.theme.text};
font-size:1.2rem;
text-align:justify;

`

const Genres = styled.div`

font-family:${(props) => props.theme.titleList};
font-size:1.2rem;
display:flex;
gap:1rem;

a{
    
color:#fff;
text-decoration: none;

&:hover{
    
transition: 0.5s ease-in-out;
color:${(props) => props.theme.fontAccentColor};

}

`

const Trailer = styled.div`



`

const Button = styled.button`

padding:1rem;
width:100%;
background-color: ${(props) => props.theme.backgroundBody};
font-family:${(props) => props.theme.titleList};
transition: 0.5s ease-in-out;
border:none;
color:${(props) => props.theme.fontColor};
 &:hover{
 
 background-color: ${(props) => props.theme.fontAccentColor};
 color:#fff;
 cursor:pointer;

 }


`

const Actions = styled.div`

width:50%;
gap:1rem;
display:flex;
position:relative;

`

const Details = styled.div`

top:0;
right:0;
bottom:0;
left:0;
transition: 0.5s ease-in-out;
background-color:#000;
opacity:0.8;
position:absolute;

display:flex;
justify-content:flex-start;

`

const Background = styled.div`

background-size:cover;
opacity:0.7;

`

const Image = styled.img`

width:100%;

`

export default MovieDetails