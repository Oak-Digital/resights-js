/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EconomicsPaymentTermsModel } from './EconomicsPaymentTermsModel';
import type { SubscriptionIntervalEnum } from './SubscriptionIntervalEnum';
export type EconomicsSubscriptionModel = {
  self?: string;
  currency: string;
  payment_terms: EconomicsPaymentTermsModel;
  net_amount: number;
  gross_amount: number;
  vat_amount: number;
  start_date: string;
  end_date: string;
  subscription_interval: SubscriptionIntervalEnum;
  factor: number;
  name: string;
};
