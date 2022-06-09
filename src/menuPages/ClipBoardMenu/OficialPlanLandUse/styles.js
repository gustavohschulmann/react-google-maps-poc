import styled from "styled-components";

import { MapTrifold, Book } from "phosphor-react";

import { Typography, Collapse } from "antd";

const { Panel } = Collapse;

const { Title } = Typography;

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    gap: 5px;

    width: 100%;
`;

export const MixedUseAreaContainer = styled.div`
    display: flex;

    margin-left: 37px;

    width: 100%;
`;

export const RedCircle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 100px;
    border: 1px solid white;
    background-color: #cc526c;
`;

export const StyledSubTitle = styled(Title)`
    margin-left: ${(props) => (props.mLeft ? props.mLeft : "10px")};
    margin-top: ${(props) => (props.mTop ? props.mTop : "5px")};

    &.ant-typography {
        color: #fff;
        font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
        font-weight: 400;
    }
`;

export const MapPolicyContainer = styled.div`
    display: flex;

    margin-left: 75px;
    width: 100%;
`;

export const StyledMapIcon = styled(MapTrifold)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;

export const StyledBookIcon = styled(Book)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    margin-left: 7px;
    color: #fff;
`;

export const StyledCollapse = styled(Collapse)`
    margin-top: 8px;
    .ant-collapse-header {
        color: #fff !important;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const StyledPanel = styled(Panel)`
    &&& {
        background-color: #40464a;
    }
`;

export const LegendContainer = styled.div`
    margin: 0px 0px 0px 22px;
    display: flex;
    flex-wrap: wrap;
`;

export const LegendItemContainer = styled.div`
    max-width: 100%;
    display: flex;

    flex: 1 0 40%; /* explanation below */
    margin: 2px;

    flex-direction: row;
`;

export const StyledSquare = styled.div`
    margin-top: 4px;

    width: 12px;
    height: 12px;
    background-color: ${(props) => (props.color ? props.color : "#fff")};
`;
