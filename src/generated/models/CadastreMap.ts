/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PropertySubTypeEnum } from './PropertySubTypeEnum';
import type { PropertyTypeEnum } from './PropertyTypeEnum';
/**
 * Base class for a model representing and defining a Materialized View.
 */
export type CadastreMap = {
  id: number;
  sfe_number: number;
  registered_area: number;
  cadastre_number: string;
  land_lot_code: number;
  land_lot_name: string;
  type: PropertyTypeEnum;
  sub_type: PropertySubTypeEnum;
  names?: string;
  property_value?: number;
  land_value?: number;
  constructed_share_br18: number;
  sqm_price_floor_area_br18?: number;
  sqm_price_land_area?: number;
  trade_date?: string;
  purchase_price_total_adjusted?: number;
  is_common_lot: boolean;
};
