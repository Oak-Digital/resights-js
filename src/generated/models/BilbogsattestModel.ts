/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BilStrukturModel } from './BilStrukturModel';
import type { HaeftelseModel } from './HaeftelseModel';
export type BilbogsattestModel = {
    /**
     * Indeholder beriget information om en bil. Informationer kan stamme fra anmeldelsen eller fra eksterne registre såsom CRM.
     */
    BilStamoplysninger?: BilStrukturModel;
    /**
     * Summariske oplysninger for en hæftelse.
     */
    HaeftelseSamling?: Array<HaeftelseModel>;
    /**
     * Model ID
     */
    ModelId?: number;
};

