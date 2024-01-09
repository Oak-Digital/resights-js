/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MATStatusEnum } from './MATStatusEnum';
export type MATCondominium = {
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
   * Unik identifikation af den samlede faste ejendom som er hovedejendom for den pågældende ejerlejlighed.
   */
  sfe_number?: number;
  /**
   * Unik identifikation af den bygning på fremmed grund som er hovedejendom for den pågældende ejerlejlighed.
   */
  bpfg_number?: number;
  /**
   * Angiver, om ejerlejligheden er beliggende i en bygning på fremmed grund.
   */
  in_bpfg: boolean;
  /**
   * Fordelingstal
   */
  distribution_figure?: number;
  /**
   * Udgør sammen med fordelingstalNævner ejerlejlighedens andel af ejendomsretten af den hovedejendom som ejerlejligheden indgår i.
   */
  numerator: number;
  /**
   * Udgør sammen med fordelingstalTæller ejerlejlighedens andel af ejendomsretten af den hovedejendom som ejerlejligheden indgår i.
   */
  denominator: number;
  /**
   * Angiver det aktuelle, samlede areal for ejerlejligheden i kvadratmeter.
   */
  tinglyst_area: number;
  /**
   * Sagsbilag hvorpå geometrien for ejerlejligheden og eventuelle ejerlejlighedslodder er illustreret.
   */
  condominium_map?: string;
  /**
   * Identifikation af den enkelte ejerlejlighed der ligger i en hovedejendom.
   */
  condominium_number: string;
};
