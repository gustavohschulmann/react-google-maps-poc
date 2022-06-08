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

    transition: all 0.3s ease-out;
`;

export const SearchBarContainer = styled.div`
    grid-area: SEARCHBAR;

    display: flex;

    justify-content: center;
    align-items: center;
`;

export const MenuContentContainer = styled.div`
    grid-area: MENUCONTENTCONTAINER;

    display: flex;

    justify-content: center;
    align-items: center;
`;
