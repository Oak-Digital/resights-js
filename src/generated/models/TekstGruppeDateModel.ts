/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UdledtBilagModel } from './UdledtBilagModel';
export type TekstGruppeDateModel = {
    /**
     * Afsnit
     */
    Afsnit?: string;
    /**
     * Dato
     */
    Dato?: string;
    /**
     * Liste af ID eller filnavn for eventuelle bilag og akter i afsnitteksten
     */
    BilagSamling?: Array<UdledtBilagModel>;
};

