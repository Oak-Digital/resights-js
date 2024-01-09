/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdkomstHandelBeskrivelseSubEnum } from './AdkomstHandelBeskrivelseSubEnum';
import type { AdkomstHandelKodeSubEnum } from './AdkomstHandelKodeSubEnum';
import type { EjendomstypeSubModel } from './EjendomstypeSubModel';
import type { MedtagneEjendommeModel } from './MedtagneEjendommeModel';
import type { TekstGruppeModel } from './TekstGruppeModel';
export type AdkomstInformationModel = {
  /**
   * Angiver hvilken type handel som adkomstdokumentet indeholder.
   */
  AdkomstHandelKodeSub?: AdkomstHandelKodeSubEnum;
  /**
   * AdkomstHandelBeskrivelse for valg andenOverdragelse i AdkomstHandelKode
   */
  AdkomstHandelBeskrivelse?: Array<TekstGruppeModel>;
  /**
   * Angiver hvilken type handel som adkomstdokumentet indeholder.
   */
  AdkomstHandelBeskrivelseSub?: AdkomstHandelBeskrivelseSubEnum;
  /**
   * True angiver at anmeldelsen vedrører alene en del af ejendommen.
   */
  DelsalgIndikator?: boolean;
  /**
   * Her skal det areal, der overdrages, beskrives. Beskrivelsen skal indeholde oplysning om de(t) matr.nr(e). – hvis et ud af flere – og/eller delarealnr(e), samt m² angivelse. Husk at vedhæfte rids.
   */
  ArealDerAfhaendes?: Array<TekstGruppeModel>;
  /**
   * Da handlen vedrører landbrug, gartneri eller skovbrug skal der anføres yderligere oplysninger til brug for den offentlige ejendomsvurdering
   */
  EjendomstypeSub?: EjendomstypeSubModel;
  /**
   * True angiver at anmeldelsen vedrører flere ejendomme.
   */
  FlereEjendommeIndikator?: boolean;
  /**
   * Angivelse af hvilke ejendomme er medtaget i anmeldelsen
   */
  MedtagneEjendomme?: MedtagneEjendommeModel;
};
