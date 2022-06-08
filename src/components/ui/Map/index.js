import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import React from "react";

import { Container } from "./styles";

const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBCMiPfX0U0h25UjL_SrzCuucy5AwzGQns",
    });

    const position = { lat: 43.650133147395024, lng: -79.37884909921873 };

    return (
        <Container>
            {isLoaded ? (
                <GoogleMap mapContainerStyle={{ width: "100%", height: "100%" }} center={position} zoom={15}>
                    {/* Child components, such as markers, info windows, etc. */}
                    <Marker position={position} />
                </GoogleMap>
            ) : (
                <></>
            )}
        </Container>
    );
};

export default Map;
