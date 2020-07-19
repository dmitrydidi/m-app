import * as React from "react";
// libs
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  WithScriptjsProps,
  WithGoogleMapProps,
} from "react-google-maps";
// config
import { mapStyle, defaultCenter } from "./config";
// views
import { MapElement, Container } from "./views";

interface IMapOptions {
  styles: any;
  streetViewControl: boolean;
  mapTypeControl: boolean;
}

const mapOptions: IMapOptions = {
  styles: mapStyle,
  streetViewControl: false,
  mapTypeControl: false,
};

const defaultMapOptions = {
  fullscreenControl: false,
  geolocation: true,
};

const GoogleMaps = withScriptjs<WithScriptjsProps & WithGoogleMapProps>(
  withGoogleMap(({ children }) => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={defaultCenter}
      options={mapOptions}
      defaultOptions={defaultMapOptions}
    >
      {children}
    </GoogleMap>
  ))
);

const Map: React.FC = ({ children }) => {
  return (
    <Container>
      <GoogleMaps
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDqE6YceabLW1KKOegmzFeN3aanGY1p9h4`}
        loadingElement={<MapElement />}
        containerElement={<MapElement />}
        mapElement={<MapElement />}
      >
        {children}
      </GoogleMaps>
    </Container>
  );
};

export default Map;
