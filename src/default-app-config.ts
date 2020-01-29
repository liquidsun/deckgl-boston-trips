import { AppConfig } from "./data-interfaces";

export const DEFAULT_APP_CONFIG: AppConfig = {
    color: [0, 89, 255], // blue
    colors: [
        [0, 255, 246], // blue
        [255, 235, 86], // yellow
        [255, 109, 245], // pink
        [0, 255, 119] // green
    ],
    dataSamples: [
        { 
            title: "Wednesday",
            tripsUrl: './data' + '/weekday/trips.json',
            geoJsonUrl: './data' + '/weekday/geojson-stops.json',
            nodeListUrl: './data' + '/weekday/stops-list.json',
            initialPartialViewport: {
                longitude: -71.081949,
                latitude: 42.349226,
                zoom: 12
            }
        },
        { 
            title: "Sunday",
            tripsUrl: './data' + '/weekend/trips.json',
            geoJsonUrl: './data' + '/weekend/geojson-stops.json',
            nodeListUrl: './data' + '/weekend/stops-list.json',
            initialPartialViewport: {
                longitude: -71.081949,
                latitude: 42.349226,
                zoom: 12
            }
        }
    ],
    highlightColor: [214, 21, 21],
    incomingHighlightColor:[244, 252, 3],
    initialLoopTimeMinutes: 3,
    initialTrailLength: 100,
    initialViewport: {
        longitude: -71.081949,
        latitude: 42.349226,
        zoom: 12,
        maxZoom: 20,
        pitch: 45,
        bearing: 0,
        width: 500,
        height: 500
    },
    mapboxStyle: process.env.REACT_APP_MAPBOX_STYLE!,
    mapboxToken: process.env.REACT_APP_MAPBOX_TOKEN!,
    nodeNameLabel: "Stop name:",
    nodeIdLabel:"Stop id:",
    nodeCount:"Number of trips: ",
    nodeLabelOutgoing: 'outgoing trips for stop:',
    nodeLabelIncoming: 'incoming trips for stop:',
    title: "Trips"
};