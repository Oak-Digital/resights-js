/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DARAccessAddress } from './DARAccessAddress';
/**
 * Definition:
 * En stedfast, klart afgrænset konstruktion, der er opført til et bestemt formål,
 * og som ikke karakteriseres som en Bygning.
 *
 * Beskrivelse:
 * Et Teknisk anlæg kan være fritstående eller placeret inde i en
 * Bygning eller en Enhed.
 * Et Teknisk anlæg kan i nogle tilfælde være en Bygning På Fremmed Grund (BPFG).
 */
export type BBRTechnicalInstallationResponse = {
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
     * Løbenummer under vurderingsejendommen (vurderingsejendomsnummeret vedligeholdes af SKAT).
     *
     * Værdierne 1-9999 er tilladte.
     */
    tek007_facility_number?: number;
    /**
     * Beskriver det tekniske anlægs anvendelse.
     */
    tek020_classification?: number;
    /**
     * Angiver fabrikattype af det tekniske anlæg.
     */
    tek021_production_type?: string;
    /**
     * Reference til ekstern database.
     */
    tek022_external_database?: string;
    /**
     * Unik teknisk nøgle til det tekniske anlæg.
     */
    tek023_external_key?: string;
    /**
     * Årstallet hvor det tekniske anlæg er færdigt etableret.
     *
     * Angives i formatet åååå.
     */
    tek024_year_of_establishment?: number;
    /**
     * Årstallet for seneste til-/ombygning.
     *
     * Angives i formatet åååå.
     */
    tek025_year_of_renovation?: number;
    /**
     * Olietankens størrelsesklasse. Kun gældende for olietanke.
     */
    tek026_oiltank_size?: number;
    /**
     * Placering af tank, silo, gas- og affaldsbeholder.
     */
    tek027_location?: number;
    /**
     * Forhold for sløjfning af tank og slanger til jordvarme.
     */
    tek028_oiltank_removal?: number;
    /**
     * Fabrikationsnummeret på tank.
     */
    tek030_production_number?: string;
    /**
     * Typegodkendelsesnummeret angives på en af to måder:
     * ENTEN:
     * På formen xx xxx
     * PUFO godkendelsesnummer før 1. januar 2000 (nb. Ikke krav om PUFO godkendelse af overjordiske tanke før 1. januar 2000).
     * ELLER:
     * På formen xx xxxx
     * PUFO godkendelsesnummer efter 1. januar 2000.
     */
    tek031_approval_number_type?: string;
    /**
     * Tankens størrelse.
     *
     * Angives i liter.
     */
    tek032_size?: number;
    /**
     * Beskriver olietankens konstruktion, ift. bekyttelse imod korrosion.
     */
    tek033_type?: number;
    /**
     * Beskriver indhold af tank/olietank.
     */
    tek034_oiltank_content?: number;
    /**
     * Frist for sløfning af tank.
     *
     * Angives i ååååmmdd
     */
    tek035_oiltank_removal_deadline?: string;
    /**
     * Rumfang af teknisk anlæg.
     *
     * Angives i kubikmeter.
     */
    tek036_volume?: number;
    /**
     * Bebygget areal af teknisk anlæg.
     *
     * Angives i kvadratmeter.
     */
    tek037_area?: number;
    /**
     * Højde af det tekniske anlæg. For vindmøller angives højden til vindmøllens vingespids.
     *
     * Angives i meter.
     */
    tek038_height?: number;
    /**
     * Effekt for et energiproducerende teknisk anlæg.
     *
     * Angives i kilowatt.
     */
    tek039_effect?: number;
    /**
     * Angiver eventuel type af fredning der gælder for det teknisk anlæg.Feltet ajourføres af Kulturstyrelsen.
     */
    tek040_preservation?: string;
    /**
     * Revisionsdato for seneste ændring af geometri.
     *
     * Angives i ååååmmdd.
     */
    tek042_revision_date?: string;
    /**
     * Det geografiske koordinatsystem geometrioplysninger er angivet i.
     */
    tek045_coordinate_system?: number;
    /**
     * Dette felt gælder for tanke. Årstal for tankens fabrikation
     * angives. For tanke omfattet af olietankbekendtgørelsen
     * beregnes sløjfningsfristen ud fra tankens
     * fabrikationsår.
     *
     * Angives i formatet åååå.
     */
    tek067_production_year?: number;
    /**
     * Dette felt gælder for tanke. Materiale tanken er lavet af.
     */
    tek068_material?: number;
    /**
     * Dette felt gælder for tanke. Angiver type af senest udførte supplerende indvendig korrosionsbeskyttelse (korrosionsbeskyttelse som tanken ikke er ”født med”)
     */
    tek069_additional_internal_corrosion_protection?: number;
    /**
     * Dato for den senest udførte indvendige korrosionsbeskyttelse.
     *
     * Angives i formatet ååååmmdd.
     */
    tek070_additional_internal_corrosion_protection_latest_date?: string;
    /**
     * Dette felt gælder for tanke. Feltet angiver årstal for sløjfning af tank.
     *
     * Angives i formatet åååå.
     */
    tek072_removal_year?: number;
    /**
     * Dette felt gælder for vindmøller. Vindmøllens højde målt til navet.
     *
     * Angives i meter
     */
    tek073_hub_height?: number;
    /**
     * Vindmøllens unikke nummer i Energistyrelsens vindmølleregister (GSRN).
     */
    tek074_windmill_number?: string;
    /**
     * Diameteren for rotoren på vindmøllen.
     *
     * Angives i meter.
     */
    tek075_rotor_diameter?: number;
    /**
     * Kilden til koordinatsættets oplysninger.
     */
    tek076_coordinates_source?: string;
    /**
     * Kvalitetet af koordinatsæt.
     */
    tek077_coordinates_quality?: number;
    /**
     * Her angives, om det fysiske objekt koordinatsættet referer til, ligger under eller over jorden.
     */
    tek078_coordinates_supplementary_information?: number;
    /**
     * Gyldighedsdato i forbindelse med vurdering.
     */
    tek101_validation_date?: string;
    /**
     * Her angives fabrikatet eller typen på vindmøllen.
     */
    tek102_windmill_brand?: string;
    /**
     * Angiver fabrikatet eller typen på oliefyret.
     */
    tek103_oil_fired_burner_brand?: string;
    /**
     * Angiver fabrikatet eller typen på solcelleanlægget eller solvarmenanlægget.
     */
    tek104_solarsystem_brand?: string;
    /**
     * Her angives om tanken er helt, delvis eller ikke overdækket.
     */
    tek105_tank_cover?: string;
    /**
     * Angiver dato for seneste inspektion af tank.
     */
    tek106_tank_inspection_date?: string;
    /**
     * Angiver om objekt ligger på Søterritorie.
     */
    tek107_placement_maritime_territory?: boolean;
    /**
     * Det tekniske areals geografiske placering ved hjælp af et punkt.
     */
    tek109_coordinate?: string;
    /**
     * Ukendt
     */
    tek110_operating_status?: number;
    /**
     * Ukendt
     */
    tek111_inspection_latest_date?: string;
    /**
     * Ukendt
     */
    tek112_inspection_company?: string;
    /**
     * Notatlinjer indeholder tekstuel information om et givet BBR objekt, som ikke naturligt omfattes af eksisterende attributter på BBR objektet. Det kan for eksempel være særlige forhold om adgang til eller anvendelsen af BBR objektet. Der kan, som navnet angiver, angives flere notatlinjer.
     */
    tek500_note?: string;
    access_address?: DARAccessAddress;
};

