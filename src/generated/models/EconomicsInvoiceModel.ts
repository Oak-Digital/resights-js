/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EconomicsCustomerModel } from './EconomicsCustomerModel';
import type { EconomicsLayoutModel } from './EconomicsLayoutModel';
import type { EconomicsLinesModel } from './EconomicsLinesModel';
import type { EconomicsNotesModel } from './EconomicsNotesModel';
import type { EconomicsPaymentTermsModel } from './EconomicsPaymentTermsModel';
import type { EconomicsRecipientModel } from './EconomicsRecipientModel';
export type EconomicsInvoiceModel = {
  self?: string;
  booked_invoice_number?: string;
  order_number?: number;
  exchange_rate: number;
  date: string;
  currency: string;
  net_amount: number;
  net_amount_in_base_currency: number;
  gross_amount: number;
  gross_amount_in_base_currency: number;
  vat_amount: number;
  rounding_amount: number;
  remainder: number;
  remainder_in_base_currency: number;
  due_date: string;
  payment_terms: EconomicsPaymentTermsModel;
  recipient: EconomicsRecipientModel;
  layout?: EconomicsLayoutModel;
  customer?: EconomicsCustomerModel;
  lines: Array<EconomicsLinesModel>;
  notes?: EconomicsNotesModel;
};
