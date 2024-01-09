/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseBidragGrundlagEnum } from './HaeftelseBidragGrundlagEnum';
export type HaeftelseBidragModel = {
  /**
   * Administrationsbidrag angivet i procent per termin.
   */
  BidragSats: number;
  /**
   * Angiver de mulige grundlag for beregning af bidragssatsen.
   */
  BidragGrundlag: HaeftelseBidragGrundlagEnum;
  /**
   * Minimumsbeloeb for bidraget.
   */
  BidragMinimumBeloeb?: number;
  /**
   * ISO 4217 valutakode.
   */
  Valuta?: string;
};
