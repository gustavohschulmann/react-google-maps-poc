import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
`;

export const StyledSubTitle = styled(Title)`
    margin-left: 5px;
    margin-top: 5px;

    &.ant-typography {
        color: #000;
        font-size: 16px;
        font-weight: 400;
    }
`;
