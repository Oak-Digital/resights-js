/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type VURLandValueSpecification = {
  /**
   * Angivelse af arealet i m2 pr. specifikation.
   */
  area: number;
  /**
   * Udregnet grundværdi (i hele kr.) for en given grundværdispecifikation.
   */
  amount: number;
  /**
   * Enhedsbeløb angiver prisen pr. enhed i en grundværdispecifikation.
   */
  unit_amount?: number;
  /**
   * Fortløbende nummer pr specifikation.
   */
  serial_number: number;
  /**
   * Priskoden angiver arten af en enhedspris i en grundværdispecifikation.
   */
  price_code?: string;
  /**
   * Forklarende tekst i tilknytning til en grundværdispecifikation.
   */
  text: string;
};
