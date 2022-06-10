import React from "react";

import { Container, Button, ArrowLeft, ArrowRight } from "./styles";

const MenuCollapseButton = ({ menuOpen, setMenuOpen }) => {
    const handleOnClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container menuOpen={menuOpen}>
            <Button onClick={handleOnClick}>{menuOpen ? <ArrowLeft /> : <ArrowRight />}</Button>
        </Container>
    );
};

export default MenuCollapseButton;
