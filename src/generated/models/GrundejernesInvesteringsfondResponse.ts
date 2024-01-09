/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GIAccountResponse } from './GIAccountResponse';
import type { GIMaintenanceAccountResponse } from './GIMaintenanceAccountResponse';
export type GrundejernesInvesteringsfondResponse = {
  account_number?: string;
  account?: Array<GIAccountResponse>;
  maintenance_account?: Array<GIMaintenanceAccountResponse>;
};
