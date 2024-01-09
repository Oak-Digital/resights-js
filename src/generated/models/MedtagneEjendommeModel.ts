/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type MedtagneEjendommeModel = {
    /**
     * True angiver at alle de ejendomme, der er indeholdt i købesummen, er medtaget i anmeldelsen.
     */
    AlleEjendommeMedtagetIndikator?: boolean;
    /**
     * True angiver at BFE-numre ikke er kendt.
     */
    BfeIkkeKendtIndikator?: boolean;
    /**
     * Samling af BFE numre.
     */
    BfeNummerSamling?: Array<string>;
};

