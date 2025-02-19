import React from "react";
import Loading from "../../components/load";
import PageConfig from "../../styles/page-config";
import { getData } from "../../js/service";
import styled from 'styled-components'
import Carousel from "../../components/carousel";


const GenreList = ({ genres }) => {

    return (

        <PageConfig button={true}>

            {

                genres.map((genre) => {

                    return (

                        <>

                            <Title>Filmes de {genre.name}</Title>

                            <Carousel movies={genre.movies} />

                        </>

                    )

                })

            }



        </PageConfig>



    )


}

const Genres = () => {

    const { genres } = getData();


    return (

        <>

            {!genres ? <Loading /> : <GenreList genres={genres} />}



        </>

    )


}

const Title = styled.h1`

width:100vw;
font-size:2rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.title};
color:${(props) => props.theme.fontColor};
margin:5rem 0;
`

export default Genres