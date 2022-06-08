import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MenuActions from "../../../store/actions/menu";

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

const SideBar = ({ activeMenu, toggleMenu }) => {
    return (
        <Container>
            <SideBarButton onClick={() => toggleMenu("INFO")}>
                <InfoIcon activeMenu={activeMenu === "INFO" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("HOME")}>
                <HouseIcon activeMenu={activeMenu === "HOME" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("BANK")}>
                <BankIcon activeMenu={activeMenu === "BANK" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("CHARTBAR")}>
                <ChartBarIcon activeMenu={activeMenu === "CHARTBAR" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("CLIPBOARDTEXT")}>
                <ClipboardTextIcon activeMenu={activeMenu === "CLIPBOARDTEXT" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("BUILDINGS")}>
                <BuildingsIcon activeMenu={activeMenu === "BUILDINGS" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("MAP")}>
                <MapPinIcon activeMenu={activeMenu === "MAP" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("TARGET")}>
                <TargetIcon activeMenu={activeMenu === "TARGET" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("DROP")}>
                <DropIcon activeMenu={activeMenu === "DROP" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("LEAF")}>
                <LeafIcon activeMenu={activeMenu === "LEAF" ? true : false} />
            </SideBarButton>
            <SideBarButton onClick={() => toggleMenu("CROWN")}>
                <CrownSimpleIcon activeMenu={activeMenu === "CROWN" ? true : false} />
            </SideBarButton>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    activeMenu: state.menu.activeMenu,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(MenuActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
