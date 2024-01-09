/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KursOplysningerModel } from './KursOplysningerModel';
import type { KursVaerdiModel } from './KursVaerdiModel';
import type { NominelModel } from './NominelModel';
import type { OverfoertHovedstolModel } from './OverfoertHovedstolModel';
import type { SkoedeKoebesumModel } from './SkoedeKoebesumModel';
export type AfgiftOplysningerModel = {
  /**
   * Angiver beloebet som tinglysningsafgiften er beregnet ud fra.
   */
  AfgiftspligtigtBeloeb: number;
  /**
   * Angiver beloeb for nyt pantebrevs hovedstol. Angives kun ved nye pantebreve. Kan vaere sat til 0 i forbindelse af servitutter der tinglyses pantstiftende.
   */
  PaalydendeNytLaan?: number;
  /**
   * Anvendes i de tilfaelde hvor hovedstolen kan tillaegges rente og dermed opnå en højere pantstiftende værdi end angivet i hovedstol.
   */
  HaeftelseBeloebOpskrevet?: number;
  /**
   * ISO 4217 valutakode.
   */
  ValutaKode?: string;
  /**
   * Angiver den pris, som ejendommen er købt for. Alle beløb der angives skal være positive. I alt købesummen beregnes (IAltKoebesum = KontantKoebesum + ArvGaveBeloeb + OvertagneRestancer + AfloesningsbareServitutter + AnlaegsBidrag).
   */
  SkoedeKoebesum: SkoedeKoebesumModel;
  /**
   * Oplysninger om kurs.
   */
  KursOplysninger: KursOplysningerModel;
  /**
   * Afgiftsoplysning om overført hovedstol.
   */
  OverfoertHovedstolSamling?: Array<OverfoertHovedstolModel>;
  /**
   * Samling af afgiftsoplysninger opgjort efter kursvaerdi.
   */
  KursvaerdiSamling?: Array<KursVaerdiModel>;
  /**
   * Afgiftsoplysning opgjort efter nominel værdi.
   */
  NominelSamling?: Array<NominelModel>;
};
