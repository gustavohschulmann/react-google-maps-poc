import styled from "styled-components";

import { Collapse } from "antd";

const { Panel } = Collapse;

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
