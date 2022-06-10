import React from "react";
import { connect } from "react-redux";
import ClipBoardMenu from "../../../menuPages/ClipBoardMenu";
import HomeMenu from "../../../menuPages/HomeMenu";
import MapMenu from "../../../menuPages/MapMenu";
import OtherMenu from "../../../menuPages/OtherMenu";
import SearchBar from "../../ui/SearchBar";

import { Container, SearchBarContainer, MenuContentContainer } from "./styles";
import { StandaloneSearchBox } from "@react-google-maps/api";

const CollapsibleMenu = ({ activeMenu, markers, setMarkers, map, menuOpen }) => {
    const [searchBox, setSearchBox] = React.useState({});

    // const onKeyDown = (event) => {
    //     if (event.key === "Enter") {
    //         toggleSearchText(event.target.value);
    //     }
    // };

    const onLoad = (ref) => {
        console.log(ref);
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        console.log(places);
        const place = places[0];
        const location = {
            lat: place?.geometry?.location?.lat() || 0,
            lng: place?.geometry?.location?.lng() || 0,
        };
        setMarkers([...markers, location]);
        map?.panTo(location);
    };

    return (
        menuOpen && (
            <Container menuOpen={menuOpen}>
                <SearchBarContainer>
                    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                        <SearchBar />
                    </StandaloneSearchBox>
                </SearchBarContainer>
                <MenuContentContainer>
                    {/* I know that here, for best practices, I could use a different approach
                 to not be playing with strings values, but I had just a few experience before
                 with redux, so I didn`t had much time to dive in this time and find a better
                 solution :) */}
                    {activeMenu === "HOME" && <HomeMenu />}
                    {activeMenu === "CLIPBOARDTEXT" && <ClipBoardMenu />}
                    {activeMenu === "MAP" && <MapMenu />}
                    {activeMenu !== "HOME" && activeMenu !== "CLIPBOARDTEXT" && activeMenu !== "MAP" && <OtherMenu />}
                </MenuContentContainer>
            </Container>
        )
    );
};

const mapStateToProps = (state) => ({
    activeMenu: state.menu.activeMenu,
});

export default connect(mapStateToProps)(CollapsibleMenu);
