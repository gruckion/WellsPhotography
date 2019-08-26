import { compose, withProps } from "recompose";
import * as React from "react";
import "./map.css";

import {
    GoogleMap,
    Marker,
    withGoogleMap,
    withScriptjs
} from "react-google-maps";

export const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div className="loadingElementContainer" />,
        containerElement: <div className="containingElementContainer" />,
        mapElement: <div className="mapElementContainer" />
    }),
    withScriptjs,
    withGoogleMap
)((props: any) =>
    (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 51.3618195, lng: 0.5295269000000644 }}
        >
            <Marker position={{ lat: 51.3618195, lng: 0.5295269000000644 }} />
        </GoogleMap>
));
