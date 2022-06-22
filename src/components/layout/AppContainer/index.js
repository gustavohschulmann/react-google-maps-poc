import React, { useState } from "react";
import CollapsibleMenu from "../CollapsibleMenu";
import MenuCollapseButton from "../MenuCollapseButton";

import { AvatarContainer, AvatarDivContainer, Container, MYPAvatarContainer, MYPAvatarDivContainer, StyledAvatar, StyledMYPAvatar, StyledUserIcon } from "./styles";

import mypLogo from "../../../assets/img/logoFox.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const AppContainer = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const [map, setMap] = React.useState({});
    const [markers, setMarkers] = React.useState([]);
    const API_KEY = "AIzaSyBCMiPfX0U0h25UjL_SrzCuucy5AwzGQns";

    const position = { lat: 43.650133147395024, lng: -79.37884909921873 };

    const onMapLoad = (map) => {
        setMap(map);
    };

    const mapOptions = {
        mapTypeControlOptions: {
            position: 3,
        },
        zoomControl: true,
        zoomControlOptions: {
            position: 7,
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: 9,
        },
        fullscreenControl: true,
    };

    return (
        <Container>
            <LoadScript googleMapsApiKey={API_KEY} libraries={["places"]}>
                <GoogleMap onLoad={onMapLoad} mapContainerStyle={{ width: "100%", height: "100%" }} center={position} zoom={15} options={mapOptions}>
                    <CollapsibleMenu menuOpen={menuOpen} setMarkers={setMarkers} map={map} markers={markers} />
                    <MenuCollapseButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    {markers.map((marker, index) => (
                        <Marker key={index} position={marker} />
                    ))}
                </GoogleMap>
            </LoadScript>
            <AvatarDivContainer>
                <AvatarContainer>
                    <StyledAvatar icon={<StyledUserIcon />} />
                </AvatarContainer>
            </AvatarDivContainer>
            <MYPAvatarDivContainer>
                <MYPAvatarContainer>
                    <a href="https://www.mapyourproperty.com" target="_blank" rel="noreferrer">
                        <StyledMYPAvatar src={mypLogo} />
                    </a>
                </MYPAvatarContainer>
            </MYPAvatarDivContainer>
        </Container>
    );
};

export default AppContainer;
