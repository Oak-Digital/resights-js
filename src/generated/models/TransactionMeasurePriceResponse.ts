/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionPriceSourceEnum } from './TransactionPriceSourceEnum';
import type { TransactionQualityEnum } from './TransactionQualityEnum';
export type TransactionMeasurePriceResponse = {
  value: number;
  lower: number;
  upper: number;
  source?: TransactionPriceSourceEnum;
  quality?: TransactionQualityEnum;
};
