/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstInformationModel } from './AdkomstInformationModel';
import type { BygningsforholdKodeEnum } from './BygningsforholdKodeEnum';
import type { EjendomKategoriModel } from './EjendomKategoriModel';
import type { HandelKodeEnum } from './HandelKodeEnum';
export type DokumentFastEjendomModel = {
  /**
   * Angiver hvilken kategori som ejendommen tilhører.
   */
  EjendomKategori?: EjendomKategoriModel;
  /**
   * Angiver oplysninger om eventuelle bygninger der er omfattet af handlen.
   */
  BygningsforholdKode?: BygningsforholdKodeEnum;
  /**
   * Beløbsværdi. Tallet skal være nul eller positivt tal. Det kan maximalt være på 20 cifre og der kan maksimalt angives 2 decimaler.
   */
  Beloeb?: number;
  /**
   * ISO 4217 valutakode.
   */
  ValutaKode?: string;
  /**
   * Angiver hvilken type handel som adkomstdokumentet indeholder.
   */
  HandelKode?: HandelKodeEnum;
  /**
   * Til vurdering af fast ejendom knyttes informationer til hjælp af dette.
   */
  Information?: AdkomstInformationModel;
  /**
   * True angiver angiver at dokumentet noteres som særeje.
   */
  SaerejeIndikator?: boolean;
};
