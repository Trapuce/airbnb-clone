
import * as React from 'react';
import Map from 'react-map-gl/maplibre';

export default function MapCard(){
    return(
      <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: "100%", height:"calc(100vh-77px)"}}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=iWI0vCIBJdfxkZ970ndk"
    />
    )
}