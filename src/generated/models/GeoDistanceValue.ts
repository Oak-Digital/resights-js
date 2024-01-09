/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GeoDistanceType } from './GeoDistanceType';
import type { GeoPoint } from './GeoPoint';
export type GeoDistanceValue = {
  distance: string;
  point: GeoPoint | string;
  distance_type?: GeoDistanceType;
};
