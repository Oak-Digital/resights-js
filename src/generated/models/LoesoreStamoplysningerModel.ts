/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomsthaverTypeEnum } from './AdkomsthaverTypeEnum';
import type { RaadighedsindskraenkningModel } from './RaadighedsindskraenkningModel';
export type LoesoreStamoplysningerModel = {
    /**
     * Samling af oplysninger om rådighedsindskrænkning.
     */
    RaadighedsindskraenkningSamling?: Array<RaadighedsindskraenkningModel>;
    /**
     * Identifikation af loesoere
     * Person
     * Angiv værdi i første cpr:PersonCivilRegistrationIdentifier
     * Virksomhed (ikke enkeltmandsvirksomhed
     * Angiv værdi i cvr:CVRnumberIdentifier
     * Enkeltmandsvirksomhed
     * Angiv værdi i cvr:CVRnumberIdentifier
     * Angiv værdi i det sidste cpr:PersonCivilRegistrationIdentifier
     */
    Id?: string;
    /**
     * VIRKSOMHED eller PERSON eller UKENDT
     */
    Type?: AdkomsthaverTypeEnum;
    Navn?: string;
    AdresseTekst?: string;
};

