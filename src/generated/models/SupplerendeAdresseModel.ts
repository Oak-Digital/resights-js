/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RaadgiverModel } from './RaadgiverModel';
export type SupplerendeAdresseModel = {
    /**
     * E-mailadresse for andre end anmelder.
     */
    SeparatAdresse: string;
    /**
     * Identifikation af eksternt sags nummer/referencenummer.
     */
    Sagsreference?: string;
    /**
     * Rådgiver, som kun må se anmeldelsen. Det er kun muligt at se, rette eller slette de rådgivere man selv har oprettet
     */
    Raadgiver?: RaadgiverModel;
};

