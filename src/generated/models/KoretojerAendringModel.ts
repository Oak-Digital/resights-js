/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type KoretojerAendringModel = {
  /**
   * Bilens stelnummer
   */
  Stelnummer?: string;
  /**
   * Ikke unik stelnummer på mindre en 17 karakter
   */
  KortStelnummer?: string;
  /**
   * Løbenummer til at identificere ikke unik stelnummer
   */
  StelnummerLoebenummer?: number;
  /**
   * Objektets ændringsdato.
   */
  AendringDato: string;
};
