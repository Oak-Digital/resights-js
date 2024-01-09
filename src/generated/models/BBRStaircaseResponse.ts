/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DARAccessAddress } from './DARAccessAddress';
/**
 * Definition:
 * Opgang indeholder oplysninger omkring en Opgang og har en relationen til én Bygning.
 *
 * Beskrivelse:
 * En opgang er et mellemled mellem en Bygning og en Enhed. En Enhed relaterer til én
 * Opgang og en Opgang relaterer til én Bygning.
 *
 * Bemærkninger:
 * En Bygning kan have en eller flere Opgange, men en Opgang kan kun ligge i én
 * Bygning. Derfor er relationerne mellem Bygning og Opgang 0..* og en Opgang skal
 * altid have en relation til én Bygning.
 *
 * Tilsvarende gælder at der kan være en eller flere Enheder i en Opgang, men at en
 * Enhed ikke kan have mere end en Opgang. Derfor er relationen mellem Opgang og
 * Enhed 0..* og en Enhed skal altid have en relation til én Opgang.
 */
export type BBRStaircaseResponse = {
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
   * Angiver om der er elevator i opgangen/bygningen.
   */
  opg020_elevator?: boolean;
  /**
   * Ukendt
   */
  opg021_access_address_function?: number;
  /**
   * Notatlinjer indeholder tekstuel information om et givet BBR objekt, som ikke naturligt omfattes af eksisterende attributter på BBR objektet. Det kan for eksempel være særlige forhold om adgang til eller anvendelsen af BBR objektet. Der kan, som navnet angiver, angives flere notatlinjer.
   */
  opg500_note?: string;
  building_id: string;
  access_address?: DARAccessAddress;
};
