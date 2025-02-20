import React from "react";
import Loading from "../../components/load";
import PageConfig from "../../styles/page-config";
import { getData } from "../../js/service";
import styled from 'styled-components'
import Carousel from "../../components/carousel";


const GenreList = ({ genres }) => {

    return (

        <PageConfig button={true} direction={'center'}>

            {

                genres.map((genre) => {

                    return (

                        <Section key={genre.id}>

                            <Title>Filmes de {genre.name}</Title>

                            <Carousel movies={genre.movies} />

                        </Section>

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

const Section = styled.section`

width:100%;
height:100%;

`

export default Genres