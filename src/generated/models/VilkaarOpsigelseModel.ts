/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type VilkaarOpsigelseModel = {
  /**
   * Angiver om en haeftelse er konverterbar eller ej.
   */
  IndfrielseKonverterbar?: boolean;
  /**
   * Angiver kurs til hvilken en hæftelse kan indfries. Skal angives, når HaeftelseIndfrielseKonverterbar er True og ikke når den er False.
   */
  IndfrielseKurs?: number;
  /**
   * Angiver med hvilket varsel, som debitor kan opsige hæftelsen. 0 angiver uden varsel. Kreditors opsigelsesbetingelser bør angives i fri tekst i HaeftelseVilkaarSamling. Skal angives, når HaeftelseIndfrielseKonverterbar er True og ikke når den er False.
   */
  AntalMaaneder?: number;
  /**
   * HaeftelseVilkaarSamling
   */
  VilkaarSamling?: Array<TekstGruppeNestedModel>;
};
