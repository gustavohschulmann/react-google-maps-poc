import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    min-width: ${(props) => (props.menuOpen ? "383px" : "0")};
    max-width: ${(props) => (props.menuOpen ? "383px" : "0")};
    height: 100%;
    /* transition: all 1s ease-in-out; */

    background-color: #40464a;

    z-index: 12;

    box-shadow: 0.5px 0px 10px #2e2e2e;
`;
