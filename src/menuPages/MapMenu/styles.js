import styled from "styled-components";

import { Typography } from "antd";

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

    scrollbar-color: red;
`;

export const StyledTitle = styled(Title)`
    margin: 15px 0px 0px 24px;

    &.ant-typography {
        color: #fff;
        font-size: 20px;
        font-weight: 400;
    }
`;
