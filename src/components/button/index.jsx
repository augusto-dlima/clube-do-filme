import React from "react";
import styled from "styled-components";

const Button = ({title,functions,opacity}) =>{


return(

    <>

    {opacity?<Btn style={{opacity:0.7}} onClick={()=>{functions()}}>{title}</Btn> : <Btn onClick={()=>{functions()}}>{title}</Btn>}
    
    
    </>


)


}


const Btn = styled.button`

padding: 1rem;
width:100%;
background-color: ${(props) => props.theme.backgroundBody};
font-family:${(props) => props.theme.titleList};
transition: 0.5s ease-in-out;
border:none;
color:${(props) => props.theme.fontColor};
 &:hover{
 
 background-color: ${(props) => props.theme.fontAccentColor};
 color:#fff;
 cursor:pointer;

 }



`

export default Button