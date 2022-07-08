import styled from "styled-components";

import { Typography } from "antd";
import { Smiley } from "phosphor-react";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export const StyledSubTitle = styled(Title)`
    margin-top: 25px;
    &.ant-typography {
        color: #000;
        font-size: 20px;
        font-weight: 400;
    }
`;

export const StyledSmileyIcon = styled(Smiley)`
    height: 50px;
    width: 50px;
    color: #000;
`;
