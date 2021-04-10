import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers: [number, number][] = [
  [-58.3816, -34.6037],
  [-68.1193, -16.4897],
  [-47.8825, -15.7942],
  [-70.6693, -33.4489],
  [-74.0721, 4.711],
  [-78.4678, -0.1807],
  [-58.1551, 6.8013],
  [-57.5759, -25.2637],
  [-55.2038, 5.852],
  [-56.1645, -34.9011],
  [-66.9036, 10.4806],
  [-77.0428, -12.0464],
];

const MapChart = () => {
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147,
      }}
    >
      <Sphere id="world" fill="#FFFFFF" stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#EAEAEC"
              stroke="#D6D6DA"
            />
          ))
        }
      </Geographies>
      {markers.map((coordinates, i) => (
        <Marker key={i} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default MapChart;
