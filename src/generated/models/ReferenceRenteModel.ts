/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HaeftelseRenteEnum } from './HaeftelseRenteEnum';
import type { ReferenceRenteEnum } from './ReferenceRenteEnum';
import type { TillaegFradragEnum } from './TillaegFradragEnum';
export type ReferenceRenteModel = {
    /**
     * Angiver de mulige navne på en referencerente. Hvis anden referencerente anvendes, skal navnet på den anvendte referencerente angives i vilkårsteksten.
     */
    Navn: ReferenceRenteEnum;
    /**
     * Den aktuelle referencerentes værdi (procentsats pro anno) på anmeldelsestidspunktet.
     */
    Sats?: number;
    /**
     * Angiver om der er tale om et tillæg eller fradrag.
     */
    TillaegFradragIndikator?: TillaegFradragEnum;
    /**
     * Angiver den aktuelle procentsats for tillæget/fradraget.
     */
    TillaegFradragProcentsats?: number;
    /**
     * Angiver om tillaeget/fradraget er variabelt eller fast i hæftelsens løbetid.
     */
    TillaegFradragFastVariabelIndikator?: HaeftelseRenteEnum;
};

