import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";
import IconTextLink from "../../../components/ui/IconTextLink";

import { CircleTitleContainer, Container, MapPolicyContainer, StyledBookIcon, StyledMapIcon } from "./styles";

const PolicyArea = () => {
    return (
        <Container>
            <CircleTitleContainer>
                <CircleTitle text="Policy Area: 1" color="#DFB4B1" />
            </CircleTitleContainer>
            <MapPolicyContainer>
                <IconTextLink text="Map">
                    <StyledMapIcon />
                </IconTextLink>
                <IconTextLink text="Policy">
                    <StyledBookIcon />
                </IconTextLink>
            </MapPolicyContainer>
        </Container>
    );
};

export default PolicyArea;
