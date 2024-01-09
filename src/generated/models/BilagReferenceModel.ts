/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeModel } from './TekstGruppeModel';
export type BilagReferenceModel = {
    /**
     * Bilagsreferencen er en BilagIdentifikator af typen UUID.
     */
    Id: string;
    /**
     * Angiver de mulige koder for en bilagreference.
     */
    Kode: string;
    /**
     * Unik identifikation af en frase.
     */
    FraseId?: string;
    /**
     * Tekst, som indeholder mulighed for en optionel overskrift og et eller flere afsnit.
     */
    Tekst?: Array<TekstGruppeModel>;
};

