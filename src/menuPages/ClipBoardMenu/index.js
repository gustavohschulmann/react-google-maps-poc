import React, { useState } from "react";
import TitleBarWithSwitch from "../../components/ui/TitleBarWithSwitch";
import OfficialPlanLandUse from "./OficialPlanLandUse";
import SecondaryPlan from "./SecondaryPlan";

import { Container, StyledTitle } from "./styles";

const ClipboardMenu = () => {
    const [openOPL, setOpenOPL] = useState(true);
    const [openSP, setOpenSP] = useState(true);

    return (
        <Container>
            <StyledTitle>Official Plan</StyledTitle>
            <TitleBarWithSwitch title="Official Plan Land Use" onSwitchChange={() => setOpenOPL(!openOPL)} />
            {openOPL && <OfficialPlanLandUse />}
            <TitleBarWithSwitch title="Secondary Plan" onSwitchChange={() => setOpenSP(!openSP)} />
            {openSP && <SecondaryPlan />}
        </Container>
    );
};

export default ClipboardMenu;
