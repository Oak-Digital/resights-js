/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GISGeoBuilding = {
    /**
     * Identifikation af objektet
     */
    id: number;
    /**
     * Attribut afledt af relationen imellem GeoDanmark element og Bygværkselement i Bygninger og boliger. NOTE Den afledte attribut er medtaget for at angive hvorledes relationen i den logiske model skal omsættes til en attribut i det fysiske skema.
     */
    bbr_id?: string;
    /**
     * Midlertidig nøgle til kobling af GeoDanmarkobjekter med eksterne databaser
     */
    temporary_id?: string;
    /**
     * Identifikation af et namespace inden for hvilket lokalId er unik
     */
    namespace: string;
    /**
     * Angivelse af hvor et GeoDanmarkobjekt er i sin livscyklus.
     */
    status: string;
    /**
     * Angivelse af status for registrering af geometri.
     */
    status_geometry: string;
    /**
     * Navnet på den specifikation objektet er registreret under eller er opgraderet til.
     */
    registration_specification: string;
    /**
     * Navnet på den myndighed, der har dataansvaret for objektet.
     */
    data_responsible: string;
    /**
     * Den forretningshændelse, som afstedkom opdateringen.
     */
    business_event: string;
    /**
     * FORM-kode for det offentlige forretningsområde som har opdateret dataobjektet.
     */
    business_area: number;
    /**
     * Den forretningsproces som har opdateret dataobjektet.
     */
    business_process?: string;
    /**
     * Den aktør der sidst har registreret noget på objektet, så objektet fik ny identitet.
     */
    registration_actor: string;
    /**
     * Dato og tid for databasesystemets tildeling af en ny ident til objektet og for alle efterfølgende ændringer af enhver art på objektet.
     */
    registration_from: string;
    /**
     * Tidspunktet for objektets 'ændring' eller 'sletning' i databasen. Ved 'ændring' forstås ændring af enhver art, hvor den hidtidige version af objektet gøres historisk og en ny version, bliver den aktuelle.
     */
    registration_to?: string;
    /**
     * Den aktør der sidst har udført ændringer af enhver art på objektet.
     */
    effect_actor: string;
    /**
     * Tidspunktet hvorfra objektet har virkning. For fotogrammetri: fotodatoen. Ellers kan datoen dateres til fortiden, nutiden eller fremtiden.
     */
    effect_from: string;
    /**
     * Tidspunktet for objektets 'ændring' eller 'sletning' i databasen. Ved 'ændring' forstås ændring af enhver art, hvor den hidtidige version af objektet gøres historisk og en ny version, bliver den aktuelle.
     */
    effect_to?: string;
    /**
     * Den forventede middelfejl på nøjagtigheden af den registrerede XY-koordinat i forhold til dets placering i virkeligheden. 'Ukendt nøjagtighed' angives med en nøjagtighed på '10.00'
     */
    plan_accuracy: number;
    /**
     * Metode til stedfæstelse af objektets koordinater i XY
     */
    plan_placement_method: string;
    /**
     * Den forventede middelfejl på nøjagtigheden af den registrerede Z-koordinat i forhold til dets placering i virkeligheden. 'Ukendt nøjagtighed' angives med en nøjagtighed på '10.00'
     */
    vertical_accuracy: number;
    /**
     * Metode til stedfæstelse af objektets Z-.koordinater.
     */
    vertical_plan_placement_method: string;
    /**
     * Et frit tekstfelt, der angiver den applikation og version, der har indleveret data til databasen
     */
    application: string;
    /**
     * Et frit tekstfelt, der kan indeholde en valgfri kommentar/beskrivelse af objektets forhold.
     */
    comment?: string;
    /**
     * Angiver type af bygning med én af de anførte værdier.
     */
    building_type: string;
    /**
     * Angiver den metode, objektet er stedfæstet med.
     */
    measurement_place: string;
    /**
     * Angiver efter hvilken metode herunder specifikation z-koordinaten er registreret.
     */
    method_3d: string;
    /**
     * Angivelse af om arealet er mindre end den minimumstørrelse på en Bygning, som er defineret i GeoDanmark-Specifikationen.
     */
    below_minimum_building: boolean;
    /**
     * Dette er en hjælpeattribut i forbindelse med geokodning.
     */
    bbr_action?: string;
    /**
     * Angiver, om en BYGNING er synlig i et ortofoto.
     */
    visible: boolean;
    /**
     * Angiver, om en BYGNING overlappes helt eller delvist af en anden BYGNING.
     */
    overlap: boolean;
    /**
     * Objektets geografiske placering.
     */
    geom: string;
};

