/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LatestTradeTypeEnum } from './LatestTradeTypeEnum';
export type TradeParametersSqm = {
  /**
   * Short hand field for first available SQM-price. Generally `floor_area_br18` is preferred. However, for agricultural properties, `land_area` is used, while for condominiums `unit_area` is used.
   */
  sqm_price?: number;
  /**
   * The attribute that `sqm_price` is based on.
   */
  type?: LatestTradeTypeEnum;
  land_area?: number;
  floor_area_br18?: number;
  byg038_area_building_total?: number;
  tinglyst_area?: number;
  unit_area?: number;
  enh026_area_unit_total?: number;
};
