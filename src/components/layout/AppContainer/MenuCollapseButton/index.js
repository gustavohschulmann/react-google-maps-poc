import React from "react";

import { Container, MenuButtonContainer, Button, ArrowLeft, ArrowRight } from "./styles";

const MenuCollapseButton = ({ menuOpen, setMenuOpen }) => {
    const handleOnClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <MenuButtonContainer>
            <Container>
                <Button onClick={handleOnClick}>{menuOpen ? <ArrowLeft /> : <ArrowRight />}</Button>
            </Container>
        </MenuButtonContainer>
    );
};

export default MenuCollapseButton;
