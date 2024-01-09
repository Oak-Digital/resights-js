/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomsthaverBase } from './AdkomsthaverBase';
import type { HistoriskAdkomsthaverDokumentTypeEnum } from './HistoriskAdkomsthaverDokumentTypeEnum';
export type HistoriskAdkomsthaverModel = {
    /**
     * Unik identifikator.
     */
    Id: string;
    /**
     * Dato på den historiske adkomst.
     */
    Dato: string;
    /**
     * Angiver dokumentets type.
     */
    Type?: HistoriskAdkomsthaverDokumentTypeEnum;
    /**
     * Adkomsthaver oplysninger.
     */
    AdkomsthaverSamling?: Array<AdkomsthaverBase>;
    /**
     * ISO 4217 valutakode.
     */
    ValutaKode?: string;
    /**
     * Kontant købesum
     */
    KontantKoebesum?: number;
};

