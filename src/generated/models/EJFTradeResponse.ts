/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildingsIncludedEnum } from './BuildingsIncludedEnum';
import type { CurrencyEnum } from './CurrencyEnum';
import type { EJFBusinessAreaEnum } from './EJFBusinessAreaEnum';
import type { EJFBusinessEventEnum } from './EJFBusinessEventEnum';
import type { EJFBusinessProcessEnum } from './EJFBusinessProcessEnum';
import type { EJFOwnerChangeResponse } from './EJFOwnerChangeResponse';
import type { EJFStatusEnum } from './EJFStatusEnum';
import type { LatestTradeResponse } from './LatestTradeResponse';
export type EJFTradeResponse = {
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
   * Dato for ejerens afståelse af ejendommen
   */
  sales_date?: string;
  /**
   * Det samlede beløb, som den eller de ejerskiftede ejendomme er blevet købt for.
   */
  purchase_price_total?: number;
  /**
   * Den pris i rede penge, der skal betales ved køb af en fast ejendom.
   */
  purchase_price_cash?: number;
  /**
   * Dato for underskrift af købsaftale (kaldes også for slutseddel).
   */
  purchase_agreement_date?: string;
  /**
   * Angiver hvilken type valuta købesummen er beregnet i.
   */
  currency?: CurrencyEnum;
  /**
   * Angiver beløbet for en entreprise.
   */
  contract_sum?: number;
  /**
   * Værdi af husdyr som indgår i handlen.
   */
  livestock_value?: number;
  /**
   * Aktiver, der overtages udenfor købesummen.
   */
  movables_value?: number;
  /**
   * Dato for ny ejers overtagelse af betalingsforpligtigelser
   */
  payment_obligation_date?: string;
  /**
   * Fri tekst, der kan følge med anmeldelsen
   */
  deed_text?: string;
  /**
   * Angivelse af, om anmeldelsen omfatter bygninger.
   */
  buildings_included?: BuildingsIncludedEnum;
  owner_changes: Array<EJFOwnerChangeResponse>;
  overview: LatestTradeResponse;
};
