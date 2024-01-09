/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AfgiftOplysningerModel } from './AfgiftOplysningerModel';
import type { ErklaeringModel } from './ErklaeringModel';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type TinglysningAfgiftModel = {
    /**
     * Identifikation af en storkunde.
     */
    CvrNummer?: number;
    /**
     * Angiver det beløb i DKK, som man agter at betale i afgift.
     */
    Beloeb: number;
    /**
     * Samling af erklaeringer.
     */
    ErklaeringSamling?: Array<ErklaeringModel>;
    /**
     * Oplysninger om hvordan afgiften er opgjort. Hele opgoerelsen sker i een og samme valuta og omregning til DKK sker foerst i forbindelse med udregning af tinglysningsafgift.
     */
    Oplysninger?: AfgiftOplysningerModel;
    /**
     * Angiver en årsag for en afvigelse i forhold til normalt afgiftsbeløb. Hvis årsagen fremgår af en fastsat erklæringstekst skal feltet ikke anvendes.
     */
    AfvigelsesaarsagTekst?: Array<TekstGruppeModel>;
};

