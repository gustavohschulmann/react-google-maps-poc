import styled from "styled-components";

import { Collapse } from "antd";

const { Panel } = Collapse;

export const StyledCollapse = styled(Collapse)`
    margin-top: 8px;
    .ant-collapse-header {
        color: #000 !important;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const StyledPanel = styled(Panel)`
    &&& {
        background-color: #e7ecef;
    }
`;
