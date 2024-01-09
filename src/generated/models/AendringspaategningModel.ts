/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnmaerkningModel } from './AnmaerkningModel';
import type { FristInformationModel } from './FristInformationModel';
export type AendringspaategningModel = {
    /**
     * Revisionsnummer for rettighedsdokument.
     */
    RevisionNummer: number;
    /**
     * Samling af anmaerkninger. Det kan være anmaerkninger om servitutter og hæftelser angivet ved nummer. Anmærkninger vedrører altid respekter. Mangler der i en anmeldelse respekt for en eller flere hæftelser eller servitutter, giver sagsbehandlingen anledning til anmærkninger herom. Anmærkning for servitutter indeholder kode for yderligere oplysninger om servitutten.
     */
    AnmaerkningSamling?: Array<AnmaerkningModel>;
    /**
     * FristInformation ved tinglysning med frist. Her oplyses årsag og fristdato.
     */
    FristInformationSamling?: Array<FristInformationModel>;
};

