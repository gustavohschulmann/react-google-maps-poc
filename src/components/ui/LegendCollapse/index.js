import React from "react";

import { StyledCollapse, StyledPanel } from "./styles";

const LegendCollapse = () => {
    return (
        <StyledCollapse bordered={false} expandIconPosition="right">
            <StyledPanel header="Legend:"></StyledPanel>
        </StyledCollapse>
    );
};

export default LegendCollapse;
