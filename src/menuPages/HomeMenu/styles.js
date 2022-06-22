import styled from "styled-components";

import { Typography, Radio } from "antd";
import { HouseLine } from "phosphor-react";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    width: 100%;
    height: 100%;
    gap: 15px;
`;

export const OverflowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    width: 100%;
    height: 100%;
    gap: 15px;

    overflow-y: visible;
    overflow-x: hidden;
`;

export const MarketRegionContainer = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-left: 20px;
`;

export const StyledTitle = styled(Title)`
    margin: 15px 0px 0px 24px;

    &.ant-typography {
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
`;

export const RadioContainer = styled.div`
    display: flex;
    align-content: flex-start;
    margin-left: 25px;
`;

export const StyledRadio = styled(Radio)`
    color: #fff;
    .ant-radio-checked .ant-radio-inner:after {
        background-color: #0987b5;
    }
    .ant-radio-checked .ant-radio-inner {
        border-color: #0b4422 !important ;
    }
`;

export const StyledHouseLineIcon = styled(HouseLine)`
    height: 25px;
    width: 25px;
    color: #fff;
`;

export const StyledSubTitle = styled(Title)`
    margin-left: 30px;
    margin-top: 5px;

    &.ant-typography {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
`;
