import React from "react";
import styled from "styled-components";

const Title = ({children, section})=>{
    return(

        <>
        
        {section == 'movie'? <Text style={{fontSize:'2rem', padding:0, color:'fff'}}> {children}</Text> : <Text style={{color:'${(props) => props.theme.fontColor}'}}>{children}</Text> }
        
        </>



    )
}


const Text = styled.h1`
width:100%;
padding: 0 3rem;
font-size:1.7rem;
font-family: ${(props) => props.theme.title};
margin-bottom:2rem;


  @media screen and (max-width:1200px){
        font-size:1.5rem;
        padding: 0 5rem;

    }

      @media screen and (max-width:1024px){

         font-size:1.3rem;
          padding: 0 3rem;

    }


          @media screen and (max-width:960px){

         font-size:1.3rem;
          padding: 0 8rem;

    }


  @media screen and (max-width:800px){

         font-size:1.3rem;
          padding: 0 4rem;

    }

      @media screen and (max-width:700px){

        font-size:1.3rem;
        margin-bottom:1rem;
        padding: 0 2rem;

    }

          @media screen and (max-width:640px){

        font-size:1.3rem;
        margin-bottom:1rem;
        padding: 0 6rem;

    }

     @media screen and (max-width:540px){

        font-size:1.3rem;
        margin-bottom:1rem;
        padding: 0 4rem;

    }
`

export default Title


