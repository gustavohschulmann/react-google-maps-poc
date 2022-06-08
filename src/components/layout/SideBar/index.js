import React from "react";

import {
    Container,
    SideBarButton,
    InfoIcon,
    HouseIcon,
    BankIcon,
    ChartBarIcon,
    ClipboardTextIcon,
    BuildingsIcon,
    MapPinIcon,
    TargetIcon,
    DropIcon,
    LeafIcon,
    CrownSimpleIcon,
} from "./styles";

const SideBar = () => {
    return (
        <Container>
            <SideBarButton>
                <InfoIcon />
            </SideBarButton>
            <SideBarButton>
                <HouseIcon />
            </SideBarButton>
            <SideBarButton>
                <BankIcon />
            </SideBarButton>
            <SideBarButton>
                <ChartBarIcon />
            </SideBarButton>
            <SideBarButton>
                <ClipboardTextIcon />
            </SideBarButton>
            <SideBarButton>
                <BuildingsIcon />
            </SideBarButton>
            <SideBarButton>
                <MapPinIcon />
            </SideBarButton>
            <SideBarButton>
                <TargetIcon />
            </SideBarButton>
            <SideBarButton>
                <DropIcon />
            </SideBarButton>
            <SideBarButton>
                <LeafIcon />
            </SideBarButton>
            <SideBarButton>
                <CrownSimpleIcon />
            </SideBarButton>
        </Container>
    );
};

export default SideBar;
