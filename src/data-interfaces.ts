import * as geojson from 'geojson';

 
export interface AppConfig {
    color: number[],
    colors: number[][],
    title: string,
    dataSamples: DataSampleUrls[],
    highlightColor: number[],
    incomingHighlightColor: number[],
    initialLoopTimeMinutes: number,
    initialTrailLength: number,
    initialViewport: Viewport,
    mapboxStyle: string,
    mapboxToken: string,
    nodeNameLabel: string,
    nodeIdLabel: string,
    nodeLabelOutgoing: string,
    nodeLabelIncoming: string,
    nodeCount: string
};

export interface AppProps { };
export interface AppState {
    appConfig: AppConfig,
    dataSampleIdx: number,
    friendlyName: string,
    friendlyTime: string,
    hideInfoBox: boolean,
    highlightedOutgoingTrips: string[],
    highlightedIncomingTrips: string[],
    loopLength: number,
    loopTimeMinutes: number,
    nodes: geojson.FeatureCollection<geojson.Point> | null,
    nodeList: string[],
    percentThroughLoop: number,
    popupInfo: geojson.Feature<geojson.Point> | null,
    startDate: Date,
    timeMultiplier: number,
    trailLength: number,
    trips: Trip[] | null,
    viewport: Viewport
 };

 export interface DeckglOverlayProps {
     color: number[],
     handleOnHover: (info: any) => void,
     highlightColor: number[],
     incomingHighlightColor: number[],
     highlightedOutgoingTrips: string[],
     highlightedIncomingTrips: string[],
     initialViewState: Viewport,
     loopLength: number,
     loopTimeMilliseconds: number,
     nodes: geojson.FeatureCollection<geojson.Point>,
     timestampOffset: number,
     trips: Trip[] | null,
     trailLength: number,
     viewport: any
 }
 export interface DeckflOverlayState {
    currentTime: number
 }

export interface DataSampleUrls {
    title: string,
    tripsUrl: string,
    geoJsonUrl: string,
    nodeListUrl: string,
    initialPartialViewport: PartialViewport
}

export interface KnownUrlParameters {
    dataSampleIdx: number | null,
    loopTime: number | null,
    trailLength: number | null,
    highlightedOutgoingTrips: string[] | null,
    highlightedIncomingTrips: string[] | null
}

export interface PartialViewport {
    latitude: number,
    longitude: number,
    zoom: number
}

export interface TripContainer {
    startTimestamp: string,
    loopLength: number,
    timeMultiplier: number,
    friendlyName?: string,
    trips: Trip[]
}

export interface Trip {
    //nodes: string[],
    start_id: string,
    end_id: string,
    startTime: number,
    endTime: number,
    color?: number[],
    segments: Waypoint[]
}

export interface Viewport {
    latitude: number,
    longitude: number,
    zoom: number
    maxZoom: number,
    pitch: number,
    bearing: number,
    width?: number,
    height?: number
}

export interface Waypoint {
    coordinates: number[],
    timestamp: number,
    tripId: string
}