import React from "react";

import { StyledQuestionIcon, StyledSwitch, StyledSwitchTitle, StyledSwitchTitleContainer, SwitchContainer } from "./styles";

const TitleBarWithSwitch = ({ title, withSwitch = true, onSwitchChange }) => {
    return (
        <SwitchContainer>
            <StyledSwitchTitleContainer>
                <StyledSwitchTitle>{title}</StyledSwitchTitle>
                <StyledQuestionIcon />
            </StyledSwitchTitleContainer>
            {withSwitch && <StyledSwitch size="small" defaultChecked onChange={onSwitchChange} />}
        </SwitchContainer>
    );
};

export default TitleBarWithSwitch;
