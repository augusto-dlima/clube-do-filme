import React from "react";
import PageConfig from "../../styles/page-config";
import Card from "../../components/card";
import styled from 'styled-components'
import { getFavoriteMovies } from "../../js/service";
import NotFound from "../../components/not-found";

const FavoriteList = ({ movies }) => {

    return (


        <PageConfig button={movies.length>=5? true : false} direction={movies.length>=3?'center' : 'start'}>

            {movies.length>=3? <Title>Minha lista!</Title> : <TitleStart>Minha lista!</TitleStart>}



            {
                movies.map((movie) => {

                    return (


                        <Card key={movie.id} id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} poster={movie.posterPath ? `https://image.tmdb.org/t/p/w500${movie.posterPath}` : ''} />


                    )



                })
            }

        </PageConfig>


    )

}

const Favorites = () => {

    const movies = getFavoriteMovies(); 

    return (

        <>

            { movies? <FavoriteList movies={movies} /> : <NotFound title={'Ainda não tem filmes favoritos? Explore nossa seleção e encontre seus novos favoritos!'}/>}

        </>


    )


}


const Title = styled.h1`

width:100vw;
font-size:2rem;
padding:0rem 3rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.titleList};
color:${(props) => props.theme.fontColor};

   @media screen and (max-width:700px){

        font-size:1rem;
        margin-bottom:1rem;

    }
`

const TitleStart = styled.h1`

width:100vw;
font-size:2rem;
padding:0rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.titleList};
color:${(props) => props.theme.fontColor};

   @media screen and (max-width:700px){

        font-size:1rem;
        margin-bottom:1rem;

    }
`


export default Favorites