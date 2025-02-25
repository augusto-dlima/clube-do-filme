import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import NotFound from '../../components/not-found'
import Card from "../../components/card";
import Loading from "../../components/load"
import { searchMovies } from "../../js/service";

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



const Search = () => {


    const [screen, setScreen] = useState(false)

    useEffect(() => {


        setScreen(getMovie());


    })

    return (

        <>

            <Config>

                <Div>

                    <input id="search" placeholder="O que você está procurando? Digite o título do filme para começar a busca" onKeyUp={()=>{ getMovie() == ''? setScreen('') : ''}}></input>
                    <button onClick={() => { setScreen(getMovie()) }}>Buscar</button>

                </Div>

                <DivMovies>

                    <Movies>


                        { screen === ''? <Start /> : <LoadingMovies/>}

       
                    </Movies>




                </DivMovies>




            </Config>


        </>

    )

    function getMovie() {

        const movie = document.querySelector('#search');

        searchMovies(movie.value);
        return movie.value;

    }


}

const DivMovies = styled.div`

display: flex;
width:100%;
min-height:60vh;
opacity:0.3;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
background-color:${(props) => props.theme.fontAccentColor};
position:relative;



`

const DivComponents = styled.div`

display: flex;
width:100%;
min-height:60vh;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
background-color:${(props) => props.theme.fontAccentColor};

svg{

color:#fff;
font-size:5rem;

}

`



const Movies = styled.div`

top:0;
right:0;
bottom:0;
left:0;
opacity:0.9;
display:flex;
justify-content:center;
align-items:center;
border-radius:0.5rem;
transition:0.5s ease-in-out;
background-color:#000;
position:absolute;



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

export default Search