/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MATStatusEnum } from './MATStatusEnum';
export type MATLand = {
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
   * Samlet fast ejendom - BFE-nr.
   */
  sfe_number: number;
  /**
   * Angivelse af beregningsmetoden for arealet på det pågældende jordstykke.
   */
  area_calculation_method: string;
  /**
   * Tekstlig beskrivelse af arealets art eller type.
   */
  area_definition?: string;
  /**
   * Den registrerede type for arealet.
   */
  area_type?: string;
  /**
   * Et areal, der er stiftet en brugsret over for højest 30 år, såfremt arealet udgør en del af en samlet fast ejendom, eller for højest 10 år, såfremt arealet udgør en del af en umatrikuleret ejendom.
   */
  area_use_right?: boolean;
  /**
   * Midlertidigt nummer tildelt jordstykket inden det får tildelt det endelige matrikelnummer.
   */
  part_number?: string;
  /**
   * Den unikke identifikation af det specifikke ejerlav.
   */
  land_lot_code: number;
  /**
   * Entydig identifikation af et jordstykke inden for et ejerlav.
   */
  cadastre_number: string;
  /**
   * Angiver om jordstykket er et fælleslod og dermed indgår i flere faste ejendomme.
   */
  is_common_lot: boolean;
  /**
   * Unik identifikation for den specifikke kommune.
   */
  municipality_code: number;
  /**
   * Unik identifikation tildelt en specifik region.
   */
  region_code: number;
  /**
   * Jordstykkets registrerede areal i Matriklen.
   */
  registered_area: number;
  /**
   * Identifikation af den seneste skelforretningssag som er gennemført på jordstykket.
   */
  boundary_business_case_id?: number;
  /**
   * Kode for det sogn som jordstykket hører under.
   */
  parish_code: number;
  /**
   * Angiver det jordstykke, som det pågældende jordstykke oprinder fra.
   */
  originates_from_land_id?: number;
  /**
   * Identifikation af seneste sag som indeholder supplerende måloplysninger.
   */
  supplementary_measurement_case_id?: number;
  /**
   * Angivelse af om et eventuelt vandareal indenfor jordstykket indgår i det registrerede areal for jordstykket.
   */
  water_area_inclusion: string;
  /**
   * Det i matriklen registrerede areal for en ikke udskilt vej på Jordstykket.
   */
  street_area: number;
  /**
   * Angiver hvorvidt et eventuelt vejareal på jordstykket er beregnet.
   */
  street_area_calculation_status: string;
  /**
   * Registrering af om der er fredskovspligt, på et jordstykke der er skov.
   */
  forest_reserve_area?: number;
  /**
   * Registrering af om der er fredskovspligt, på et jordstykke der er skov.
   */
  forest_reserve_scope?: string;
  /**
   * Registrering af om der på jordstykket hviler jordrenteforpligtigelse i henhold til Bekendtgørelse om statshusmandsbrug m.m. og jordrente.
   */
  land_rent_scope?: string;
  /**
   * Registrering af, om der på jordstykket er klitfredning jf. naturbeskyttelsesloven.
   */
  preservation_dunes_area?: number;
  /**
   * Registrering af, om der på jordstykket er klitfredning jf. naturbeskyttelsesloven.
   */
  preservation_dunes_scope?: string;
  /**
   * Registrering af, om den fredskov som er registreret på jordstykket er noteret som majoratsskov i henhold til Skovloven.
   */
  forest_majorat_number?: number;
  /**
   * Registrering af, om den fredskov som er registreret på jordstykket er noteret som majoratsskov i henhold til Skovloven.
   */
  forest_majorat_scope?: string;
  /**
   * Registrering af, om der på jordstykket er strandbeskyttelse jf. naturbeskyttelsesloven.
   */
  beach_protection_area?: number;
  /**
   * Registrering af, om der på jordstykket er strandbeskyttelse jf. naturbeskyttelsesloven.
   */
  beach_protection_scope?: string;
  /**
   * Angiver det ejerlav som et jordstykke ligger indenfor.
   */
  land_lot_name: string;
  centroid?: string;
};
