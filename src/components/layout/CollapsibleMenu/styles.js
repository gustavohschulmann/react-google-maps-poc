import styled from "styled-components";

export const Container = styled.div`
    display: flex;

    width: 100%;

    display: grid;

    grid-template-columns: 1fr;
    grid-template-rows: 60px auto;

    grid-template-areas:
        "SEARCHBAR"
        "MENUCONTENTCONTAINER";

    min-width: ${(props) => (props.menuOpen ? "383px" : "0")};
    max-width: ${(props) => (props.menuOpen ? "383px" : "0")};
    height: 100%;
    /* transition: all 1s ease-in-out; */

    background-color: #40464a;

    z-index: 10;

    position: absolute;

    box-shadow: 0.5px 0px 10px #2e2e2e;
`;

export const SearchBarContainer = styled.div`
    grid-area: SEARCHBAR;

    display: flex;

    justify-content: center;
    align-items: center;
`;

export const MenuContentContainer = styled.div`
    grid-area: MENUCONTENTCONTAINER;

    max-height: 91vh;

    display: flex;

    justify-content: center;
    align-items: center;
`;
