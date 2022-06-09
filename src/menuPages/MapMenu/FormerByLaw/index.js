import React from "react";
import IconTextLink from "../../../components/ui/IconTextLink";

import { Container, MapPolicyContainer, StyledBookIcon, StyledMapIcon, StyledTitle, WhiteCircle } from "./styles";
import LegendCollapse from "../../../components/ui/LegendCollapse";

const FormerByLaw = () => {
    return (
        <Container>
            <StyledTitle>By-Law 438-86 (Toronto)</StyledTitle>
            <MapPolicyContainer>
                <WhiteCircle />
                <IconTextLink text="Map">
                    <StyledMapIcon />
                </IconTextLink>
                <IconTextLink text="Policy">
                    <StyledBookIcon />
                </IconTextLink>
            </MapPolicyContainer>
            <LegendCollapse />
        </Container>
    );
};

export default FormerByLaw;
