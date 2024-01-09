/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommercialValuationSourceEnum } from './CommercialValuationSourceEnum';
export type VURValuationNewResponse = {
  ice_number?: number;
  esr_number?: number;
  type?: CommercialValuationSourceEnum;
  land_value: number;
  land_value_residential?: number;
  land_value_production_land?: number;
  land_value_other_land?: number;
  property_value?: number;
  property_value_taxable?: number;
  property_value_not_taxable?: number;
  year: number;
  tax_property?: number;
  tax_land?: number;
  tax_total?: number;
  legal_category_text?: string;
  legal_subcategory_text?: string;
  preliminary: boolean;
};
