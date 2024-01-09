/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProspectusBrokerResponseModel } from './ProspectusBrokerResponseModel';
export type TransactionProspectusResponseModel = {
  name: string;
  prospectus_id: string;
  published_at?: string;
  source: string;
  bfe_numbers?: Array<number>;
  asking_price?: number;
  rent_income_actual_yearly?: number;
  rent_income_estimated_yearly?: number;
  operating_expenses_yearly?: number;
  capital_requirement?: number;
  comment_public?: string;
  comment_private?: string;
  id: string;
  transaction_id?: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  /**
   * Computed field of cap_rate based on actual rent income and asking price
   */
  cap_rate_asking_actual?: number;
  /**
   * Computed field of cap_rate based on actual + estimated rent income and asking price
   */
  cap_rate_asking_estimated?: number;
  /**
   * Computed field of cap_rate based on actual rent income and realised price
   */
  cap_rate_realised_actual?: number;
  /**
   * Computed field of cap_rate based on actual + estimated rent income and realised price
   */
  cap_rate_realised_estimated?: number;
  brokers?: Array<ProspectusBrokerResponseModel>;
};
