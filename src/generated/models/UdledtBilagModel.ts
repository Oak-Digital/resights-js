/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UdledtBilagEnum } from './UdledtBilagEnum';
export type UdledtBilagModel = {
  /**
   * Unik identifikator for dokument.
   */
  Id?: string;
  /**
   * Navn på akt.
   */
  Filnavn?: string;
  /**
   * Bilag eller Akt. (Kan også være 'UkompletAkt' hvis r'\d_' præfiks ikke er inkluderet)
   */
  Type: UdledtBilagEnum;
};
