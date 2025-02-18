import React, { useEffect, useState } from "react";
// import styled from 'styled-components'
// import { useState, useEffect } from "react";
import PageConfig from "../../styles/page-config/index.jsx";
import Card from "../../components/card";
import {getData} from "../../js/service.js";
import Loading from "../../components/load";
import styled from "styled-components";


const MovieList = ({ data }) => {

    scrollTo(0,0);


    return (

        <PageConfig button={true}>

            <Title>Procurando algo para assistir? Confira os últimos lançamentos e descubra novas histórias!</Title>

            {

                data.movies.map((movie) => {

                

                    return (


                        <Card title={movie.title}  sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} />


                    )


                })
            }

        </PageConfig>

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


                {dataMovies ? <MovieList data={dataMovies} /> : <Loading />}


        </>

    )


}

const Title = styled.h1`

width:100vw;
padding: 0 3rem;
font-size:1.7rem;
transition: 0.5s ease-in-out;
font-family: ${(props)=>props.theme.titleList};
color:${(props)=>props.theme.fontAccentColor};
margin-bottom:5rem;



`

export default Home