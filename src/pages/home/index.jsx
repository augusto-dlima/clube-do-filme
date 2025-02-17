import React, { useEffect, useState } from "react";
// import styled from 'styled-components'
// import { useState, useEffect } from "react";
import PageConfig from "../../components/page-config";
import Card from "../../components/card";
import {getData} from "../../js/service.js";
import Loading from "../../components/load";
import styled from "styled-components";


const MovieList = ({ data }) => {


    return (

        <>

            <Title>Filmes</Title>

            {

                data.movies.map((movie) => {

                

                    return (


                        <Card title={movie.title}  sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} />


                    )


                })
            }

        </>

    )
}


const Home = () => {

    scrollTo(0,0);


    const [dataMovies, setDataMovies] = useState('')

    useEffect(() => {

        let response = '';

        function GetStop() {

            clearInterval(getMovies);

        }

        const getMovies = setInterval(() => {

            response = getData();
            response ? setDataMovies(response) : '';
            response ? GetStop() : '';

        }, 3000);


    }, [])


    return (


        <>

            <PageConfig>

                {dataMovies ? <MovieList data={dataMovies} /> : <Loading />}

            </PageConfig>


        </>

    )


}

const Title = styled.h1`

width:100vw;
padding: 0 3rem;
font-size:2rem;
transition: 0.5s ease-in-out;
font-family: ${(props)=>props.theme.title};
color:${(props)=>props.theme.fontAccentColor};
margin-bottom:2rem;

`

export default Home