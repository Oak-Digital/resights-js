/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoligsidenAddress } from './BoligsidenAddress';
import type { ListingsUnitTypeEnum } from './ListingsUnitTypeEnum';
import type { Owner } from './Owner';
import type { Realtor } from './Realtor';
import type { resights__core__models__listings__listings__ElasticSearchCoordinateModel } from './resights__core__models__listings__listings__ElasticSearchCoordinateModel';
export type ListingsModel = {
  pk: string;
  id: string;
  source: string;
  updated_at?: string;
  deleted_at?: string;
  href?: string;
  title?: string;
  description?: string;
  unit_type_name: ListingsUnitTypeEnum;
  unit_type_id: number;
  owners?: Array<Owner>;
  address: BoligsidenAddress;
  price: number;
  area_price?: number;
  price_change: boolean;
  price_change_percentage: number;
  monthly_expense: number;
  down_payment?: number;
  gross_mortgage?: number;
  net_mortgage?: number;
  floors?: number;
  rooms?: number;
  area?: number;
  weighted_area?: number;
  lot_area?: number;
  days_on_market: number;
  energy_label?: string;
  status: string;
  year_built?: number;
  lon: number;
  lat: number;
  coordinate: resights__core__models__listings__listings__ElasticSearchCoordinateModel;
  page_views: number;
  click_count: number;
  favourites: number;
  realtor: Realtor;
};
