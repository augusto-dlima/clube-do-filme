import React, { useEffect, useState } from "react";
import PageConfig from "../../styles/page-config/index.jsx";
import Card from "../../components/card";
import { getMovies } from "../../js/service.js";
import Loading from "../../components/load";
import styled from "styled-components";


const MovieList = ({ data }) => {

    return (

        <PageConfig button={true} direction={'center'}>

            <Title>Procurando algo para assistir? Confira os últimos lançamentos e descubra novas histórias!</Title>

            {

                data.map((movie) => {


                    return (


                        <Card key={movie.id} id={movie.id} title={movie.title} sinopse={movie.overView} genres={movie.idGenres} background={movie.backdropPath ? `https://image.tmdb.org/t/p/w500${movie.backdropPath}` : ''} favorite={true} />


                    )


                })
            }

        </PageConfig>

    )
}


const Home = () => {

    const [dataMovies, setDataMovies] = useState(false);

    async function getDataMovies() {


        // dataMovies === false? setDataMovies(await getMovies()) : await getMovies('add');
        // dataMovies? setDataMovies(await getMovies()) : '';

        if (dataMovies === false) {

            setDataMovies(await getMovies());

        }

        else {

            const response = await getMovies('add');

            if (dataMovies.length < response.length) {
                setDataMovies(response);

            }


        }


    }

    useEffect(() => {

        getDataMovies();


    }, [dataMovies])


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
font-family: ${(props) => props.theme.titleList};
color:${(props) => props.theme.fontColor};
margin-bottom:5rem;




  @media screen and (max-width:1200px){
        font-size:1.5rem;

    }


  @media screen and (max-width:1024px){

  font-size:1.3rem;

    }
`

export default Home