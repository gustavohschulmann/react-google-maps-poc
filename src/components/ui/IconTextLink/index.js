import React from "react";

import { Container, StyledLinkSubTitle } from "./styles";

const IconTextLink = ({ children, text }) => {
    return (
        <Container>
            {children}
            <StyledLinkSubTitle>{text}</StyledLinkSubTitle>
        </Container>
    );
};

export default IconTextLink;
