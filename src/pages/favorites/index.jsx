import React from "react";
import PageConfig from "../../styles/page-config";
import Card from "../../components/card";
import styled from 'styled-components'
import { getFavoriteMovies } from "../../js/service";
import NotFound from "../../components/not-found";

const FavoriteList = ({ movies }) => {

    return (


        <PageConfig button={movies.length>=10? true : false} direction={movies.length>=3?'center' : 'start'}>

            <Title>Meus favoritos!</Title>

            {
                movies.map((movie) => {

                    return (


                        <Card key={movie.id} id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} />


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

            { movies.length> 0 ? <FavoriteList movies={movies} /> : <NotFound />}

        </>


    )


}


const Title = styled.h1`

width:100vw;
font-size:2rem;
padding:2rem 3rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.titleList};
color:${(props) => props.theme.fontColor};
`


export default Favorites