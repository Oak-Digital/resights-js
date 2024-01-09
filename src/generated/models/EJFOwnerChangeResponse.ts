/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcquisitionMethodEnum } from './AcquisitionMethodEnum';
import type { EJFBusinessAreaEnum } from './EJFBusinessAreaEnum';
import type { EJFBusinessEventEnum } from './EJFBusinessEventEnum';
import type { EJFBusinessProcessEnum } from './EJFBusinessProcessEnum';
import type { EJFOwnershipChangeResponse } from './EJFOwnershipChangeResponse';
import type { EJFStatusEnum } from './EJFStatusEnum';
export type EJFOwnerChangeResponse = {
  /**
   * Persistent unik nøgle.
   */
  id: string;
  namespace: string;
  /**
   * Angivelse af hvor et forvaltningsobjekt er i sin livscyklus.
   */
  status?: EJFStatusEnum;
  /**
   * Den manuelle eller IT-understøttede proces hvori forretningsområdet håndterer hændelsen.
   */
  business_process?: EJFBusinessProcessEnum;
  /**
   * Den del af den offentlige forretning der håndterer hændelsen og derved udvirker ændringen i data.
   */
  business_area?: EJFBusinessAreaEnum;
  /**
   * Den begivenhed i virkeligheden som udløste ændringen i data.
   */
  business_event?: EJFBusinessEventEnum;
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
   * Persistent unik nøgle for den Ejerskabshændelse behandling eller Person/Virksomhedshændelse behandling, som objektet senest er ændret ved.
   */
  case_id: string;
  /**
   * Dato for købers overtagelse af den købte andel af ejendommen
   */
  acquisition_date: string;
  /**
   * Angiver på hvilken måde overdragelsen er foretaget.
   */
  acquisition_method: AcquisitionMethodEnum;
  /**
   * Unik identifikation af en tinglysningsanmeldelse.
   */
  claim_identifier?: string;
  /**
   * Dato for anmeldelse til tinglysning
   */
  claim_date?: string;
  /**
   * Angivelse af, om Ejerskiftet er betinget
   */
  conditional?: boolean;
  /**
   * Dato for frist oplyst i tinglysningsmeddelelser, som er afsendt som følge af en tinglysning med frist.
   */
  deadline?: string;
  annexes: Array<string>;
  ownership_changes: Array<EJFOwnershipChangeResponse>;
};
