/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type AndenHaeftelseFastEjendomModel = {
    /**
     * Beløb der er foretaget udlæg for..
     */
    Beloeb: number;
    /**
     * ISO 4217 valutakode.
     */
    Valuta?: string;
    /**
     * HaeftelseTekst
     */
    Tekst?: Array<TekstGruppeModel>;
    /**
     * Samling af anmeldte fuldmagter.
     */
    FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
};

