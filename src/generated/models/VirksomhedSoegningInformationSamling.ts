/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DokumentRettighedModel } from './DokumentRettighedModel';
import type { MatrikelModel } from './MatrikelModel';
import type { RolleTypeIdentifikatorEnum } from './RolleTypeIdentifikatorEnum';
export type VirksomhedSoegningInformationSamling = {
    /**
     * CVR-nummer.
     */
    Id: number;
    /**
     * BFE-nummer.
     */
    BestemtFastEjendomNummer?: number;
    /**
     * Liste af matrikler
     */
    MatrikelSamling?: Array<MatrikelModel>;
    /**
     * Angiver typen af rolle
     */
    RolleTypeIdentifikator: RolleTypeIdentifikatorEnum;
    /**
     * Den af de tidligere 82 retskredse.
     */
    Retskreds: number;
    /**
     * Samling af dokumentrettigheder
     */
    DokumentRettighedSamling: Array<DokumentRettighedModel>;
};

