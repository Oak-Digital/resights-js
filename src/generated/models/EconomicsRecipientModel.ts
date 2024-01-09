/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EconomicsVatZoneModel } from './EconomicsVatZoneModel';
export type EconomicsRecipientModel = {
  self?: string;
  name: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  vat_zone?: EconomicsVatZoneModel;
};
