import React, { useState } from "react";
import Map from "../../ui/Map";
import CollapsibleMenu from "../CollapsibleMenu";
import MenuCollapseButton from "./MenuCollapseButton";

import { Container } from "./styles";

const AppContainer = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <Container>
            {menuOpen && <CollapsibleMenu />}
            <MenuCollapseButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Map />
        </Container>
    );
};

export default AppContainer;
