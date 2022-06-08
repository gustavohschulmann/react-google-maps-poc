import React from "react";
import ContentContainer from "./ContentContainer";

import { Container } from "./styles";

const CollapsibleMenu = ({ menuOpen }) => {
    return <Container menuOpen={menuOpen}>{menuOpen && <ContentContainer />}</Container>;
};

export default CollapsibleMenu;
