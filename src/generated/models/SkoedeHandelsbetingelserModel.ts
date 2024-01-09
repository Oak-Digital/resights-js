/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BetingetMatrikulaerAendringEnum } from './BetingetMatrikulaerAendringEnum';
import type { TekstGruppeNestedModel } from './TekstGruppeNestedModel';
export type SkoedeHandelsbetingelserModel = {
    /**
     * True angiver at handlen er betinget af købesummens betaling. False angiver at handlen ikke er betinget af købesummens betaling.
     */
    KoebesumbetalingIndikator?: boolean;
    /**
     * Skal angives når handlen er betinget af købesummens betaling.
     */
    KoebesumBetalingDato?: string;
    /**
     * True angiver at handlen er betinget af øvrige betingelser. False angiver at handlen ikke er betinget af øvrige betingelser.
     */
    BetingelserOevrigeIndikator?: boolean;
    /**
     * Skal angives når handlen er betinget af øvrige betingelser.
     */
    BetingelserOevrigeTekst?: Array<TekstGruppeNestedModel>;
    /**
     * Angiver typen af en matrikulær ændring som en handel er betinget af.
     */
    BetingetMatrikulaerAendring?: BetingetMatrikulaerAendringEnum;
};

