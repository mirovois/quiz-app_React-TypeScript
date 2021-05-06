import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* html{
        height:100%
    } */

    body{
        background-color:#f0f0f0;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    *{
        box-sizing:border-box;
        padding: 0;
        margin:0;

    }
`