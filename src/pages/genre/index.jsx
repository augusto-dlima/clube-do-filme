import React from "react";
import { useParams } from "react-router-dom";
import { getDataGenre } from "../../js/service";
import styled from "styled-components";
import Card from "../../components/card";
import PageConfig from "../../styles/page-config";



const Genre = (props) => {

    const genre = getDataGenre(useParams().id, 'genre')

    scrollTo(0,0);

    return (

        <DivGenre>

            <PageConfig button={true} direction={'center'}>


                <Title>Lista de filmes da categoria : {genre.name}</Title>

                {

                    genre.movies.map((movie) => {



                        return (


                            <Card key={movie.id} id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} />


                        )


                    })
                }


            </PageConfig>

        </DivGenre>


    )



}

const Title = styled.h1`

width:100vw;
padding: 0 3rem;
font-size:2rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.title};
color:${(props) => props.theme.fontColor};
margin-bottom:2rem;

`

const DivGenre = styled.div`

transition: 0.5s eease-in-out;

`


export default Genre