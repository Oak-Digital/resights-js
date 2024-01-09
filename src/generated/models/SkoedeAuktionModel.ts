/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstInformationModel } from './AdkomstInformationModel';
import type { BygningsforholdKodeEnum } from './BygningsforholdKodeEnum';
import type { EjendomKategoriModel } from './EjendomKategoriModel';
import type { HandelKodeEnum } from './HandelKodeEnum';
export type SkoedeAuktionModel = {
    /**
     * Angiver hvilken kategori som ejendommen tilhører.
     */
    EjendomKategori: EjendomKategoriModel;
    /**
     * Angiver oplysninger om eventuelle bygninger der er omfattet af handlen.
     */
    BygningsforholdKode?: BygningsforholdKodeEnum;
    /**
     * ISO 4217 valutakode.
     */
    ValutaKode?: string;
    /**
     * Angiver auktionsdatoen
     */
    AuktionDato?: string;
    /**
     * Angiver hvilken type handel som adkomstdokumentet indeholder.
     */
    HandelKode: HandelKodeEnum;
    /**
     * Til vurdering af fast ejendom knyttes informationer til hjælp af dette.
     */
    Information?: AdkomstInformationModel;
    /**
     * Budsumbeløb.
     */
    BudsumBeloeb?: number;
    /**
     * Skøde transport beløb
     */
    SkoedeTransportBeloeb?: number;
    /**
     * Samling af dokumenter der skal udslettes
     */
    DokumentIdSamling?: Array<string>;
};

