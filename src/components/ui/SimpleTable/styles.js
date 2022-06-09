import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;

    flex-direction: column;
`;

export const ColumnsContainer = styled.div`
    display: flex;
    margin-left: ${(props) => (props.mLeft ? props.mLeft : "100px")};
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    gap: ${(props) => (props.gap ? props.gap : "55px")};
`;

export const RowsContainer = styled.div`
    margin-left: 25px;
    display: flex;
    flex-wrap: wrap;
`;

export const RowItemContainer = styled.div`
    max-width: 100%;
    display: flex;

    flex: 1 0 30%;

    flex-direction: row;
`;

export const StyledSubTitle = styled(Title)`
    &.ant-typography {
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        margin-top: 0px !important;
    }
`;
