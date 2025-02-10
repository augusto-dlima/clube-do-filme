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
margin-bottom:6rem;
padding: 0 1.2rem;

a{

text-decoration:none;
color:${(props)=>props.theme.fontColor};

}

`

const Logo = styled.div`

height:100%;
// background-color:blue;
display: flex;
align-items:center;
gap:1rem;
padding: 0 1.2rem;



svg{

font-size: 3rem;

}

`

const Title = styled.h1`

min-width:13rem;
font-size:2rem;


`

const ListItem = styled.li`

list-style-type:none;
font-size: 1.2rem;

`

const ListNav = styled.ul`

display: flex;
gap: 2rem;
padding: 0 1.2rem;


`

const Nav = styled.nav`


display:flex;
// background-color:blue;
height:100%;
align-items:center;
gap: 2rem;
padding: 0 1.2rem;



`



export default NavBar
