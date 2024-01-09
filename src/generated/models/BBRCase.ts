/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Byggesag indeholder oplysninger om byggesager og fremdriften i disse samt andre
 * sager, som kan medføre en opdatering af BBR. Der findes to typer: anmeldelses- og
 * tilladelsessager. I BBR 2.0 tilføjes en ny type der anvendes til at gennemføre
 * foreløbige registreringer.
 *
 * Beskrivelse:
 * Byggesag  har til formål at modtage oplysninger om ændringer i bygnings- og
 * boligbestanden, som opstår gennem byggesagsbehandlingen, samt at vedligeholde en
 * aktuel beskrivelse af de ændringer, der er under udførelse, men som ikke er
 * fuldført endnu (verserende byggesager).
 *
 * En Byggesag skal normalt være relateret til en Bygning eller et Teknisk anlæg.
 * Undtaget er sager som alene indeholder objekter, som ikke ligger under en
 * Bygning eller et Teknisk anlæg, dvs. ændringer til grunde eller ændringer eller
 * nyopførelse af Teknisk anlæg som ikke ligger i en Bygning.
 *
 * Bemærkninger:
 * Når en Byggesag oprettes oprettes data som foreløbige.
 * Når en verserende Byggesag afsluttes, overføres oplysningerne som gældende i
 * stamdata.
 * Når andre sager afsluttes med en afgørelse ”Godkendt”, overføres sagsdata
 * automatisk til de tilhørende objekter. Ved nedrivning gøres bygningen historisk.
 */
export type BBRCase = {
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
   * Angiver byggesagens nummer
   */
  sag001_building_project_number?: string;
  /**
   * Angiver byggesagensdato
   */
  sag002_building_project_date?: string;
  /**
   * Dato for byggetilladelse
   */
  sag003_building_permission_date?: string;
  /**
   * Dato for forventet påbegyndelse af byggeri.
   */
  sag004_start_date_expected?: string;
  /**
   * Dato for påbegyndelse af byggeri
   */
  sag005_start_date?: string;
  /**
   * Angiver dato for ibrugtagning
   */
  sag006_commissioning_permit?: string;
  /**
   * Angiver dato for henlæggelse af sag
   */
  sag007_closure?: string;
  /**
   * Angiver det færdiggjorte bygningsareal.
   */
  sag008_completed_building_area?: number;
  /**
   * Angiver dato for forventet fuldførelse af byggeri.
   */
  sag009_expected_finish_date?: string;
  /**
   * Dato for fuldførelse af byggeri.
   */
  sag010_completion_project?: string;
  /**
   * Angiver koden for sagen.
   */
  sag012_building_project_code?: number;
  /**
   *  Dato for anmeldelse af byggearbejde.
   */
  sag013_notification_construction_work_date?: string;
  /**
   * Dato for delvis tilladelse ibrugtagningstilladelse.
   */
  sag016_commissioning_permit_partial?: string;
  /**
   * Foreløbigt færdiggjort bygningsareal.
   */
  sag017_provisionally_completed_building_area?: number;
  /**
   * Angiver foreløbigt færdiggjort antal lejligheder.
   */
  sag018_provisionally_completed_apartments?: number;
  /**
   * Angiver hvem der er bygherre.
   */
  sag019_developer_relationship?: number;
  /**
   * Angiver dato for modtagelse af ansøgning om byggetilladelse.
   */
  sag024_received_application_building_project_date?: string;
  /**
   * Angiver dato for fyldestgørende ansøgning om byggetilladelse.
   */
  sag025_adequate_application_date?: string;
  /**
   * Angiver dato for igangsættelse af naboorientering.
   */
  sag026_neighbor_orientation_date?: string;
  /**
   * Angiver dato for færdigbehandling af naboorientering.
   */
  sag027_neighbor_orientation_completion_date?: string;
  /**
   * Angiver litra under byggesagen.
   */
  sag032_letter?: string;
  /**
   * Angiver antal færdiggjorte lejligheder.
   */
  sag033_provisionally_completed_apartments_without_kitchen?: number;
};
