/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UdledtBilagModel } from './UdledtBilagModel';
export type TekstGruppeNestedModel = {
  /**
   * Overskrift
   */
  Overskrift?: string;
  /**
   * Afsnit
   */
  Afsnit?: string;
  /**
   * Liste af ID eller filnavn for eventuelle bilag i afsnitteksten
   */
  BilagSamling?: Array<UdledtBilagModel>;
};
