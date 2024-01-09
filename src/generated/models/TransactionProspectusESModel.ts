/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransactionBrokerESModel } from './TransactionBrokerESModel';
export type TransactionProspectusESModel = {
  id: string;
  asking_price?: number;
  rent_income_actual_yearly?: number;
  rent_income_estimated_yearly?: number;
  operating_expenses_yearly?: number;
  capital_requirement?: number;
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
  brokers: Array<TransactionBrokerESModel>;
};
