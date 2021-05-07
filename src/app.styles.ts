import styled, {createGlobalStyle} from 'styled-components';
import image from './assets/bgr.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%
    }

    body{
        background-image:url(${image});
        background-size:cover;
        background-repeat:no-repeat;
        background-position:center;
    }
    *{
        box-sizing:border-box;
        padding: 0;
        margin:0;
        font-family: 'Montserrat', sans-serif;
        /* letter-spacing:2px */

    }
`
export const Home = styled.div`
    height:100vh;
    padding:5%;
    display:flex;
    flex-direction:column;
    border:1px solid #000;
    align-items:center; 
    h1{
        font-family: 'Staatliches', cursive;
        letter-spacing:2px
    }
    strong{
        margin-top:1rem;
        font-size:1.3rem;
    }
    .btn__start, .btn__next{
        cursor: pointer;
        outline:none;
        padding:10px 16px;
        margin-top:0.6rem;
        font-weight:bold;
        background: #eecda3; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #eecda3, #ef629f); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #eecda3, #ef629f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border:2px solid #CFDEF3;
        border-radius:4px;
        transition:  transform 0.4s ease-in-out;
    }
    .btn__next:hover, .btn__start:hover{
        outline:whitesmoke;
        transform:scale(1.07)
    }
`
