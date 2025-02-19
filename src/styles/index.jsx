import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`


*{

margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior: smooth;

div.swiper-button-prev,
div.swiper-button-next {
   color: ${(props)=>props.theme.fontAccentColor};
   transition:0.5s ease-in-out;
}

body::-webkit-scrollbar {
  width: 12px;              
}

body::-webkit-scrollbar-track {
  background:  ${(props)=>props.theme.backgroundBody};       
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props)=>props.theme.fontAccentColor} ;    
  border-radius: 20px;       
  border: 3px solid ${(props)=>props.theme.backgroundBody};  
}

}

body{

overflow-x:hidden;

}



`

export default GlobalStyle