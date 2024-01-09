/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTradeEntity } from './CompanyTradeEntity';
import type { CompanyTradeTarget } from './CompanyTradeTarget';
export type CompanyTradeDetails = {
  target: CompanyTradeTarget | Array<CompanyTradeTarget>;
  trade_date: string;
  last_update: string;
  sellers: Array<CompanyTradeEntity>;
  buyers: Array<CompanyTradeEntity>;
};
