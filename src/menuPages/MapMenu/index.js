import React, { useState } from "react";
import TitleBarWithSwitch from "../../components/ui/TitleBarWithSwitch";
import FormerByLaw from "./FormerByLaw";
import Height from "./Height";
import LotCoverage from "./LotCoverage";
import PolicyArea from "./PolicyArea";
// import OfficialPlanLandUse from "./OficialPlanLandUse";
// import SecondaryPlan from "./SecondaryPlan";

import { Container, OverflowContainer, StyledTitle } from "./styles";
import ZoningByLaw from "./ZoningByLaw";

const MapMenu = () => {
    const [openF, setOpenF] = useState(true);
    const [openZ, setOpenZ] = useState(true);
    const [openL, setOpenL] = useState(true);
    const [openH, setOpenH] = useState(true);
    const [openP, setOpenP] = useState(true);

    return (
        <Container>
            <StyledTitle>Zoning By-Law</StyledTitle>
            <OverflowContainer>
                <TitleBarWithSwitch title="Former By-Law" onSwitchChange={() => setOpenF(!openF)} />
                {openF && <FormerByLaw />}
                <TitleBarWithSwitch title="Zoning By-Law" onSwitchChange={() => setOpenZ(!openZ)} />
                {openZ && <ZoningByLaw />}
                <TitleBarWithSwitch title="Lot Coverage" onSwitchChange={() => setOpenL(!openL)} />
                {openL && <LotCoverage />}
                <TitleBarWithSwitch title="Height" onSwitchChange={() => setOpenH(!openH)} />
                {openH && <Height />}
                <TitleBarWithSwitch title="Policy Area" onSwitchChange={() => setOpenP(!openP)} />
                {openP && <PolicyArea />}
            </OverflowContainer>
        </Container>
    );
};

export default MapMenu;
