/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeoJSONBbox } from './GeoJSONBbox';
import type { GeoJSONPolygon3D } from './GeoJSONPolygon3D';
import type { GISGeoBuilding } from './GISGeoBuilding';
export type BuildingMapGeoJSON = {
    id: number;
    type?: string;
    bbox: GeoJSONBbox;
    geometry: GeoJSONPolygon3D;
    properties: GISGeoBuilding;
};

