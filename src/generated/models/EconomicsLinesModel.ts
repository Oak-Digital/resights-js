/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EconomicsProductModel } from './EconomicsProductModel';
export type EconomicsLinesModel = {
    self?: string;
    line_number: number;
    sort_key: number;
    description?: string;
    quantity: number;
    unit_net_price: number;
    discount_percentage: number;
    unit_cost_price: number;
    vat_rate: number;
    vat_amount: number;
    total_net_amount: number;
    product?: EconomicsProductModel;
};

