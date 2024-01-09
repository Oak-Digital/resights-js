/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertySubTypeEnum } from './PropertySubTypeEnum';
import type { PropertyTypeEnum } from './PropertyTypeEnum';
export type TransactionPropertiesOverviewResponse = {
  type: PropertyTypeEnum;
  sub_type: PropertySubTypeEnum;
  ownership_code?: number;
  description: string;
  primary_usage?: number;
  construction_year?: number;
  rebuilding_year?: number;
  floor_area_br18?: number;
  constructed_share_br18?: number;
  centroid: string;
};
