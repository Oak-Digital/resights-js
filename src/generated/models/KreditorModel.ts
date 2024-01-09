/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomsthaverTypeEnum } from './AdkomsthaverTypeEnum';
export type KreditorModel = {
    /**
     * Id
     */
    Id?: string;
    /**
     * Navn på virksomhed eller person
     */
    Navn?: string;
    /**
     * VIRKSOMHED eller PERSON eller UKENDT
     */
    Type?: AdkomsthaverTypeEnum;
    /**
     * Kommunekode
     */
    Kommunekode?: number;
    /**
     * Vejkode
     */
    Vejkode?: number;
    /**
     * Husnummer
     */
    Husnummer?: string;
    /**
     * Etage
     */
    Etage?: string;
    /**
     * Dør
     */
    Doer?: string;
    /**
     * Addressetekst
     */
    AdresseTekst?: string;
};

