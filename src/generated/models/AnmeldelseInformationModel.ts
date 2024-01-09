/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmelderModel } from './AnmelderModel';
import type { AnmelderRolleModel } from './AnmelderRolleModel';
import type { BilagReferenceModel } from './BilagReferenceModel';
import type { ErklaeringModel } from './ErklaeringModel';
import type { TinglysningAfgiftModel } from './TinglysningAfgiftModel';
export type AnmeldelseInformationModel = {
    /**
     * Anmelder information.
     */
    Anmelder: AnmelderModel;
    /**
     * Samling af roller.
     */
    RolleSamling: Array<AnmelderRolleModel>;
    /**
     * Angiver eksisterende bilagsreferencer knyttet til dokumentet i ATR.
     */
    BilagSamling?: Array<BilagReferenceModel>;
    /**
     * Samling af erklaeringer.
     */
    ErklaeringSamling?: Array<ErklaeringModel>;
    /**
     * Tinglysningsafgift.
     */
    TinglysningAfgift?: TinglysningAfgiftModel;
};

