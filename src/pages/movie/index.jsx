import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getMovie, setGenreMovies } from "../../js/service";
import { IoCloseSharp } from "react-icons/io5";
import error from '../../../src/not-image.png';
import Carousel from "../../components/carousel";
import { getDataGenre, getFavoriteMovies, setFavoriteMovies, getTrailer, getRelatedMovies } from "../../js/service";
import NotFound from "../../components/not-found";
import Button from "../../components/button";

import Title from "../../components/text/title";



const MovieDetails = () => {

    setGenreMovies();

    scrollTo(0, 0);

    const movie = getMovie(useParams().id);
    const [validation, setValidation] = useState(getFavoriteMovies(movie.id));
    const [trailer, setTrailer] = useState(false);
    const [videosMovie, setVideosMovie] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)

    }, [])


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

                    {width <= 768 ? <Image src={movie.posterPath ? `https://image.tmdb.org/t/p/original${movie.posterPath}` : error} /> : <Image src={movie.backdropPath ? `https://image.tmdb.org/t/p/original${movie.backdropPath}` : error} />}

                </Background>

                <Details>

                    <Info>

                        <Title section={'movie'}>{movie.title}</Title>

                        <OverFlow>

                            <Sinopse>{movie.overView}</Sinopse>

                        </OverFlow>
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

                            <Button functions={() => { actions('favorited') }} title={validation ? 'Remover dos favoritos' : 'Adicionar aos favoritos'} />
                            <Button functions={() => { actions() }} title={'Assistir trailer'} />

                        </Actions>


                        {getRelatedMovies(movie.idGenres[0], movie.id) &&
                            <>

                                <Title section={'movie'}>Filmes relacionados:</Title>

                                <DivCarousel>

                                    <Carousel movies={getRelatedMovies(movie.idGenres[0], movie.id)} />

                                </DivCarousel>

                            </>

                        }



                    </Info>


                </Details>

                {!trailer ? <TrailerOff></TrailerOff> : <TrailerOn>


                    <TrailerDetails>

                        <BtnCloseTrailer>

                            <IoCloseSharp onClick={() => { actions() }} />

                        </BtnCloseTrailer>

                        <Trailer>

                            {videosMovie ? <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${videosMovie.key}?`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe> : <NotFound param={'default'} title={'Ops!\nTrailer indisponivel'} />}


                        </Trailer>

                    </TrailerDetails>


                </TrailerOn>}

            </Movie>



        </>

    )


}

const Movie = styled.div`

width:100%;
position:relative;

::-webkit-scrollbar {
    width: 0px;
}

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
gap:2rem;
flex-direction:column;
justify-content:flex-end;
position:relative;
overflow-y:visible;


@media screen and (max-width:1300px){

justify-content:flex-end;
padding: 5rem 3rem 2rem 3rem;
gap:2rem;

}

@media screen and (max-width:1200px){

justify-content:flex-end;
padding: 5rem 3rem 2rem 3rem;
gap:1rem;

}



@media screen and (max-width:1024px){

justify-content:flex-end;
padding: 5rem 3rem 2rem 3rem;
gap:2rem;

}


@media screen and (max-width:922px){

justify-content:flex-start;
padding: 3rem 3rem 2rem 3rem;
gap:1rem;

}



@media screen and (max-width:769px){

justify-content:flex-start;
padding: 7rem 3rem 2rem 3rem;
gap:4rem;

}

@media screen and (max-width:630px){

justify-content:flex-start;
padding: 7rem 3rem 2rem 3rem;
gap:2rem;

}

@media screen and (max-width:500px){
padding: 2rem 3rem 2rem 3rem;
gap:1.5rem;
}






`



const OverFlow = styled.div`

width:100%;
height:20vh;
display:flex;
flex-wrap:wrap;
padding:1rem 0;

@media screen and (max-width:768px){

height:30vh;

    }

@media screen and (max-width:500px){

height:20vh;

    }

`

const Sinopse = styled.p`

width:100%;
height:100%;
font-family:${(props) => props.theme.text};
font-size:1.2rem;
text-align:justify;
overflow-y:auto;
line-height:2rem;
cursor:pointer;

@media screen and (max-width:700px){

  font-size:1rem;
  line-height:1.5rem;
    }

@media screen and (max-width:500px){

  font-size:0.9rem;
  line-height:1.5rem;
    }


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

@media screen and (max-width:500px){

  font-size:1rem;

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

`

const TrailerOff = styled.div`

`

const Trailer = styled.div`

width:100%;


`

const Actions = styled.div`

width:50%;
gap:1rem;
display:flex;
position:relative;

@media screen and (max-width:900px){

width:100%;

}


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
width:100%;
height:100%;
display:flex;
opacity:0.7;

`

const Image = styled.img`

width:100%;


    @media screen and (max-width:1400px){

  width:100%;
  
 
    }



     @media screen and (max-width:1300px){

  width:110%;
  
 
    }



  @media screen and (max-width:1024px){

  width:160%;
  
 
    }


 @media screen and (max-width:769px){

  width:120%;
  
 
    }


     @media screen and (max-width:520px){

  width:120%;
  
 
    }

 @media screen and (max-width:500px){

  width:110%;
 
    }




`

export default MovieDetails