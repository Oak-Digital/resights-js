/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErhvervsoejemedKodeEnum } from './ErhvervsoejemedKodeEnum';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type ErklaeringModel = {
  /**
   * Identifikation af et dokument, som kan være et adkomst-, hæftelses- eller servitutdokument. Kunne også kaldes en sagsreference
   */
  Id?: string;
  /**
   * Revisionsnummer for rettighedsdokument.
   */
  RevisionNummer?: number;
  /**
   * Angiver formatet for en identifikation af en erklæring, som er A eller T efterfulgt af 1-9 efterfulgt af et tal fra 0 til 3 gange.
   */
  Kode: string;
  /**
   * Dato.
   */
  Dato?: string;
  /**
   * Beløb på hæftelse.
   */
  Beloeb?: number;
  /**
   * ForhoejelseBeloeb.
   */
  ForhoejelseBeloeb?: number;
  /**
   * NedbragtpanteBeloeb.
   */
  NedbragtpanteBeloeb?: number;
  /**
   * ISO 4217 valutakode.
   */
  ValutaKode?: string;
  /**
   * Unique and generally usable identifier for all legal units included i CVR.
   */
  CvrNummer?: string;
  /**
   * Angiver foruddefinerede erhversoejemed.
   */
  ErhvervsoejemedKode?: ErhvervsoejemedKodeEnum;
  /**
   * Erhvervsoejemed skal enten angives som en foruddefineret kode eller en fri tekst.
   */
  ErhvervsoejemedTekst?: Array<TekstGruppeModel>;
  /**
   * BegrundelseTekst
   */
  BegrundelseTekst?: Array<TekstGruppeModel>;
  /**
   * LovhjemmelTekst
   */
  LovhjemmelTekst?: Array<TekstGruppeModel>;
  /**
   * AnmodningTekst
   */
  AnmodningTekst?: Array<TekstGruppeModel>;
  /**
   * ErklaeringsFritekst
   */
  ErklaeringsFritekst?: Array<TekstGruppeModel>;
  /**
   * MyndighedTekst
   */
  MyndighedTekst?: Array<TekstGruppeModel>;
};
