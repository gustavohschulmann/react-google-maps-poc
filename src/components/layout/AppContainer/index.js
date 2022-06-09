import React, { useState } from "react";
import Map from "../../ui/Map";
import CollapsibleMenu from "../CollapsibleMenu";
import MenuCollapseButton from "../MenuCollapseButton";

import { AvatarContainer, AvatarDivContainer, Container, MYPAvatarContainer, MYPAvatarDivContainer, StyledAvatar, StyledMYPAvatar, StyledUserIcon } from "./styles";

import mypLogo from "../../../assets/img/MYPIcon.jpeg";

const AppContainer = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    return (
        <Container>
            <CollapsibleMenu menuOpen={menuOpen} />
            <MenuCollapseButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Map />
            <AvatarDivContainer>
                <AvatarContainer>
                    <StyledAvatar icon={<StyledUserIcon />} />
                </AvatarContainer>
            </AvatarDivContainer>
            <MYPAvatarDivContainer>
                <MYPAvatarContainer>
                    <a href="https://www.mapyourproperty.com" target="_blank">
                        <StyledMYPAvatar src={mypLogo} />
                    </a>
                </MYPAvatarContainer>
            </MYPAvatarDivContainer>
        </Container>
    );
};

export default AppContainer;
