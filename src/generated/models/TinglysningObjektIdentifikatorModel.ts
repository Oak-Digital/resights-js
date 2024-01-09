/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AndelIdentifikatorModel } from './AndelIdentifikatorModel';
import type { BilIdentifikatorModel } from './BilIdentifikatorModel';
import type { EjendomIdentifikatorModel } from './EjendomIdentifikatorModel';
export type TinglysningObjektIdentifikatorModel = {
  /**
   * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument. Kunne også kaldes en sagsreference
   */
  DokumentId?: string;
  /**
   * Revisionsnummer for rettighedsdokument.
   */
  DokumentRevisionNummer?: number;
  /**
   * Identifikation af en rettighed. Betegnelsen rettighed dækker alle de former for sammenkoblinger som et rettighedsdokument (DokumentIdentifikator) kan registrere i forhold til et tinglysningsobjekt.
   */
  RettighedId?: string;
  /**
   * Angiver et tinglysningsobjekt af typen fast ejendom.
   */
  EjendomIdentifikator?: EjendomIdentifikatorModel;
  /**
   * Identifikation af en bil.
   */
  BilIdentifikator?: BilIdentifikatorModel;
  /**
   * Identifikation af en andel.
   */
  AndelIdentifikator?: AndelIdentifikatorModel;
};
