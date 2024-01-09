/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdresseModel } from './AdresseModel';
import type { BraendeovnsOplysningerEnum } from './BraendeovnsOplysningerEnum';
import type { EjendomIdentifikatorModel } from './EjendomIdentifikatorModel';
import type { RespektModel } from './RespektModel';
export type FastEjendomModel = {
  /**
   * Angiver et tinglysningsobjekt af typen fast ejendom.
   */
  EjendomIdentifikator: EjendomIdentifikatorModel;
  /**
   * Indeholder oplysninger for en adresse baseret på koder. Det kan fx være i en RolleStrukur (også fra snapshots), hvor adressen på en person eller virksomhed er angivet som standard OIO-adresse med vejkode/kommunekode (AddressSpecific), eller det kan være fra en adresseangivelse på en ejendom i selve anmeldelsen.
   */
  Adresse?: AdresseModel;
  /**
   * Samling af respekter.
   */
  RespektSamling?: Array<RespektModel>;
  /**
   * Samling af brændeovnsoplysninger. ejerskifteIkkeOmfattetAfIndberetningsPligt må ikke kombineres med de øvrige.
   */
  BraendeovnsOplysningerSamling?: Array<BraendeovnsOplysningerEnum>;
};
