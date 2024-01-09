/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseModel } from './HaeftelseModel';
import type { LoesoreStamoplysningerModel } from './LoesoreStamoplysningerModel';
import type { MeddelelseLoesoereModel } from './MeddelelseLoesoereModel';
import type { PersondokumentModel } from './PersondokumentModel';
export type PersonbogsattestModel = {
    /**
     * Model id.
     */
    Id: string;
    /**
     * Stamoplysninger for et løsøre.
     */
    LoesoereStamoplysninger: LoesoreStamoplysningerModel;
    /**
     * Summariske oplysninger for en hæftelse.
     */
    HaeftelseSamling?: Array<HaeftelseModel>;
    /**
     * Summariske oplysninger for en meddelelse.(BAP)
     */
    MeddelelseLoesoereSamling?: Array<MeddelelseLoesoereModel>;
    /**
     * Summariske oplysninger for en testamente og formueforhold i personbogen
     */
    PersondokumentSamling?: Array<PersondokumentModel>;
};

