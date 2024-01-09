/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProContaminationModel } from './DomusProContaminationModel';
export type DomusProCadastreModel = {
  cadastralNumber?: string;
  cadastralDistrictIdentifier: number;
  cadastralDistrictName: string;
  mainListingCode?: string;
  mainListingCodeText?: string;
  mainListingIdentifier: number;
  contaminations: Array<DomusProContaminationModel>;
};
