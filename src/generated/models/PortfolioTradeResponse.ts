/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyTradeDetails } from './CompanyTradeDetails';
import type { CVROwnershipNodeResponse } from './CVROwnershipNodeResponse';
import type { EJFTradeResponse } from './EJFTradeResponse';
export type PortfolioTradeResponse = {
    trade: (EJFTradeResponse | CompanyTradeDetails);
    entity_shares: Array<CVROwnershipNodeResponse>;
    property_shares: Array<CVROwnershipNodeResponse>;
};

