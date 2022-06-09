import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";
import IconTextLink from "../../../components/ui/IconTextLink";
import LegendCollapse from "../../../components/ui/LegendCollapse";

import { Container, MixedUseAreaContainer, MapPolicyContainer, StyledMapIcon, StyledBookIcon } from "./styles";

const SecondaryPlan = () => {
    return (
        <Container>
            <MixedUseAreaContainer>
                <CircleTitle text="41 - Downtown Plan" color="#fff" />
            </MixedUseAreaContainer>
            <MapPolicyContainer>
                <IconTextLink text="Map">
                    <StyledMapIcon />
                </IconTextLink>
                <IconTextLink text="Policy">
                    <StyledBookIcon />
                </IconTextLink>
            </MapPolicyContainer>
            <MixedUseAreaContainer>
                <CircleTitle text="39 King - Parliament" color="#fff" />
            </MixedUseAreaContainer>
            <MapPolicyContainer>
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

export default SecondaryPlan;
