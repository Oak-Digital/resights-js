/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EkspeditionSubtypeEnum } from './EkspeditionSubtypeEnum';
import type { EkspeditionTypeEnum } from './EkspeditionTypeEnum';
import type { HaeftelseLaantypeKodeEnum } from './HaeftelseLaantypeKodeEnum';
import type { RolleInformationModel } from './RolleInformationModel';
import type { SaerligeLaanevilkaarEnum } from './SaerligeLaanevilkaarEnum';
export type HaeftelseRettighedInformationModel = {
    /**
     * Beløb på hæftelse.
     */
    Beloeb: number;
    /**
     * ISO 4217 valutakode
     */
    Valuta: string;
    /**
     * Angivelse af rentesats. Angives ikke ved feks kontantlån.
     */
    RenteSats?: number;
    /**
     * Særlige lånevilkår for en fremtidig hæftelse.
     */
    SaerligeLaanevilkaar?: Array<SaerligeLaanevilkaarEnum>;
    /**
     * Type af lån i pantebrev.
     */
    LaantypeKode?: HaeftelseLaantypeKodeEnum;
    /**
     * Angivelse af kreditorer.
     */
    KreditorSamling?: Array<RolleInformationModel>;
    /**
     * Angiver hovedtypen
     */
    EkspeditionType?: EkspeditionTypeEnum;
    /**
     * Angiver ekspeditionstypen
     */
    EkspeditionSubtype?: EkspeditionSubtypeEnum;
    /**
     * Angiver ekspeditionsværdien.
     */
    EkspeditionVaerdi?: number;
};

