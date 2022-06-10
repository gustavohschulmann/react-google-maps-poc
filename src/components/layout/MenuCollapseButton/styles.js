import styled from "styled-components";

import { CaretLeft, CaretRight } from "phosphor-react";

export const Container = styled.div`
    width: 25px;
    height: 36px;

    margin-top: 65px;
    margin-left: ${(props) => (props.menuOpen ? "383px" : "0")};

    z-index: 10;
    position: absolute;

    background-color: #40464a;
`;

export const Button = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #54585c;
        cursor: pointer;
    }
`;

export const ArrowLeft = styled(CaretLeft)`
    height: 20px;
    width: 20px;

    color: #fff;
`;

export const ArrowRight = styled(CaretRight)`
    height: 20px;
    width: 20px;

    color: #fff;
`;
