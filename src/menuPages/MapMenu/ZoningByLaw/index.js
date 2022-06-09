import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";
import IconTextLink from "../../../components/ui/IconTextLink";
import LegendCollapse from "../../../components/ui/LegendCollapse";

import { Container, StyledTitle, CircleTitleContainer, IconTitleContainer, StyledBookmarIcon, StyledBookOpenIcon, StyledSquareFourIcon } from "./styles";

const ZoningByLaw = () => {
    return (
        <Container>
            <StyledTitle>By-Law 569-2013</StyledTitle>
            <CircleTitleContainer>
                {/* TODO: Include subtext */}
                <CircleTitle text="COMMERCIAL RESIDENTIAL" color="#F78F88" />
            </CircleTitleContainer>
            <IconTitleContainer>
                <IconTextLink text="Chapter">
                    <StyledBookOpenIcon />
                </IconTextLink>
                <IconTextLink text="Section">
                    <StyledBookmarIcon />
                </IconTextLink>
                <IconTextLink text="Exception">
                    <StyledSquareFourIcon />
                </IconTextLink>
            </IconTitleContainer>
            <LegendCollapse />
        </Container>
    );
};

export default ZoningByLaw;
