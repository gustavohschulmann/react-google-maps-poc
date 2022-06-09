import React from "react";

import { Container, ColoredCircle, StyledSubTitle } from "./styles";

const CircleTitle = ({ text, color }) => {
    return (
        <Container>
            <ColoredCircle color={color} />
            <StyledSubTitle>{text}</StyledSubTitle>
        </Container>
    );
};

export default CircleTitle;
