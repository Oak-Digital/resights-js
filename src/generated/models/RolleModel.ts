/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BroekModel } from './BroekModel';
import type { RolleAdresseModel } from './RolleAdresseModel';
export type RolleModel = {
    /**
     * Hvis der er flere referencer, skal de de alle være for samme juridiske person! Er primært relevant hvis to forskellige personer i rollesamlingen har præcis samme fødselsdag, i det opslag i e-akt på tidligere dokumenter - fx DokumentHentRevisionsspor ikke må inkludere de fire sidste cifre...
     */
    Id: Array<string>;
    /**
     * Kan være udeladt i opslag, hvis personen har navnebeskyttelse
     */
    Navn?: string;
    /**
     * Kan være udeladt i opslag, hvis personen har adressebeskyttelse
     */
    Adresse?: RolleAdresseModel;
    /**
     * Her angives kort tekst der beskriver virksomhedsform fra CVR.
     */
    DriftFormVirksomhedFormTypeTekst?: string;
    /**
     * Her angives virksomhedsformkoden fra CVR.
     */
    DriftFormKode?: number;
    /**
     * Hvis rollen peger på en køber vil der her blive angivet købers andel af ejendommen efter gennemførsel af handelen. Tinglysningsretten beregner denne.
     */
    EjendomKoeberAndelEfterSalg?: BroekModel;
    /**
     * Hvis rollen peger på en sælgers andel af ejendommen efter gennemførsel af handelen. Tinglysningsretten beregner denne. Hvis sælgers andel efter handelen er nul, oplyses der ikke noget.
     */
    EjendomSaelgerAndelEfterSalg?: BroekModel;
};

