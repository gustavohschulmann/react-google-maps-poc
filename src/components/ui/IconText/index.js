import React from "react";

import { Container, StyledSubTitle } from "./styles";

const IconText = ({ children, text }) => {
    return (
        <Container>
            {children}
            <StyledSubTitle>{text}</StyledSubTitle>
        </Container>
    );
};

export default IconText;
