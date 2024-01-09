/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VURExemption = {
    /**
     * Årsag til fritagelsen (pgf. 7 eller 8 årsager).
     */
    variant_code?: string;
    /**
     * Fritaget beløb.
     */
    amount: number;
    /**
     * Kode for type af ejendom der fritages (fx. kommunal, stat eller lign.).
     */
    property_type_code?: string;
    /**
     * Fortløbende nummer pr fritagelse.
     */
    serial_number: number;
    /**
     * Kode for angivelse af om ejendommen er helt eller delvis fritaget.
     */
    scope_code?: string;
};

