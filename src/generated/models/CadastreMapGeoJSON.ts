/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CadastreMap } from './CadastreMap';
import type { GeoJSONBbox } from './GeoJSONBbox';
import type { GeoJSONPolygon } from './GeoJSONPolygon';
export type CadastreMapGeoJSON = {
  id: number;
  type?: string;
  bbox: GeoJSONBbox;
  geometry: GeoJSONPolygon;
  properties: CadastreMap;
};
