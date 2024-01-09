/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SKATRate } from './SKATRate';
export type SKATTaxResponse = {
    id: number;
    crud_id: number;
    ois_timestamp: string;
    created_at: string;
    changed_at: string;
    /**
     * Kombination af kommunekode og ejendomsnummer
     */
    esr_number: number;
    municipality_code: number;
    property_number: number;
    year: number;
    tax_change_date: string;
    land_tax_municipality: number;
    land_tax_municipality_farmhouse: number;
    land_tax_municipality_forest: number;
    land_tax_county: number;
    land_tax_county_farmhouse: number;
    land_tax_county_forest: number;
    coverage_charge_commercial: number;
    coverage_charge_land_value_municipality: number;
    coverage_charge_land_value_state: number;
    coverage_charge_land_value_county: number;
    coverage_charge_difference_value_municipality: number;
    coverage_charge_difference_value_state: number;
    tax_total: number;
    rates: Array<SKATRate>;
};

