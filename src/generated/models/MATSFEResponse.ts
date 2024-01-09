/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MATLand } from './MATLand';
import type { MATStatusEnum } from './MATStatusEnum';
export type MATSFEResponse = {
  /**
   * Persistent unik nøgle.
   */
  id: number;
  namespace: string;
  /**
   * Angivelse af hvor et forvaltningsobjekt er i sin livscyklus.
   */
  status: MATStatusEnum;
  /**
   * Den manuelle eller IT-understøttede proces hvori forretningsområdet håndterer hændelsen.
   */
  business_process: string;
  /**
   * Den del af den offentlige forretning der håndterer hændelsen og derved udvirker ændringen i data.
   */
  business_area: string;
  /**
   * Den primære begivenhed i virkeligheden som udløste ændringen i data.
   */
  business_event: string;
  /**
   * Unik identifikation af den sag som sidst har foretaget opdatering af det pågældende matrikulære element.
   */
  latest_case_id: number;
  /**
   * Den påtænkte handling for objekter med status 'Under udarbejdelse' og 'Foreløbig'
   */
  intended_action?: string;
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
   * Datafordeler opdateringstid
   */
  daf_updated_at?: string;
  /**
   * Bestemt fast ejendom
   */
  bfe_number: number;
  /**
   * Angiver om den samlede faste ejendom er en arbejderbolig.
   */
  worker_house: boolean;
  /**
   * Angiver, at typen af samlet fast ejendom er fælleslod.
   */
  is_common_lot: boolean;
  /**
   * Angiver, om den pågældende samlede faste ejendom er registreret som hovedejendom og opdelt i ejerlejligheder.
   */
  mother_property_divided_into_condominiums: boolean;
  /**
   * Angiver hvorvidt ejendommen er noteret som landbrugsejendom og derfor har landbrugspligt.
   */
  agriculture_listing?: string;
  /**
   * Angiver, om der er tale om en udskilt, offentlig vej med selvstændigt  matrikelnummer.
   */
  separated_road: boolean;
  lands: Array<MATLand>;
};
