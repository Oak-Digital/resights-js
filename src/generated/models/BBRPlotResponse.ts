/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DARAccessAddress } from './DARAccessAddress';
/**
 * Definition:
 * Ved en Grund forstås enten arealer, som i Matriklen er opført som ét Jordstykke,
 * eller fysisk sammenhængende arealer, som i Matriklen er opført som flere
 * Jordstykker, når de ifølge noteringen i Matriklen skal holdes forenede som en
 * Samlet fast ejendom og ligger i samme kommune.
 *
 * Beskrivelse:
 * På grundniveau i BBR findes de oplysninger, der er fælles for alle Bygninger og
 * Enheder inden for den pågældende ejendom (eksempelvis kloakforhold og vandforsyning)
 *
 * Bemærkning:
 * Fysisk sammenhængende Jordstykker for en Samlet Fast Ejendom, som tilhører
 * forskellige ejerlav, udgør ligeledes én Grund.
 */
export type BBRPlotResponse = {
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
   * Forhold omkring vandforsyning for grunden.
   */
  gru009_water_supply?: number;
  /**
   * Forhold omkring afløb for grunden.
   */
  gru010_drainage?: number;
  /**
   * Udledningstilladelse for grund. For grunde udenfor kloakopland jf. spildevandsplanen (afløbskoder 101 - 601) angives status for deres udledningstilladelse.
   */
  gru021_discharge_permit?: number;
  /**
   * For grunde udenfor kloakopland jf. spildevandsplanen (afløbskoder 101-601) angives om der indgået kontraktligt medlemskab med et spildevandsforsyningsselskab.
   */
  gru022_wastewater_supply_membership?: number;
  /**
   * Her angives påbud vedr. spildevandsafledning.
   * For grunde/bygninger udenfor kloakopland jf. spildevandsplanen (afløbskoder 101-601) angives om kommunen har givet påbud om at etablere forbedret rensning, så regionplanens og vandplanens renseklasser overholdes eller om kommunen har givet påbud om tilslutning til spildevandsforsyningsselskab (koderne 0-6).
   *
   * For grunde/bygninger indenfor kloakopland (afløbskoder 1-9) angives om kommunen har givet påbud om, at grunden/bygningen skal tilsluttes separatkloakering (kode7).
   *
   * For grunde/bygninger angives om kommunen har givet påbud påbud vedr. korrektion af fejltilslutninger (kode 8)  eller om kommunen har givet andre påbud iht. Miljøbeskyttelseslovens  paragraf 30, stk. 1 (kode 9).
   *
   * I de tilfælde hvor der benyttes koderne 2-9 skal der ændres til kode 1,  når påbuddet er opfyldt.
   */
  gru023_wastewater_drainage_order?: number;
  /**
   * Dato for frist vedr. spildevandsafledning. For grunde/bygninger hvor der ifølge feltet ”Påbud vedr. spildevandsafledning” er givet et påbud, angives det hvornår fristen opfyldelse af påbuddet udløber.
   *
   * Angives i formatet ååååmmdd.
   */
  gru024_wastewater_drainage_deadline?: string;
  /**
   * For grunde indenfor kloakopland jf. spildevandsplanen (afløbskoder 1-9) angives status for tilladelse til hel eller delvis udtræden af "det offentlige kloakfællesskab" (Spildevandsforsyning) jf. Spildevandsbekendtgørrelsen §11, stk 1.
   */
  gru025_permission_to_exit?: number;
  /**
   * For grunde, hvor der ifølge feltet ”Tilladelse til udtræden” er meddelt tilladelse eller tilladelse er bortfaldet, skal det angives fra hvilken dato tilladelsen er gældende, hhv. fra hvilken dato tilladelsen er bortfaldet.
   * Angives i formatet ååååmmdd.
   */
  gru026_permission_to_exit_date?: string;
  /**
   * For grunde indenfor kloakopland jf. spildevandsplanen (afløbskoder 1-9) angives status for tilladelse til alternativ bortskaffelse eller afledning jf. Spildevandsbekendtgørelsens § 11, stk. 2.
   */
  gru027_permission_to_alternative_disposal_diversion?: number;
  /**
   * For grunde hvor der ifølge feltet ”Tilladelse til alt. bortskaffelse eller afledning” er meddelt tilladelse eller tilladelse er bortfaldet, skal det angives fra hvilken dato tilladelsen er gældende, hhv. fra hvilken dato tilladelsen er bortfaldet.
   *
   * Angives i formatet ååååmmdd.
   */
  gru028_permission_to_alternative_disposal_diversion_date?: string;
  /**
   * For ubebyggede grunde, hvor der ifølge feltet ”Dato for dispensation/fritagelse” er oplyst en dato, angives det om den er tidsbegrænset.
   */
  gru029_exemption_collective_heating_supply?: number;
  /**
   * For ubebyggede grunde, hvor der ifølge feltet ”Dispensation/fritagelse” er udstedt dispensation eller fritagelse, angives dato for dispensation eller fritagelsen.
   *
   * Angives i formatet ååååmmdd.
   */
  gru030_exemption_collective_heating_supply_date?: string;
  /**
   * Notatlinjer indeholder tekstuel information om et givet BBR objekt, som ikke naturligt omfattes af eksisterende attributter på BBR objektet. Det kan for eksempel være særlige forhold om adgang til eller anvendelsen af BBR objektet. Der kan, som navnet angiver, angives flere notatlinjer.
   */
  gru500_note?: string;
  access_address?: DARAccessAddress;
  property_relation_id: string;
  land_ids: Array<number>;
};
