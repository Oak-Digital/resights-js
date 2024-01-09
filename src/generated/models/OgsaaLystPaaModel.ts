/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EjendomIdentifikatorModel } from './EjendomIdentifikatorModel';
export type OgsaaLystPaaModel = {
    /**
     * Antal yderligere matrikler rettigheden er tinglyst på
     */
    Antal: number;
    /**
     * Samling af ejendom identifikatorer. I forbindelse med 'også lyst på', udfyldes for adkomster og hæftelser, men ikke for servitutter.
     */
    EjendomIdentifikatorSamling?: Array<EjendomIdentifikatorModel>;
};

