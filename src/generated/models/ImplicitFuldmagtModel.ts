/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomsthaverTypeEnum } from './AdkomsthaverTypeEnum';
export type ImplicitFuldmagtModel = {
    /**
     * CVR-nummer eller fødselsdato
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
    /**
     * Angiver de mulige værdier for omfanget af en fuldmagt.
     * 1: Fuldmagtshaver bemyndiges til på mine vegne at underskrive påtegninger af enhver art herunder kvitterings-, transport-, moderations-, og relaksationspåtegninger
     * 2: Fuldmagtshaver bemyndiges til på mine vegne at underskrive endeligt skøde på ejendommen, når betingelserne i det betingede skøde er opfyldt.
     */
    FuldmagtOmfangIdentifikator?: number;
    /**
     * Angiver en reference til en rolle for fuldmagtsgiver. Der kan angives fuldmagtsgiver ved implicit fuldmagt.
     */
    FuldmagtGiver?: string;
};

