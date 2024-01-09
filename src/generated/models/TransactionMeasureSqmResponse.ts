/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LatestTradeTypeEnum } from './LatestTradeTypeEnum';
export type TransactionMeasureSqmResponse = {
  value: number;
  lower: number;
  upper: number;
  type: LatestTradeTypeEnum;
  land_area?: number;
  floor_area_br18?: number;
  byg038_area_building_total?: number;
  tinglyst_area?: number;
  unit_area?: number;
  enh026_area_unit_total?: number;
};
