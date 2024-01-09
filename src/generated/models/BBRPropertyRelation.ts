/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * EjendomsRelation indeholder kopidata om BFE'er fra Matrilkens Udvidelse og
 * Ejerfortegnelsen. Data vedligeholdes vha. hændelser.
 */
export type BBRPropertyRelation = {
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
     * Ejerforholdskode for hovedejeren for den ejendom som denne ejendomsrelation refrerer til, baseret på Ejerfortegnelsens oplysninger om ejerskaber ejendommen
     */
    ownership_code?: number;
    /**
     * Afledt attribut som angiver ejendomstypen, dvs. om ejendommen udgør en samlet fast ejendom (dvs. et matrikuleret areal), en bygning på fremmed grund eller en ejerlejlighed
     */
    property_type: number;
    /**
     * Angiver SKAT's vurderingsejendomsnummer som denne Ejendomsrelation indgår i
     */
    valuation_property_number?: string;
    /**
     * Kombination af kommunekode og ejendomsnummer
     */
    esr_number?: number;
    /**
     * Ejendomsnummer for den ESR-ejendom som denne ejendomsrelation indgår i
     */
    property_number?: number;
    /**
     * Angiver den fælles ejendomsidentifikation for den bestemte faste ejendom som den tilhørende BBR-entitet udgør eller indgår i
     */
    bfe_number?: number;
    /**
     * Her angives hvilken Samlet Fast Ejendom der er tilknyttet den konkrete Ejendomsrelation, der er tilknyttet et BBR Objekt.
     */
    sfe_number?: number;
    /**
     * Her angives hvilken BPFG der er tilknyttet den konkrete Ejendomsrelation, der er tilknyttet et BBR Objekt.
     */
    bpfg_number?: number;
    /**
     * Her angives hvilken Ejerlejlighed der er tilknyttet den konkrete Ejendomsrelation, der er tilknyttet et BBR Objekt.
     */
    ejl_number?: number;
    /**
     * Angiver Matriklens ejerlejlighedsnummer når Ejendomsrelation er af typen ejerlejlighed
     */
    condominium_number?: string;
    /**
     * Angiver ESR's oplysning om det samlede tinglyste areal af en ejerlejlighed som indgår i en enhed eller bygning
     */
    tinglyst_area?: number;
};

