import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{

}


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
}

@media (max-width: 720px){
    font-size: 87.5%;

}
@media (max-width:1000px){
    font-size: 93.75%;
}

body{
   
    background: #170312;
    color: #fff;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased; 
    
 
}
button{
    cursor: pointer;
}

`;
