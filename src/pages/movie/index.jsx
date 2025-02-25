import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getMovie, setGenreMovies } from "../../js/service";
import { IoCloseSharp } from "react-icons/io5";
import error from '../../../src/not-image.png';
import Carousel from "../../components/carousel";
import { getDataGenre, getFavoriteMovies, setFavoriteMovies, getTrailer, getRelatedMovies } from "../../js/service";
import NotFound from "../../components/not-found";



const MovieDetails = () => {

    setGenreMovies();
    
    scrollTo(0, 0);

    const movie = getMovie(useParams().id);
    const [validation, setValidation] = useState(getFavoriteMovies(movie.id));
    const [trailer, setTrailer] = useState(false);
    const [videosMovie, setVideosMovie] = useState(false);


    async function downloadVideos() {

        const response = await getTrailer(movie.id);

        setVideosMovie(response);

    }


    useEffect(() => {

        setValidation(getFavoriteMovies(movie.id));

    })


    function actions(action) {

        if (action === 'favorited') {

            setFavoriteMovies(movie);
            setValidation(validation ? false : true);
        }

        else {

            downloadVideos();
            setTrailer(trailer ? false : true);

        }



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

                            <Button onClick={() => { actions('favorited') }}>{validation ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</Button>
                            <Button onClick={() => { actions() }}>Assistir trailer</Button>



                        </Actions>


                        <Title>Filmes relacionados:</Title>

                        <DivCarousel>

                            <Carousel movies={getRelatedMovies(movie.idGenres[0], movie.id)} />

                        </DivCarousel>


                    </Info>


                </Details>

                {!trailer ? <TrailerOff></TrailerOff> : <TrailerOn>


                    <TrailerDetails>

                        <BtnCloseTrailer>

                            <IoCloseSharp onClick={() => { actions() }} />

                        </BtnCloseTrailer>

                        <Trailer>

                            {videosMovie ? <iframe width="100%" height="700" src={`https://www.youtube.com/embed/${videosMovie.key}?`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> : <NotFound title={'Ops!\nTrailer indisponivel'} />}


                        </Trailer>

                    </TrailerDetails>


                </TrailerOn>}

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

const TrailerOn = styled.div`
top:0;
right:0;
bottom:0;
left:0;
transition: 0.5s ease-in-out;
background-color:#000;
opacity:1;
position:absolute;

display:flex;
justify-content:center;

`

const TrailerDetails = styled.div`

width:90%;
transition: 0.5s ease-in-out;
display:flex;
flex-direction:column;
// background-color:red;
gap:1rem;
padding:2rem;
align-items:start;

z-index:10;

svg{

font-size:5rem;
color:#fff;
cursor:pointer;
align-items:center;

}



`

const BtnCloseTrailer = styled.div`


display:flex;
justify-content:flex-start;
// background-color:#f1f1f1;

`

const TrailerOff = styled.div`

`

const Trailer = styled.div`

// background-color: ${(props) => props.theme.fontAccentColor};
width:100%;


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