import React from "react";
import OfficialPlanLandUse from "./OficialPlanLandUse";

import { Container, SwitchContainer, StyledTitle, StyledSwitchTitle, StyledQuestionIcon, StyledSwitchTitleContainer, StyledSwitch } from "./styles";

const ClipboardMenu = () => {
    return (
        <Container>
            <StyledTitle>Official Plan</StyledTitle>
            <SwitchContainer>
                <StyledSwitchTitleContainer>
                    <StyledSwitchTitle>Official Plan Land Use</StyledSwitchTitle>
                    <StyledQuestionIcon />
                </StyledSwitchTitleContainer>
                <StyledSwitch size="small" defaultChecked />
            </SwitchContainer>
            <OfficialPlanLandUse />
            <SwitchContainer>
                <StyledSwitchTitleContainer>
                    <StyledSwitchTitle>Secondary Plan</StyledSwitchTitle>
                    <StyledQuestionIcon />
                </StyledSwitchTitleContainer>
                <StyledSwitch size="small" defaultChecked />
            </SwitchContainer>
        </Container>
    );
};

export default ClipboardMenu;
