/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RespektHaeftelseFremtidigModel } from './RespektHaeftelseFremtidigModel';
export type RespektModel = {
  /**
   * Angiver specifik rettighed der respekteres.
   */
  RettighedId?: string;
  /**
   * Angiver respekt af servitut før og inklusive den angivne dato, hvilket vil sige, at servitutter lyst efter den angivne dato ikke vil være respekteret. Dette er kun relevant for ejendomme.
   */
  ServitutDato?: string;
  /**
   * Angiver respekt af endnu ikke tinglyst haeftelse.
   */
  HaeftelseFremtidig?: RespektHaeftelseFremtidigModel;
};
