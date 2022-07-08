import styled from "styled-components";

import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
    display: flex;
`;

export const ColoredCircle = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 100px;
    border: 1px solid white;
    background-color: ${(props) => (props.color ? props.color : "#000")};
`;

export const StyledSubTitle = styled(Title)`
    margin-left: ${(props) => (props.mLeft ? props.mLeft : "10px")};
    margin-top: ${(props) => (props.mTop ? props.mTop : "5px")};

    &.ant-typography {
        color: #000;
        font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
        font-weight: 400;
    }
`;
