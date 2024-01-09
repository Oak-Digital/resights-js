/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DARAccessAddress } from './DARAccessAddress';
import type { DARAddress } from './DARAddress';
import type { EBRStatusEnum } from './EBRStatusEnum';
export type EBRPropertyLocationResponse = {
  /**
   * Persistent unik nøgle.
   */
  id: string;
  namespace: string;
  /**
   * Angivelse af hvor et forvaltningsobjekt er i sin livscyklus.
   */
  status: EBRStatusEnum;
  /**
   * Den manuelle eller IT-understøttede proces hvori forretningsområdet håndterer hændelsen.
   */
  business_process: string;
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
  /**
   * Udpeger den kommune som har det administrative ansvar for den bestemte faste ejendom.
   */
  municipality_code?: number;
  /**
   * Udpeger den bestemte faste ejendom der har sin beliggenhed og sin kommune tilhørsforhold angivet ved en ejendomsbeliggenhed.
   */
  bfe_number: number;
  /**
   * Tekst der beskriver ejendommens beliggenhed i tilfælde hvor der ikke er en adresse at vælge ved udstilling af beliggenhedsadressen
   */
  description?: string;
  /**
   * Journalnummer i kommunens ESDH i de tilfælde hvor der er valgt en anden adresse end den automatisk beregnede
   */
  esdh_reference_address?: string;
  /**
   * Journalnummer i kommunens ESDH i de tilfælde hvor der er valgt en anden kommune end den automatisk beregnede.
   */
  esdh_reference_municipality_code?: number;
  /**
   * Markering når der er valgt en anden adresse end den der automatisk er beregnet
   */
  address_manually_entered: boolean;
  /**
   * Markering når der er valgt en anden kommune end den der automatisk er beregnet
   */
  municipality_manually_entered: boolean;
  address?: DARAddress;
  access_address?: DARAccessAddress;
};
