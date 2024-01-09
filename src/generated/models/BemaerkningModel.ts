/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TekstGruppeModel } from './TekstGruppeModel';
export type BemaerkningModel = {
  /**
   * Bemærkningskode identificerer en standard bemærkningtekst, som tinglysningsretten kan anvende tilpåtegninger under behandlingen af en anmeldelse.
   */
  Kode?: string;
  /**
   * Påtegningstekst, som angives via en Bemaerkningskode. Systemet tilføjer den tilhørende tekst.Hvis bemærkningskode angiver fritekst, bliver teksten angivet af tinglysningsrettenssagsbehandler. Hvis købesummen er mindre end halvdelen af den offentlige vurdering skal derangives en nærmere begrundelse for dette.
   */
  Tekst?: Array<TekstGruppeModel>;
};
