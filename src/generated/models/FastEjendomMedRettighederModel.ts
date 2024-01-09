/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FastEjendomModel } from './FastEjendomModel';
import type { RespektModel } from './RespektModel';
import type { RettighedModelSimpel } from './RettighedModelSimpel';
export type FastEjendomMedRettighederModel = {
  /**
   * Angiver et tinglysningsobjekt af typen fast ejendom.
   */
  FastEjendom: FastEjendomModel;
  RettighedSamling: Array<RettighedModelSimpel>;
  /**
   * Samling af respekter.
   */
  RespektSamling?: Array<RespektModel>;
};
