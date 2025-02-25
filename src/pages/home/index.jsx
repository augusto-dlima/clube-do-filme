import React, { useEffect, useState } from "react";
import PageConfig from "../../styles/page-config/index.jsx";
import Card from "../../components/card";
import { getMovies, getData } from "../../js/service.js";
import Loading from "../../components/load";
import styled from "styled-components";


const MovieList = ({ data }) => {

    return (

        <PageConfig button={true} direction={'center'}>

            <Title>Procurando algo para assistir? Confira os últimos lançamentos e descubra novas histórias!</Title>

            {

                data.map((movie) => {


                    return (


                        <Card key={movie.id} id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} />


                    )


                })
            }

        </PageConfig>

    )
}


const Home = () => {

    const [dataMovies, setDataMovies] = useState(false);
    
    async function getDataMovies() {

        if(dataMovies === false){

            setDataMovies(await getMovies());

        }

        else{

            const response =  await getMovies('set');
            
            if(dataMovies.length < response.length){
                setDataMovies(response);
                
            }


        }


        }

    useEffect(() => {

        getDataMovies();


    },[dataMovies])


    return (


        <>


            {dataMovies? <MovieList data={dataMovies} /> : <Loading />}


        </>

    )


}

const Title = styled.h1`

width:100vw;
padding: 0 3rem;
font-size:1.7rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.titleList};
color:${(props) => props.theme.fontColor};
margin-bottom:5rem;
`

export default Home