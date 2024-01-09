/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstSkifteretsAttestKodeEnum } from './AdkomstSkifteretsAttestKodeEnum';
import type { FuldmagtAnmeldtModel } from './FuldmagtAnmeldtModel';
import type { SkifteformKodeEnum } from './SkifteformKodeEnum';
export type SkifteretsattestModel = {
    /**
     * Angiver dødsdato.
     */
    DoedsDato?: string;
    /**
     * Angiver mulige skifteformer.
     */
    SkifteformKode?: SkifteformKodeEnum;
    /**
     * Angiver mulige typer som skifteretsattesten skal tinglyses som adkomst for.
     */
    AdkomstSkifteretsAttestKode?: AdkomstSkifteretsAttestKodeEnum;
    /**
     * Samling af anmeldte fuldmagter.
     */
    FuldmagtAnmeldtSamling?: Array<FuldmagtAnmeldtModel>;
};

