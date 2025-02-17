import React from "react";
import styled from "styled-components";

const PageConfig = ({children}) => {


    return (

        <Page>

        {children}

        </Page>

    )

}

export default PageConfig

const Page = styled.div`

width:100vw;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:1rem;
padding: 6rem 2rem;
transition: 0.5s ease-in-out;
background-color: ${(props)=>props.theme.backgroundBody};
color: ${(props)=>props.theme.fontColor};

`