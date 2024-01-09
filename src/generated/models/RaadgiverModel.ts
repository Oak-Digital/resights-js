/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RaadgiverOpretTypeEnum } from './RaadgiverOpretTypeEnum';
export type RaadgiverModel = {
    /**
     * CprNummer eller CvrNummer eller Myndighedskode
     */
    Id?: string;
    /**
     * Angiver typen af rådgiver.
     */
    Type?: string;
    /**
     * Om det er anmelder eller udfærdiger, som har oprettet rådgiveren
     */
    RaadgiverOpretTekst: RaadgiverOpretTypeEnum;
    /**
     * Angiver en reference til en Rolle i anmeldelsen via id atributten på Rolle elementet.
     */
    RolleReference: string;
};

