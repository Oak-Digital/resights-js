/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EJFPerson = {
    /**
     * Persistent unik nøgle.
     */
    id: string;
    /**
     * Angiver personens fulde navn med statusangivelse.
     */
    name?: string;
    first_name?: string;
    last_name?: string;
    /**
     * Angiver personens fulde navn.
     */
    full_name?: string;
    /**
     * Angiver personens adresseringsnavn.
     */
    addressing_name?: string;
    /**
     * C/O navn i adressen. Konstanten C/O samt en blank vil være indeholdt i de første 4 positioner.
     */
    name_co?: string;
    /**
     * Angiver personens køn.
     */
    gender: string;
    /**
     * Angiver personens status.
     */
    status: string;
    /**
     * Hændelsesdato/tid for angivelse af status. Eksisterer kun i forbindelse med en inaktiv status.
     */
    status_date: string;
    /**
     * Angiver at statusdato er usikker, hvilket vil sige at det ikke har været muligt at verificere datoens korrekthed.
     */
    status_date_uncertain: boolean;
    /**
     * Angiver personens fødselsdato.
     */
    birth_date: string;
    /**
     * Angiver at fødselsdatoen er usikker, hvilket vil sige, at det ikke har været muligt af verificere datoens korrekthed.
     */
    birth_date_uncertain: boolean;
    /**
     * Kode for en kommune.
     */
    municipality_code?: number;
    /**
     * Navn for en kommune.
     */
    municipality_name?: string;
    /**
     * Sammensat af: vejadresseringsnavn husnummer, etage, sidedoer bygningsnummer
     */
    standard_address?: string;
    /**
     * Bygningsnummer er et persondatafelt, og anvendes på Grønland som selvstændigt datum eller i stedet for husnummer.
     */
    building_number?: string;
    /**
     * Vejkode danner sammen med kommunekode en entydig kode for en vej i Danmark. Værdimængde: 0001 - 9999
     */
    street_code?: number;
    /**
     * En forkortelse af vejnavn, som benyttes ved forsendelser. Feltet er indrapporteret, hvis vejnavnet er over 20 positioner. Ved vejnavne under 20 positioner er vejnavn = vejadresseringsnavn.
     */
    street_name?: string;
    /**
     * Feltet angiver husnummer på en given bolig.
     */
    house_number?: string;
    /**
     * Etageangivelse i adressen. 1 - 99 samt kl, k2, k3, st og blank. mz, kv, og pt kan desuden forekomme ved adresseregistreringer.
     */
    floor?: string;
    /**
     * Side- eller dørnummer for en bolig. Identificerer sammen med kommunekode, vejkode, husnummer, og etage en bolig.
     */
    door?: string;
    /**
     * Bynavn i klarskrift. Benyttes som en del af den postale adresse, hvor postnummer og postdistrikt er utilstrækkeligt, ved forsendelse af post til borgeren.
     */
    city_name?: string;
    /**
     * Angiver postdistrikts navn i klarskrift. Feltet er på 20 karakterer, så det sammen med postnummer + 1 blank kan være i en rudekuvert.
     */
    zip_name?: string;
    /**
     * Postvæsenets landsdækkende postnummerkode. Postnummer er et obligatorisk vejdistrikt.
     */
    zip_code?: number;
    address_name: string;
    /**
     * Angiver det land personen er indrejst fra eller udrejst til
     */
    country?: string;
    /**
     * Angiver det land personen er indrejst fra eller udrejst til
     */
    country_code?: number;
    /**
     * Fritekst om udenlandsadresser
     */
    address_line_1?: string;
    /**
     * Fritekst om udenlandsadresser
     */
    address_line_2?: string;
    /**
     * Fritekst om udenlandsadresser
     */
    address_line_3?: string;
    /**
     * Fritekst om udenlandsadresser
     */
    address_line_4?: string;
    /**
     * Fritekst om udenlandsadresser
     */
    address_line_5?: string;
    /**
     * Angiver om personen har en beskyttelse af typen kreditadvarsel
     */
    credit_alert?: boolean;
    /**
     * Angiver om personen har en beskyttelse af typen markedsfoering
     */
    marketing_protection?: boolean;
    /**
     * Angiver om personen har en beskyttelse af typen lokal vejviser
     */
    local_directory_protection?: boolean;
    /**
     * Angiver om personen har en beskyttelse af typen navne og adresse beskyttekse
     */
    name_and_address_protection?: boolean;
};

