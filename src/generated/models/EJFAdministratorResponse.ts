/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EJFBusinessAreaEnum } from './EJFBusinessAreaEnum';
import type { EJFBusinessEventEnum } from './EJFBusinessEventEnum';
import type { EJFBusinessProcessEnum } from './EJFBusinessProcessEnum';
import type { EJFCompany } from './EJFCompany';
import type { EJFPerson } from './EJFPerson';
import type { EJFPersonCompanyInfo } from './EJFPersonCompanyInfo';
import type { EJFPUnit } from './EJFPUnit';
import type { EJFStatusEnum } from './EJFStatusEnum';
export type EJFAdministratorResponse = {
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
   * Anvendes når administrator er en person i CPR
   */
  person_id?: string;
  /**
   * Anvendes når administrator er en virksomhed i CVR
   */
  company_cvr_number?: string;
  /**
   * Anvendes når administrator er en produktionsenhed i CVR
   */
  p_unit_p_number?: string;
  /**
   * Anvendes, når administrator ikke er i CPR eller CVR
   */
  other_id?: string;
  bfe_number: number;
  person?: EJFPerson;
  company?: EJFCompany;
  other?: EJFPersonCompanyInfo;
  p_unit?: EJFPUnit;
};
