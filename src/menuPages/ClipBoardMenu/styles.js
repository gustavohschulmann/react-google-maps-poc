import styled from "styled-components";

import { Question } from "phosphor-react";

import { Typography, Switch } from "antd";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;

    width: 100%;
    height: 100%;
    gap: 15px;
`;

export const SwitchContainer = styled.div`
    display: flex;

    background-color: #6c7174;
    align-content: center;
    justify-content: space-between;

    width: 100%;
    height: 45px;
`;

export const StyledTitle = styled(Title)`
    margin: 15px 0px 0px 24px;

    &.ant-typography {
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
`;

export const StyledSwitchTitleContainer = styled.div`
    display: flex;

    justify-content: space-between;
    gap: 3px;

    margin-top: 8px;
`;

export const StyledSwitchTitle = styled(Title)`
    align-content: center;
    margin-left: 26px;
    margin-top: 5px;
    width: 100%;

    &.ant-typography {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
    }
`;

export const StyledQuestionIcon = styled(Question)`
    height: 25px;
    width: 25px;

    margin-top: 3px;
    color: #fff;
`;

export const StyledSwitch = styled(Switch)`
    margin-top: 15px;
    margin-right: 15px;
    background-color: #55b570;
`;
