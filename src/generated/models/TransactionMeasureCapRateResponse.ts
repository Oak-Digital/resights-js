/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionCapRateSourceEnum } from './TransactionCapRateSourceEnum';
import type { TransactionQualityEnum } from './TransactionQualityEnum';
export type TransactionMeasureCapRateResponse = {
  value: number;
  lower: number;
  upper: number;
  source: TransactionCapRateSourceEnum;
  quality?: TransactionQualityEnum;
};
