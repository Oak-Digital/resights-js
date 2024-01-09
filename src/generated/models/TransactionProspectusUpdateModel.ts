/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TransactionProspectusUpdateModel = {
  name?: string;
  prospectus_id?: string;
  published_at?: string;
  source?: string;
  bfe_numbers?: Array<number>;
  asking_price?: number;
  rent_income_actual_yearly?: number;
  rent_income_estimated_yearly?: number;
  operating_expenses_yearly?: number;
  capital_requirement?: number;
  comment_public?: string;
  comment_private?: string;
  brokers?: Array<string>;
};
