import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
`;

export const StyledLinkSubTitle = styled(Title)`
    margin-left: 5px;
    margin-top: 5px;
    text-decoration: underline;

    &.ant-typography {
        color: #000;
        font-size: 14px;
        font-weight: 400;
    }

    &:hover {
        cursor: pointer;
    }
`;
