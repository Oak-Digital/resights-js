/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Definition:
 * Et sammenhængende vandret bærende etageplan i en Bygning.
 *
 * Beskrivelse:
 * Etager, der opdeles af et niveauspring på mere end en halv etage højde, regnes
 * ikke som en samlet Etage.
 * Trappeskakter, udvendige trapper og adgangsarealer indregnes i Etagen.
 *
 * Bemærkninger:
 * Definition af de enkelte Etager tilfører ikke forretningsmæssigværdi til
 * beskrivelsen af alle typer Bygninger.
 * En Etage kan have flere Enheder, og en Enhed kan have flere Etager. Derfor er
 * relationerne mellem Etage og Enhed 0..*0..*.
 * Der kan være flere Enheder og Etager i en bygning, men Enheder og Etager kan
 * ikke deles mellem Bygninger. Derfor er kardinaliteterne her henholdsvis 0..1 og 1.
 */
export type BBRFloorResponse = {
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
   * Her angives etagebetegnelsen  som anvendes i bygningen.
   *
   * Bemærkning:
   * Dette er ikke identisk med etagebegrebet i Grunddataregister (DAR)
   */
  eta006_floor_name_building?: string;
  /**
   * Det samlede areal af den pågældende etage.
   *
   * Angives i kvadratmeter.
   */
  eta020_area_total_floor?: number;
  /**
   * Arealet af den del af tagetagen, der bliver udnyttet til beboelse eller erhverv.
   *
   * Angives i kvadratmeter.
   */
  eta021_area_utilized_attic?: number;
  /**
   * Her angives areal på kælder, hvis loft ligger mindre end 1.25 m over terræn.
   *
   */
  eta022_area_basement?: number;
  /**
   * Arealet af den del af kælderen der er indrettet til lovlig beboelse i henhold til byggelovgivningen.
   *
   * Angives i kvadratmeter.
   */
  eta023_area_legal_residential_basement?: number;
  /**
   * Etagens samlede adgangsareal.
   *
   * Angives i kvadratmeter.
   */
  eta024_area_access?: number;
  /**
   * Her angives om etagen er en tagetage.
   */
  eta025_floor_type?: number;
  /**
   * Her angives det samlede areal af erhverv i kælder.
   *
   * Angives i kvadratmeter.
   */
  eta026_basement_commercial?: number;
  eta500_note?: string;
  building_id: string;
};
