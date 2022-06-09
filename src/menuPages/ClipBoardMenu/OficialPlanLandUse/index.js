import React from "react";
import CircleTitle from "../../../components/ui/CircleTitle";
import IconTextLink from "../../../components/ui/IconTextLink";

import {
    Container,
    MixedUseAreaContainer,
    StyledSubTitle,
    MapPolicyContainer,
    StyledMapIcon,
    StyledBookIcon,
    StyledCollapse,
    StyledPanel,
    StyledSquare,
    LegendItemContainer,
    LegendContainer,
} from "./styles";

const OfficialPlanLandUse = () => {
    const legends = [
        { title: "Neightbourhoods", color: "#F8E592" },
        { title: "Other Open Space Areas", color: "#CECFCF" },
        { title: "Apartment Neightbourhoods", color: "#F1B168" },
        { title: "Institutional Areas", color: "#4C88BB" },
        { title: "Mixed Use Areas", color: "#CE5368" },
        { title: "Regeneration Areas", color: "#99725A" },
        { title: "Natural Areas", color: "#A0CF96" },
        { title: "Employment Areas", color: "#C4C4C4" },
        { title: "Parks", color: "#52B371" },
        { title: "Utility Corridors", color: "#CBCEB8" },
    ];

    return (
        <Container>
            <MixedUseAreaContainer>
                <CircleTitle text="Mixed Use Area:" color="#cc526c" />
            </MixedUseAreaContainer>
            <MapPolicyContainer>
                <IconTextLink text="Map">
                    <StyledMapIcon />
                </IconTextLink>
                <IconTextLink text="Policy">
                    <StyledBookIcon />
                </IconTextLink>
            </MapPolicyContainer>
            <StyledCollapse bordered={false} expandIconPosition="right" defaultActiveKey={["1"]}>
                <StyledPanel header="Legend:" key="1">
                    <LegendContainer>
                        {legends.map((legend) => {
                            return (
                                <LegendItemContainer>
                                    <StyledSquare color={legend.color} />
                                    <StyledSubTitle fontSize="10px" mLeft="3px" mTop="5px">
                                        {legend.title}
                                    </StyledSubTitle>
                                </LegendItemContainer>
                            );
                        })}
                    </LegendContainer>
                </StyledPanel>
            </StyledCollapse>
        </Container>
    );
};

export default OfficialPlanLandUse;
