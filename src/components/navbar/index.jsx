import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PiFilmSlateLight } from "react-icons/pi";
import TogglerTheme from "../toggler-theme";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../button";

const NavMobile = () => {

    const [menu, setMenu] = useState(false);

    return (

        <>

            <Mobile>

                <GiHamburgerMenu onClick={() => { setMenu(true) }} />

            </Mobile>

            {menu ? <Menu>

                <IoCloseSharp onClick={() => { setMenu(false) }} />


                <Link to={'/favorites'}>   <Button title={'Favoritos'} functions={()=>{setMenu(false)}} />  </Link>
                <Link to={'/search'}>   <Button title={'Buscar filme'} functions={()=>{setMenu(false)}} />  </Link>
                <TogglerTheme />


            </Menu> : ''}



        </>

    )
}

const NavBar = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)

    }, [])

    return (

        <Header>



            <Link to={'/'}>

                <Logo>

                    <PiFilmSlateLight />


                    <Title>Clube do filme</Title>


                </Logo>

            </Link>


            <Nav>

                {width < 700 ? <NavMobile /> :
                    <>

                        <ListNav>


                            <Link to={'/genres'}>

                                <ListItem>Categorias</ListItem>

                            </Link>


                            <Link to={'/favorites'}>

                                <ListItem>Favoritos</ListItem>

                            </Link>


                            <Link to={'/search'}>

                                <ListItem>Buscar</ListItem>

                            </Link>



                        </ListNav>

                        <TogglerTheme />

                    </>

                }



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
background-color:${(props) => props.theme.backgroundHeader};
color:${(props) => props.theme.fontColor};
box-shadow: 1px 1px 10px 1px ${(props) => props.theme.box};
margin-bottom:0.2rem;
padding: 0 3.5rem;
transition: 0.5s ease-in-out;


a{

text-decoration:none;
color:${(props) => props.theme.fontColor};

}

  @media screen and (max-width:850px){

  padding: 0;

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
color:${(props) => props.theme.fontAccentColor};


}

`

const Title = styled.h1`

min-width:13rem;
font-size:1.5rem;
transition: 0.5s ease-in-out;
font-family: ${(props) => props.theme.titleLogo};
color:${(props) => props.theme.fontAccentColor};


`

const ListItem = styled.li`

list-style-type:none;
font-size: 1rem;
padding:0.5rem;
font-family: ${(props) => props.theme.titleList};
transition: 0.5s ease-in-out;

&:hover{

color: #fff;
background-color:${(props) => props.theme.fontAccentColor};
border-radius:0.5rem;

}

  @media screen and (max-width:850px){

  font-size:0.9rem;
  ppadding:0.2rem;

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

  @media screen and (max-width:850px){

  gap:0.7rem;

    }

      @media screen and (max-width:700px){

  gap:0;

    }



`

const Mobile = styled.div`

width:100%;
height:100%;
display:flex;
align-items:center;
padding: 0 1.2rem;
transition:0.5s ease-in-out;
color: ${(props) => props.theme.fontAccentColor};

svg{
    
transition:0.5s ease-in-out;
font-size:2rem;
cursor:pointer;

}

`

const Menu = styled.div`

top:0;
right:0;
bottom:0;
left:0;
z-index:100;
transition:0.5s ease-in-out;

background-color: ${(props) => props.theme.backgroundMobile};
position:fixed;
padding:2rem;

display:flex;
flex-direction:column;
gap: 1rem;

svg{

font-size:3rem;
cursor:pointer;
color: ${(props) => props.theme.fontAccentColor};
margin-bottom:5rem;

}

`



export default NavBar
