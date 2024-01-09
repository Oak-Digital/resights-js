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
import type { EJFStatusEnum } from './EJFStatusEnum';
import type { OwnershipCodeEnum } from './OwnershipCodeEnum';
export type EJFOwnershipResponse = {
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
   * Bestemt fast ejendomsnummer
   */
  bfe_number: number;
  /**
   * Kode der klassificerer ejeren af ejendommen.
   */
  ownership_code?: OwnershipCodeEnum;
  /**
   * Markering af om ejerskabet falder ind under bestemmelsen om ejendomme ejet siden 01.07.1998
   */
  owned_before_01071998: boolean;
  actual_share?: number;
  /**
   * Den andel af ejendommen, som det offentlige regner ejeren som ejer af, f.eks. i forbindelse med beregning af ejendomsskat.
   */
  actual_share_numerator: number;
  /**
   * Den andel af ejendommen, som det offentlige regner ejeren som ejer af, f.eks. i forbindelse med beregning af ejendomsskat.
   */
  actual_share_denominator: number;
  registered_share?: number;
  /**
   * Den andel af ejendommen som ejeren har tinglyst adkomst til
   */
  registered_share_numerator?: number;
  /**
   * Den andel af ejendommen som ejeren har tinglyst adkomst til
   */
  registered_share_denominator?: number;
  /**
   * Angiver om ejer er den som offenlige myndigheder skal kontakte vedrørende ejendommen.
   */
  primary_contact: boolean;
  /**
   * Markering af, om ejeren ifølge tinglysning, har begrænset dispositionsret til ejendommen
   */
  limitation?: boolean;
  person?: EJFPerson;
  company?: EJFCompany;
  other?: EJFPersonCompanyInfo;
};
