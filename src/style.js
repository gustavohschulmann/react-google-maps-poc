import styled, { createGlobalStyle } from "styled-components";

export const Layout = styled.div`
    height: 100vh;
    width: 100vw;

    display: grid;

    grid-template-columns: 78.45px auto;
    grid-template-rows: auto;

    grid-template-areas: "SIDEBAR APPCONTAINER";
`;

export const GlobalStyle = createGlobalStyle`
    body, html { 
        font-family: 'Lato', sans-serif;
    }
`;
