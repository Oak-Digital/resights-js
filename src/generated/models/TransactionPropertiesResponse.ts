/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionPropertiesOverviewResponse } from './TransactionPropertiesOverviewResponse';
import type { TransactionPropertiesValuationResponse } from './TransactionPropertiesValuationResponse';
export type TransactionPropertiesResponse = {
  bfe_number: number;
  valuation?: TransactionPropertiesValuationResponse;
  overview: TransactionPropertiesOverviewResponse;
};
