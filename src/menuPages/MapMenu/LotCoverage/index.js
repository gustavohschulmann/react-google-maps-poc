import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";

import { Container, CircleTitleContainer } from "./styles";

const LotCoverage = () => {
    return (
        <Container>
            <CircleTitleContainer>
                <CircleTitle text="Feature not within property" color="#F9C3C0" />
            </CircleTitleContainer>
        </Container>
    );
};

export default LotCoverage;
