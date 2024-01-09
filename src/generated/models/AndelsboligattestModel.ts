/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdresseModel } from './AdresseModel';
import type { AndelIdentifikatorModel } from './AndelIdentifikatorModel';
import type { HaeftelseModel } from './HaeftelseModel';
export type AndelsboligattestModel = {
    /**
     * Identifikation af en andel som adresse.
     */
    AndelStamoplysninger: AndelIdentifikatorModel;
    /**
     * Indeholder oplysninger for en adresse baseret på koder. Det kan fx være i en RolleStrukur (også fra snapshots), hvor adressen på en person eller virksomhed er angivet som standard OIO-adresse med vejkode/kommunekode (AddressSpecific), eller det kan være fra en adresseangivelse på en ejendom i selve anmeldelsen.
     */
    Adresse?: AdresseModel;
    /**
     * Summariske oplysninger for en hæftelse.
     */
    HaeftelseSamling?: Array<HaeftelseModel>;
};

