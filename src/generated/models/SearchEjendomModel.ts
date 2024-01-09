/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SearchEjendomModel = {
  /**
   * Unik identifikator.
   */
  Id: string;
  /**
   * Ejendommens adresse.
   */
  Adresse?: string;
  Vedroerende: string;
  /**
   * Offentlig ejendomsvurdering i hele kroner.
   */
  Ejendomsvurdering?: number;
  /**
   * Den beregnede grundværdi fra hele kroner. Grundværdien er en del af den samlede ejendomsværdi.
   */
  Grundvaerdi?: number;
  /**
   * Dato for seneste ejendomsvurdering eller regulering af ejendomsværdien.
   */
  VurderingDato?: string;
  /**
   * The real property identifier is composed of 5 digits and a control number. The real property identifier is unique within the single municipality. The real property identifier identifies the single property within the municipality. When the real property identifier is complemented with the municipality code, it uniquely identifies the single property nationally.
   */
  Ejendomsnummer?: number;
  /**
   * The code of a municipality. The plain text of a municipality is to be found by reference to the authority-data in the civilregistrationsystem. The code will always be unique.
   */
  Kommunekode?: number;
  UmaNummer?: number;
  /**
   * Beskrivelse.
   */
  Beskrivelse?: string;
};
