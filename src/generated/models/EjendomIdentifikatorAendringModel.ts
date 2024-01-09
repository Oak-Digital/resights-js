/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MatrikelModel } from './MatrikelModel';
import type { UmatrikuleretArealModel } from './UmatrikuleretArealModel';
export type EjendomIdentifikatorAendringModel = {
    /**
     * Bestemt Fast Ejendom nummer er en unik identifikator for en ejendom
     */
    BestemtFastEjendomNummer?: number;
    /**
     * Liste af matrikler.
     */
    MatrikelSamling?: Array<MatrikelModel>;
    /**
     * Angiver et umatrikuleret areal som er identificeret ved hjælp af retskredsnumrene fra før 2008 og en fiktiv ejerlavskode UMA samt et af tinglysningen tildelt fortløbende nummer. På et umatrikuleret areal kan der forefindes enheder.
     */
    UmatrikuleretAreal?: UmatrikuleretArealModel;
    /**
     * Objektets ændringsdato.
     */
    AendringDato: string;
};

