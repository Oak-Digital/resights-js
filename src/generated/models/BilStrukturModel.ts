/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BilMaerkeModel } from './BilMaerkeModel';
export type BilStrukturModel = {
    /**
     * Bilens stelnummer
     */
    Stelnummer?: string;
    /**
     * Ikke unik stelnummer på mindre en 17 karakter
     */
    KortStelnummer?: string;
    /**
     * Løbenummer til at identificere ikke unik stelnummer
     */
    StelnummerLoebenummer?: number;
    /**
     * Mærke på bil
     */
    Maerke?: BilMaerkeModel;
    /**
     * Registreringnummer
     */
    Registreringsnummer?: string;
    /**
     * År for første registrering af bil i motorregisteret
     */
    FoersteRegistreringsaar?: number;
};

