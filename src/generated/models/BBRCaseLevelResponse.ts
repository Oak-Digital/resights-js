/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRCase } from './BBRCase';
/**
 * Sagsniveau kobler de enkelte sagsentiteter til Byggesagen, og angiver sagstypen
 * for sagsniveauet.
 */
export type BBRCaseLevelResponse = {
    /**
     * Persistent unik nøgle.
     */
    id: string;
    namespace: string;
    /**
     * Angivelse af hvor et forvaltningsobjekt er i sin livscyklus.
     */
    status?: number;
    /**
     * Den manuelle eller IT-understøttede proces hvori forretningsområdet håndterer hændelsen.
     */
    business_process?: number;
    /**
     * Den del af den offentlige forretning der håndterer hændelsen og derved udvirker ændringen i data.
     */
    business_area?: string;
    /**
     * Den begivenhed i virkeligheden som udløste ændringen i data.
     */
    business_event?: string;
    /**
     * Tidspunktet hvor registreringen er foretaget.
     */
    registration_from: string;
    /**
     * Tidspunktet hvor en ny registrering er foretaget på objektet, og hvor denne version således ikke længere er den seneste.
     */
    registration_to?: string;
    /**
     * Den aktør der har foretaget registreringen.
     */
    registration_actor: string;
    /**
     * Tidspunktet hvorfra objektet har virkning.
     */
    effect_from: string;
    /**
     * Tidspunktet hvor objektets virkning ophører.
     */
    effect_to?: string;
    /**
     * Den aktør der har afstedkommet objektets virkning.
     */
    effect_actor: string;
    municipality_code?: number;
    /**
     * Angiver hvilket element byggesagen tilhører.
     * 1 - Grund
     * 2 - Bygning
     * 3 - TekniskAnlaeg
     * 4 - Etage
     * 5 - Opgang
     * 6 - Enhed
     */
    level_type: number;
    /**
     * Angiver typen af byggesagen.
     * 0 - Sag på grund
     * 1 - Nybyggeri
     * 2 - Til/ombygning
     * 31 - Nedrivning (delvis)
     * 32 - Nedrivning (hel)
     */
    case_type?: number;
    building_project_id: string;
    plot_data_id?: string;
    plot_case_id?: string;
    building_data_id?: string;
    building_case_id?: string;
    unit_data_id?: string;
    unit_case_id?: string;
    floor_data_id?: string;
    floor_case_id?: string;
    staircase_data_id?: string;
    staircase_case_id?: string;
    technical_installation_data_id?: string;
    technical_installation_case_id?: string;
    case?: BBRCase;
};

