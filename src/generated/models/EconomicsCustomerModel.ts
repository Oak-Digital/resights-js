/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EconomicsCustomerGroupModel } from './EconomicsCustomerGroupModel';
import type { EconomicsPaymentTermsModel } from './EconomicsPaymentTermsModel';
import type { EconomicsVatZoneModel } from './EconomicsVatZoneModel';
export type EconomicsCustomerModel = {
    self?: string;
    customer_number: number;
    currency: string;
    payment_terms: EconomicsPaymentTermsModel;
    customer_group: EconomicsCustomerGroupModel;
    address: string;
    balance: number;
    due_amount: number;
    corporate_identification_number: number;
    city: string;
    country: string;
    email?: string;
    name: string;
    zip: string;
    telephone_and_fax_number?: string;
    vat_zone: EconomicsVatZoneModel;
};

