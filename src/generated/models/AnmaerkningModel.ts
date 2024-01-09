/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseRettighedInformationModel } from './HaeftelseRettighedInformationModel';
import type { MeddelelseTypeTekstEnum } from './MeddelelseTypeTekstEnum';
import type { RettighedTypeEnum } from './RettighedTypeEnum';
import type { ServitutTypeEnum } from './ServitutTypeEnum';
export type AnmaerkningModel = {
  /**
   * DokumentAliasIdentifikator
   */
  AliasId?: string;
  /**
   * AktHistoriskIdentifikator
   */
  AktHistoriskId?: string;
  /**
   * Angiver en rettighed som en af de mulige typer af rettigheder.
   */
  RettighedType?: RettighedTypeEnum;
  /**
   * Identifikation af en rettighed. Betegnelsen rettighed dækker alle de former for sammenkoblinger som et rettighedsdokument (DokumentIdentifikator) kan registrere i forhold til et tinglysningsobjekt.
   */
  RettighedId?: string;
  /**
   * Angiver det faktiske prioritetsnummer for en rettighed.
   */
  PrioritetNummer?: number;
  /**
   * Angives hvis foranstående rettighed er en hæftelse. Indeholder summariske informationer om den foranstående rettighed, der er angivet anmærkning om, og medsendes, så det ikke er nødvendigt at foretage en forespørgsel.
   */
  HaeftelseRettighedInformation?: HaeftelseRettighedInformationModel;
  /**
   * Angives hvis foranstående rettighed er en servitut. Der skal vælges en enumeration værdi, der matcher den servituttype, som Rettighed vedrører.
   */
  ServitutType?: ServitutTypeEnum;
  /**
   * Angives hvis foranstående rettighed er en meddelelse (gælder kun BAP bøgerne). Enumeration værdien matcher den meddelelsestype, som Rettighed vedrører.
   */
  MeddelelseTypeTekst?: MeddelelseTypeTekstEnum;
};
