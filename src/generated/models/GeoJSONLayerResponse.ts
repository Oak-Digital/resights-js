/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CoordinateReferenceSystem } from './CoordinateReferenceSystem';
import type { GeoJSONFeatureModel } from './GeoJSONFeatureModel';
export type GeoJSONLayerResponse = {
    type: 'FeatureCollection';
    features: Array<GeoJSONFeatureModel>;
    totalFeatures?: number;
    numberMatched?: number;
    numberReturned?: number;
    crs?: CoordinateReferenceSystem;
};

