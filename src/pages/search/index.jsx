import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import NotFound from '../../components/not-found'
import Card from "../../components/card";
import Loading from "../../components/load"
import { searchMovies } from "../../js/service";
import PageConfig from "../../styles/page-config";

import { LuFolderSearch } from "react-icons/lu";


const Start = () => {

    return (

        <DivComponents>
            <LuFolderSearch />
        </DivComponents>

    )


}

const LoadingMovies = () => {

    return (

        <DivComponents>

            <Loading param={'search'} />

        </DivComponents>
    )


}

const MovieList = ({ title, movies }) => {

    return (

        <PageConfig button={movies.length>10? true : false}>

            <Title>{`Resultados para: ${title}`}</Title>

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



const Search = () => {

    const [screen, setScreen] = useState('')

    useEffect(() => {

        // console.log(screen)
    })

    return (

        <>

            <Config>

                <Div>

                    <input id="search" placeholder="O que você está procurando? Digite o título do filme para começar a busca" onKeyUp={() => { getinput() == '' ? setScreen('') : setScreen('') }}></input>
                    <button onClick={() => { getMovie() }}>Buscar</button>

                </Div>

                <DivMovies>

    
                        {screen === '' ? <Start /> : screen.length > 0? <MovieList title={getinput()} movies={screen} /> : <NotFound background={true} title={'Ops! Filme não encontrado'} />}


                </DivMovies>




            </Config>


        </>

    )

    async function getMovie() {
        setScreen(await searchMovies(document.querySelector('#search').value));
    }

    function getinput() { return document.querySelector('#search').value; }

}

const DivMovies = styled.div`

display: flex;
flex-wrap:wrap;
width:100%;
gap:2rem;
min-height:60vh;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
position:relative;

`

const DivComponents = styled.div`

display: flex;
width:80%;
min-height:60vh;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
background-color:${(props) => props.theme.backgroundHeader};

svg{
    
color:${(props) => props.theme.fontAccentColor};
font-size:5rem;

}

`



const Div = styled.div`

display: flex;
width:100%;
gap: 1rem;
justify-content:center;

input{
    
width:50%;
height:3rem;
text-align:center;
font-size:1rem;
transition:0.5s ease-in-out;
background-color:#e5e5e5;
font-family: ${(props) => props.theme.titleList};
border-radius:0.5rem;
border:none;

&:focus{
border:3px solid ${(props) => props.theme.fontAccentColor};
color:#757575;
}

}

button{
    
width:5rem;
height:3rem;
background-color:#e5e5e5;
border:none;
transition:0.5s ease-in-out;
font-family: ${(props) => props.theme.titleList};
background-color:${(props) => props.theme.fontAccentColor};
color:#fff;
border-radius:0.5rem;
cursor:pointer;

}

`

const Config = styled.div`

width:100%;
min-height:99vh;
padding:2rem;
display:flex;
flex-direction:column;
gap:3rem;
background-color: ${(props) => props.theme.backgroundBody};
color: ${(props) => props.theme.fontColor};
transition:0.5s ease-in-out;
align-items:center;

`

const Title = styled.h1`

width:100vw;
padding: 0 3rem;
font-size:2rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.title};
color:${(props) => props.theme.fontColor};
margin-bottom:2rem;

`

export default Search