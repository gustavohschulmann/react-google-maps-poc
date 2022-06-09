import React, { useState } from "react";
import SimpleTable from "../../components/ui/SimpleTable";
import TitleBarWithSwitch from "../../components/ui/TitleBarWithSwitch";

import { Container, MarketRegionContainer, OverflowContainer, RadioContainer, StyledHouseLineIcon, StyledRadio, StyledSubTitle, StyledTitle } from "./styles";

import { MLS, CMHCAverage, CMHCAbsorption } from "./mockedData";
import { Radio } from "antd";
import IconText from "../../components/ui/IconText";

const HomeMenu = () => {
    const [value, setValue] = useState(1);

    const onChange = (e) => {
        console.log("radio checked", e.target.value);
        setValue(e.target.value);
    };

    return (
        <Container>
            <StyledTitle>Market Comparables</StyledTitle>
            <RadioContainer>
                <Radio.Group onChange={onChange} value={value}>
                    <StyledRadio value={1}>Sales</StyledRadio>
                    <StyledRadio value={2}>Rental</StyledRadio>
                </Radio.Group>
            </RadioContainer>
            <MarketRegionContainer>
                <IconText
                    text={
                        <>
                            <b>Neighbourhood:</b> Willowdale
                        </>
                    }
                >
                    <StyledHouseLineIcon />
                </IconText>
                <StyledSubTitle>
                    <b>Census Subdivision:</b> Toronto
                </StyledSubTitle>
            </MarketRegionContainer>
            <OverflowContainer>
                <TitleBarWithSwitch title="MLS Price" withSwitch={false} />
                <SimpleTable columns={MLS.columns} rows={MLS.rows} />
                <TitleBarWithSwitch title="CMHC Average Sold Price" withSwitch={false} />
                <SimpleTable columns={CMHCAverage.columns} rows={CMHCAverage.rows} columnMLeft="100px" columnGap="12px" />
                <TitleBarWithSwitch title="CMHC Absorption (By Type)" withSwitch={false} />
                <SimpleTable columns={CMHCAbsorption.columns} rows={CMHCAbsorption.rows} columnMLeft="75px" columnGap="25px" />
            </OverflowContainer>
        </Container>
    );
};

export default HomeMenu;
