/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomsthaverTypeEnum } from './AdkomsthaverTypeEnum';
export type AdkomsthaverBase = {
  /**
   * CVR-nummer eller fødselsdato
   */
  Id?: string;
  /**
   * Navn på virksomhed eller person
   */
  Navn?: string;
  /**
   * VIRKSOMHED eller PERSON
   */
  Type?: AdkomsthaverTypeEnum;
  Andel?: number;
  AndelTaeller?: number;
  AndelNaevner?: number;
};
