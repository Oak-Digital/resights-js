/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcquisitionMethodEnum } from './AcquisitionMethodEnum';
import type { CurrencyEnum } from './CurrencyEnum';
import type { TradeParametersArea } from './TradeParametersArea';
import type { TradeParametersSqm } from './TradeParametersSqm';
/**
 * Base class for a model representing and defining a Materialized View.
 */
export type LatestTradeResponse = {
  id: string;
  /**
   * Weight factor to normalise purchase price reflecting real value of properties.
   */
  factor: number;
  received_share?: number;
  released_share?: number;
  currency?: CurrencyEnum;
  trade_date: string;
  acquisition_method?: AcquisitionMethodEnum;
  purchase_price_total?: number;
  /**
   * Purchase Price Total converted to DKK
   */
  purchase_price_total_dkk?: number;
  /**
   * Purchase Price Total adjusted for traded share and converted to DKK
   */
  purchase_price_total_adjusted?: number;
  number_properties: number;
  bfe_numbers: Array<number>;
  area: TradeParametersArea;
  sqm_price?: TradeParametersSqm;
};
