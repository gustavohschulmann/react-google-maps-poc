import React from "react";

import { Container, StyledSubTitle, ColumnsContainer, RowsContainer, RowItemContainer } from "./styles";

const SimpleTable = ({ columns, rows, columnMLeft, columnGap }) => {
    return (
        <Container>
            <ColumnsContainer mLeft={columnMLeft} gap={columnGap}>
                {columns.map((column) => {
                    return <StyledSubTitle>{column.title}</StyledSubTitle>;
                })}
            </ColumnsContainer>
            <RowsContainer>
                {rows.map((row) => {
                    return (
                        <RowItemContainer>
                            <StyledSubTitle>{row.text}</StyledSubTitle>
                        </RowItemContainer>
                    );
                })}
            </RowsContainer>
        </Container>
    );
};

export default SimpleTable;
