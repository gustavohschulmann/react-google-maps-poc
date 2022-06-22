import styled from "styled-components";
import { Info, House, Bank, ChartBar, ClipboardText, Buildings, MapPin, Target, Drop, Leaf, CrownSimple } from "phosphor-react";
import { css } from "styled-components";

export const Container = styled.ul`
    grid-area: SIDEBAR;

    margin: 0px;
    padding: 8px;

    z-index: 12;
    background: #2f3436;

    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SideBarButton = styled.li`
    border-radius: 50%;

    height: 48px;
    width: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    & + li {
        margin-top: 8px;
    }

    &:hover {
        background-color: #54585c;
        cursor: pointer;
    }
`;

const sharedIconStyle = css`
    height: 24px;
    width: 24px;

    color: ${(props) => (props.activeMenu ? "#0987b5" : "#fff")};
`;

export const InfoIcon = styled(Info)`
    ${sharedIconStyle}
`;
export const HouseIcon = styled(House)`
    ${sharedIconStyle}
`;
export const BankIcon = styled(Bank)`
    ${sharedIconStyle}
`;
export const ChartBarIcon = styled(ChartBar)`
    ${sharedIconStyle}
`;
export const ClipboardTextIcon = styled(ClipboardText)`
    ${sharedIconStyle}
`;
export const BuildingsIcon = styled(Buildings)`
    ${sharedIconStyle}
`;
export const MapPinIcon = styled(MapPin)`
    ${sharedIconStyle}
`;
export const TargetIcon = styled(Target)`
    ${sharedIconStyle}
`;
export const DropIcon = styled(Drop)`
    ${sharedIconStyle}
`;
export const LeafIcon = styled(Leaf)`
    ${sharedIconStyle}
`;
export const CrownSimpleIcon = styled(CrownSimple)`
    ${sharedIconStyle}
`;
