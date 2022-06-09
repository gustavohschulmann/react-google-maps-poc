import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";
import IconTextLink from "../../../components/ui/IconTextLink";

import { CircleTitleContainer, Container, MapPolicyContainer, StyledBookIcon, StyledMapIcon } from "./styles";

const Height = () => {
    return (
        <Container>
            <CircleTitleContainer>
                <CircleTitle text="Height (Metres / Stories): HT 76.0" color="#F9C0F6" />
            </CircleTitleContainer>
            <MapPolicyContainer>
                <IconTextLink text="Map">
                    <StyledMapIcon />
                </IconTextLink>
                <IconTextLink text="Policy">
                    <StyledBookIcon />
                </IconTextLink>
            </MapPolicyContainer>
            <CircleTitleContainer>
                <CircleTitle text="Height (Metres / Stories): None" color="#F9C0F6" />
            </CircleTitleContainer>
        </Container>
    );
};

export default Height;
