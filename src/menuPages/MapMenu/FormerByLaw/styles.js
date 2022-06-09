import styled from "styled-components";
import { Typography } from "antd";

import { MapTrifold, Book } from "phosphor-react";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;

    flex-direction: column;

    width: 100%;
`;

export const MapPolicyContainer = styled.div`
    display: flex;

    gap: 10px;

    margin-left: 15px;
    width: 100%;
`;

export const StyledTitle = styled(Title)`
    margin-left: 26px;

    &.ant-typography {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const WhiteCircle = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 100px;
    border: 1px solid black;
    background-color: #fff;

    margin-top: 5px;
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
