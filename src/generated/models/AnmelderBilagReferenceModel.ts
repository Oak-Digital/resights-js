/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BilagReferenceModel } from './BilagReferenceModel';
export type AnmelderBilagReferenceModel = {
    /**
     * Angiver eksisterende bilagsreferencer knyttet til dokumentet i ATR.
     */
    BilagSamling?: Array<BilagReferenceModel>;
    /**
     * True angiver at bilaget skal prøves og False angiver at det ikke skal prøves. I version 1.0 udtages alle bilag dog til prøvelse uanset værdien af denne indikator.
     */
    ProevesIndikator: boolean;
};

