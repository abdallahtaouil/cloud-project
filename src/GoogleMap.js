import React from 'react';
import { withGoogleMap, GoogleMap as GMap, Marker } from 'react-google-maps';

const GoogleMap = withGoogleMap(props => (
  <GMap
    defaultCenter={{ lat: 40.7128, lng: -74.0060 }} // Default center coordinates 
  >
    <Marker position={{ lat: 40.7128, lng: -74.0060 }} /> 
  </GMap>
));

export default GoogleMap;