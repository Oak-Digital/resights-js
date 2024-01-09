/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BBRFloorAggs } from './BBRFloorAggs';
import type { DARAccessAddress } from './DARAccessAddress';
import type { EnergyLabelSimple } from './EnergyLabelSimple';
import type { SLKSFBB } from './SLKSFBB';
/**
 * En Bygning består af en eller flere konstruktioner, der udgør en rumlig helhed,
 * og som skærmer mod vejrliget og skal som minimum bestå af en overdækning.
 *
 * Beskrivelse:
 * På bygningsniveau i BBR findes de oplysninger, der er fælles for Bygningen,
 * det vil sige for alle de Enheder, Bygningen indeholder
 * (f.eks. tagbeklædning  og materiale af ydre vægge).
 * Ved en bygning forstås i BBR en sammenhængende bebyggelse, der er opført på en
 * selvstændig Bestemt fast ejendom, og som i det væsentlige er opført af ensartede
 * materialer og med omtrent samme antal etager. Bebyggelsen skal også have ensartede
 * adgangsforhold (f.eks. direkte adgang til vej eller indirekte adgang gennem port
 * eller lignende).
 *
 * Bemærkninger:
 * En Bygning registreres i BBR uanset om den er opført på et matrikuleret eller
 * umatrikuleret areal - herunder også bygninger opført på forstand eller
 * søterritoriet.
 */
export type BBRBuildingResponse = {
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
     * Angiver bygningens nummer indenfor vurderingsejendommen
     */
    byg007_building_number?: number;
    /**
     * Bygningens hovedanvendelse. Har en bygning flere anvendelser registreres den anvendelse som hovedparten af bygningen har.
     */
    byg021_building_usage?: number;
    /**
     * Antal lejligheder (enheder) med eget køkken i bygningen.
     */
    byg024_number_apartments_with_kitchen?: number;
    /**
     * Antal lejligheder uden køkken i bygning.
     */
    byg025_number_apartments_without_kitchen?: number;
    /**
     * Angiver bygningens opførselsår.
     */
    byg026_construction_year?: number;
    /**
     * Angiver bygningens seneste om- eller tilbygningsår.
     */
    byg027_rebuilding_year?: number;
    /**
     * Angiver udløbsdato for midlertidig opført bygning.
     */
    byg029_temporary_building_date?: string;
    /**
     * Angiver bygningens vandforsyning.
     */
    byg030_water_supply?: string;
    /**
     * Angiver bygningens afløbsforhold.
     */
    byg031_drainage?: number;
    /**
     * Angiver bygningens ydervægsmateriale.
     */
    byg032_material_exterior_wall?: number;
    /**
     * Angiver bygningens tagdækningsmateriale.
     */
    byg033_material_roofing?: number;
    /**
     * Angiver bygningens supplerende ydervægsmateriale.
     */
    byg034_material_supplementary_exterior_wall?: number;
    /**
     * Angiver bygningens supplerende tagdækningsmateriale.
     */
    byg035_material_supplementary_roofing?: number;
    /**
     * Angivelse af om der er konstateret asbestholdigt materiale i ydervæg eller tagdækning.
     */
    byg036_material_contains_asbestos?: number;
    /**
     * Angiver kilde til bygningens materialer.
     */
    byg037_material_source?: number;
    /**
     * Angiver bygningens samlede areal.
     */
    byg038_area_building_total?: number;
    /**
     * Angiver bygningens samlede boligareal.
     */
    byg039_area_building_residential?: number;
    /**
     * Angiver bygningens samlede erhvervsareal.
     */
    byg040_area_building_commercial?: number;
    /**
     * Angiver bygningens bebyggede areal.
     */
    byg041_area_constructed?: number;
    /**
     * Angiver areal af indbygget garage.
     */
    byg042_area_built_in_garage?: number;
    /**
     * Angiver areal af indbygget carport.
     */
    byg043_area_built_in_carport?: number;
    /**
     * Angiver areal af indbygget udhus.
     */
    byg044_area_built_in_outhouse?: number;
    /**
     * Angiver areal af indbygget udstue.
     */
    byg045_area_built_in_patio?: number;
    /**
     * Angiver areal af lukkede overdækninger på hele bygningen.
     */
    byg046_area_closed_building_areas_total?: number;
    /**
     * Angiver areal af samtlige affaldsrum i terrænniveau.
     */
    byg047_area_waste_rooms_terrain_level?: number;
    /**
     * Angiver andet areal i bygning.
     */
    byg048_area_other?: number;
    /**
     * Angiver arealet af overdækket areal på bygning.
     */
    byg049_area_covered?: number;
    /**
     * Angiver det samlede areal af åbne overdækninger på bygningen.
     */
    byg050_area_open_roofs_total?: number;
    /**
     * Angiver det samlede adgangsareal på bygning.
     */
    byg051_area_access?: number;
    /**
     * Angiver beregningsprincip for areal af carport.
     */
    byg052_area_carport_calculation_principle?: number;
    /**
     * Angiver kilde til oplysninger om bygningens arealer.
     */
    byg053_area_building_source?: number;
    /**
     * Angiver antal etager i bygningen.
     */
    byg054_number_floors?: number;
    /**
     * Angiver om bygningen indeholder afvigende etager.
     */
    byg055_deviating_floors?: number;
    /**
     * Angiver bygningens primære varmeinstallation.
     */
    byg056_heating_installation?: number;
    /**
     * Angiver bygningens primære opvarmingsmiddel.
     */
    byg057_heating_medium?: number;
    /**
     * Angiver supplerende varmeinstallation i bygningen.
     */
    byg058_heating_supplementary?: number;
    /**
     * Angiver antallet at sikringsrumpladser i bygningen.
     */
    byg069_number_seats_emergency_room?: number;
    /**
     * Angiver om bygningen er fredet.
     */
    byg070_preservation?: number;
    /**
     * Linker til Kulturstyrelsens registrering i FBB (Fredede og Bevaringsværdige Bygninger).
     */
    byg071_preservation_reference?: number;
    /**
     * Angiver revisionsdato for seneste ændring af geometrioplysninger.
     */
    byg094_revision_date?: string;
    /**
     * Angiver selvrisiko ved stormskade.
     */
    byg111_storm_council_flooding_risk?: number;
    /**
     * Angiver ajourføringsdato for registrering fra Stormrådet.
     */
    byg112_storm_council_flooding_risk_date?: string;
    /**
     * Angiver navnet på byggeskadeforsikringsselskab
     */
    byg113_building_damage_insurance?: number;
    /**
     * Angiver ikræfttrædelsesdato for byggeskadeforsikring.
     */
    byg114_building_damage_insurance_date?: string;
    /**
     * Angiver status for udledningstilladelse på bygningen.
     */
    byg119_discharge_permit?: number;
    /**
     * Angiver om bygningen er omfattet af byggeskadeforsikring.
     */
    byg121_building_damage_insurance_covered?: number;
    /**
     * Angiver gyldighedsdato i forbindelse med vurdering.
     */
    byg122_validation_date?: string;
    /**
     * Angiver om der for bygningen er indgået kontraktligt medlemskab af spildevandsforsyningsselskab.
     */
    byg123_wastewater_supply_membership?: number;
    /**
     * Angiver om der er givet påbud vedr. spildevandsafledning på bygningen.
     */
    byg124_wastewater_drainage_order?: number;
    /**
     * Angiver dato for frist for evt. påbud vedr. spildevandsafledning på bygningen.
     */
    byg125_wastewater_drainage_deadline?: string;
    /**
     * Angiver tilladelse til udtræden af det offentlige kloakfællesskab.
     */
    byg126_permission_exit?: number;
    /**
     * Angiver dato for tilladelse til udtræden af det offentlige kloakfællesskab.
     */
    byg127_permission_exit_date?: string;
    /**
     * Angiver tilladelse til alternativ bortskaffelse eller afledning af spildevand.
     */
    byg128_permission_alternative_disposal_diversion?: number;
    /**
     * Dato for tilladelse til alternativ bortskaffelse eller afledning af spildevand.
     */
    byg129_permission_alternative_disposal_diversion_date?: string;
    /**
     * Angiver areal af udvendig efterisolering.
     */
    byg130_area_exterior_insulation?: number;
    /**
     * Angiver om der er givet dispensation eller fritagelse ift kollektiv varmeforsyning.
     */
    byg131_exemption_collective_heating_supply?: number;
    /**
     * Angiver dato for dispensation eller fritagelse ift kollektiv varmeforsyning.
     */
    byg132_exemption_collective_heating_supply_date?: string;
    /**
     * Kodeliste der angiver kilden til geometrioplysninger.
     */
    byg133_coordinate_source?: string;
    /**
     * Kodeliste der angiver kvaliteten af geometrioplysninger.
     */
    byg134_coordinate_quality?: string;
    /**
     * Angiver om det fysiske objekt koordinatsættet referer til ligger under eller over jorden.
     */
    byg135_coordinate_supplementary_information?: string;
    /**
     * Angiver om objekt ligger på søterritorie.
     */
    byg136_placement_maritime_territory?: boolean;
    /**
     * Angiver Banedanmarks BGV-nummer og bygværksnummer
     */
    byg137_banedanmark_building_number?: string;
    /**
     * Dato for eventuel tinglyst servitut der undtager en udlejningsejendom for byggeskadeforsikring
     */
    byg140_easement_rental_property_date?: string;
    /**
     * Oplysning som kan knyttes til en bygning til erhvervsformål. Angiver typen af gulvbelægning fx beton
     */
    byg150_material_floor?: string;
    /**
     * Oplysning som kan knyttes til en bygning til lagerformål, garage e.l. Angiver den maksimale højde af køretøjer der kan køre ind og ud af bygningen
     */
    byg151_clearance_height?: string;
    /**
     * Information om bygningen udgør en åben eller lukket konstruktion, dvs. med eller uden ydervægge
     */
    byg152_construction_open_closed?: string;
    /**
     * Information om typen af bygningens bærende konstruktion
     */
    byg153_construction_conditions?: string;
    /**
     * Angiver type af flytning af en bygning.
     */
    byg301_relocation_type?: string;
    /**
     * Angiver den kommune bygningen flyttes til.
     */
    byg302_municipality_newcomers?: string;
    /**
     * Angiver øvrige bemærkninger fra stormrådet.
     */
    byg403_storm_council_supplementary_comments?: string;
    /**
     * Angiver bygningens geografiske repræsentation i form af et punkt.
     */
    byg404_coordinate?: string;
    /**
     * Angiver geografisk koordinatsystem og projektion.
     */
    byg406_coordinate_system?: string;
    /**
     * Beskrivende tekstnotat om særlige forhold for dette BBR-element
     */
    byg500_note?: string;
    slks?: SLKSFBB;
    energy_label?: EnergyLabelSimple;
    access_address?: DARAccessAddress;
    floor?: BBRFloorAggs;
    opg020_elevator: boolean;
    number_units: number;
    number_floors: number;
    number_staircases: number;
    plot_id: string;
};

