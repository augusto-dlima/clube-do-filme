import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


*{

margin:0;
padding:0;
box-sizing:border-box;

}

body{

transition: 0.5s ease-in-out;
background-color: ${(props)=>props.theme.backgroundBody};
overflow-x:hidden;

}



`

export default GlobalStyle