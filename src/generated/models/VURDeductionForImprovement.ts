/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VURDeductionForImprovement = {
  /**
   * Fortløbende nummer pr fradrag som skelner mellem de forskellige fradrag der kan være knyttet til samme vurdering.
   */
  serial_number: number;
  /**
   * Forklarende tekst til fradrag for forbedringer.
   */
  text?: string;
  /**
   * Beløbet angivet i hele kr. givet i fradrag for forbedring.
   */
  value: number;
  /**
   * Årstallet angiver det år, hvor fradrag for forbedringer blev givet.
   */
  year: number;
};
