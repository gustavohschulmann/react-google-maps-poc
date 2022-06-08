import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 383px;
    height: 100%;
    max-width: ${(props) => (props.menuOpen ? "383px" : "0")};
    transition: all 0.3s ease-out;

    background-color: #40464a;

    z-index: 12;

    box-shadow: 0.5px 0px 10px #2e2e2e;
`;
