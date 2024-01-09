/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdresseModel } from './AdresseModel';
import type { ErklaeringKodeModel } from './ErklaeringKodeModel';
import type { FraseModel } from './FraseModel';
import type { RolleModel } from './RolleModel';
import type { TinglysningAfgiftBeregnetModel } from './TinglysningAfgiftBeregnetModel';
export type SnapshotModel = {
  /**
   * Indeholder beriget informationer om roller i anmeldelsen.
   */
  RolleSamling?: Array<RolleModel>;
  /**
   * Indeholder samling af berigede adresser. Alle adresser i anmeldelsen, der er angivet med kode beriges med yderligere adresse information. Man finder frem til korrekt adresse i samlingen ved hjælp af koden, der er angivet i anmeldelsen.
   */
  AdresseSamling?: Array<AdresseModel>;
  /**
   * Indeholder beriget information om fraser.
   */
  FraseSamling?: Array<FraseModel>;
  /**
   * ErklaeringKode sammen med dens tekstbeskrivelse.
   */
  ErklaeringKodeSamling?: Array<ErklaeringKodeModel>;
  /**
   * Indeholder beriget information om fraser.
   */
  PantebrevFormularBetingelser?: Array<FraseModel>;
  /**
   * Indeholder den af Tinglysningsretten beregnede samlet tinglysnings afgift i danske kroner og information om transaktionsnumre fra refusion af retsafgifter.
   */
  TinglysningAfgiftBeregnet?: TinglysningAfgiftBeregnetModel;
};
