/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceRenteModel } from './ReferenceRenteModel';
export type HaeftelseRenteModel = {
    /**
     * Angiver rentetypen. Fast eller Variabel.
     */
    Type?: string;
    /**
     * Haeftelsens paalydende aarlige rentesats.
     */
    PaalydendeSats?: number;
    /**
     * Haeftelsens aarlige rente inkl. renters rente.
     */
    NominelSats?: number;
    /**
     * True angiver at rentesats er foreløbig fastsat. False angiver at rentesats er endelig fastsat.
     */
    SatsForeloebigIndikator?: boolean;
    /**
     * Definerer eventuel minimumsrentesatser for lånet.
     */
    MinimumRenteSats?: number;
    /**
     * Definerer eventuel maksimumsrentesatser for lånet.
     */
    MaksimumRenteSats?: number;
    /**
     * Referencerente på en hæftelse
     */
    ReferenceRente?: ReferenceRenteModel;
};

