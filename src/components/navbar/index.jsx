import React from "react";
import styled from "styled-components";
import { PiFilmSlateLight } from "react-icons/pi";
import TogglerTheme from "../toggler-theme";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (

        <Header>



            <Link to={'/'}>

                <Logo>

                    <PiFilmSlateLight />


                    <Title>Clube do filme</Title>


                </Logo>

            </Link>


            <Nav>

                <ListNav>


                    <Link to={'/genres'}>

                        <ListItem>Categorias</ListItem>

                    </Link>


                    <Link to={'/favorites'}>

                        <ListItem>favoritos</ListItem>

                    </Link>


                    <Link to={'/search'}>

                        <ListItem>Buscar</ListItem>

                    </Link>



                </ListNav>

                <TogglerTheme />

            </Nav>






        </Header>


    )


}


const Header = styled.header`

width:100vw;
height: 6rem;
display: flex;
justify-content: space-between;
align-items:center;
background-color:${(props)=>props.theme.backgroundHeader};
color:${(props)=>props.theme.fontColor};
box-shadow: 1px 1px 10px 1px ${(props)=>props.theme.box};
margin-bottom:0.2rem;
padding: 0 3.5rem;
transition: 0.5s ease-in-out;


a{

text-decoration:none;
color:${(props)=>props.theme.fontColor};

}

`

const Logo = styled.div`

height:100%;
display: flex;
align-items:center;
gap:0.2rem;
padding: 0 1.2rem;



svg{

transition: 0.5s ease-in-out;
font-size: 2.5rem;
color:${(props)=>props.theme.fontAccentColor};

}

`

const Title = styled.h1`

min-width:13rem;
font-size:1.5rem;
transition: 0.5s ease-in-out;
font-family: ${(props)=>props.theme.titleLogo};
color:${(props)=>props.theme.fontAccentColor};


`

const ListItem = styled.li`

list-style-type:none;
font-size: 1rem;
padding:0.5rem;
font-family: ${(props)=>props.theme.titleList};
transition: 0.5s ease-in-out;

&:hover{

color: #fff;
background-color:${(props)=>props.theme.fontAccentColor};
border-radius:0.5rem;
box-shadow:1px 1px 1px 1px #fff;

}

`

const ListNav = styled.ul`

display: flex;
gap: 2rem;
padding: 0 1.2rem;


`

const Nav = styled.nav`


display:flex;
height:100%;
align-items:center;
gap: 2rem;
padding: 0 1.2rem;



`



export default NavBar
