/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EjendomTypeEnum } from './EjendomTypeEnum';
import type { MatrikelModel } from './MatrikelModel';
import type { UmatrikuleretArealModel } from './UmatrikuleretArealModel';
export type EjendomIdentifikatorModel = {
    /**
     * Bestemt Fast Ejendom nummer er en unik identifikator for en ejendom
     */
    BestemtFastEjendomNummer?: number;
    /**
     * Angiver en matrikel.
     */
    MatrikelSamling?: Array<MatrikelModel>;
    /**
     * Angiver et umatrikuleret areal som er identificeret ved hjælp af retskredsnumrene fra før 2008 og en fiktiv ejerlavskode UMA samt et af tinglysningen tildelt fortløbende nummer. På et umatrikuleret areal kan der forefindes enheder.
     */
    UmatrikuleretAreal?: UmatrikuleretArealModel;
    /**
     * Angiver ejendommens type
     */
    Type?: EjendomTypeEnum;
    /**
     * Entydigt nummer der repræsenterer en ejerlejlighed. Nummeret fastlægges af en landinspektør og kan bestå af både tal og bogstaver. Der gælder følgende regler:
     */
    Ejerlejlighedsnummer?: string;
    /**
     * Entydigt nummer der repræsenterer en bygning/bygninger som er en del af en ejendom. Nummeret kan bestå af både tal og bogstaver
     */
    Bygningsnummer?: string;
    /**
     * Entydigt nummer der repræsenterer en ejendom af typen anpart. Nummeret kan bestå af både tal og bogstaver. Antallet karakterer er 5.
     */
    Anpartsnummer?: string;
    /**
     * Beliggenhedstekst
     */
    BeliggenhedTekst?: string;
    /**
     * Også kaldet e-ref. UUID der identificere en ejendom på tværs af alle ejendomsregistre som fx tinglysning, kms, skat mv.
     */
    FaellesEjendomId?: string;
    /**
     * Identificerer en lejlighed i en ejendom af ejendomstypen HovedejendomTimeshare.
     */
    Timesharenummer?: number;
    /**
     * Samling af ugenumre, som angives ved timeshare opdelt i uger.
     */
    UgenummerSamling?: Array<number>;
};

