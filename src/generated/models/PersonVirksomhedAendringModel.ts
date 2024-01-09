/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonVirksomhedEnum } from './PersonVirksomhedEnum';
export type PersonVirksomhedAendringModel = {
    /**
     * Id
     */
    Id?: string;
    /**
     * Person or Company
     */
    Type?: PersonVirksomhedEnum;
    /**
     * Navn
     */
    Navn?: string;
    /**
     * Objektets ændringsdato.
     */
    AendringDato: string;
};

