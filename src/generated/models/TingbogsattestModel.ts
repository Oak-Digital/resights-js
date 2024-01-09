/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstModel } from './AdkomstModel';
import type { EjendomStamoplysningerModel } from './EjendomStamoplysningerModel';
import type { HaeftelseModel } from './HaeftelseModel';
import type { ServitutModel } from './ServitutModel';
export type TingbogsattestModel = {
    /**
     * Stamoplysninger for en ejendom
     */
    EjendomStamoplysninger: EjendomStamoplysningerModel;
    /**
     * Summariske oplysninger for en adkomst. En adkomst har en AndelIdeel og en eller flere adkomsthavere til denne.
     */
    AdkomstSamling?: Array<AdkomstModel>;
    /**
     * Summariske oplysninger for en hæftelse.
     */
    HaeftelseSamling?: Array<HaeftelseModel>;
    /**
     * Summariske oplysninger for en servitut.
     */
    ServitutSamling?: Array<ServitutModel>;
};

