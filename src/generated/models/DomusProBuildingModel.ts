/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProUnitModel } from './DomusProUnitModel';
export type DomusProBuildingModel = {
  buildingUniversalIdentifier: string;
  buildingIdentifier: number;
  buildingHistoricUniversalIdentifier: number;
  buildingCaseReference: string;
  city: string;
  siteReference: string;
  streetBuildingIdentifier: string;
  streetIdentifier: number;
  streetName: string;
  universalStreetIdentifier: number;
  unpaddedStreetBuildingIdentifier: string;
  zip: number;
  preservationCode?: number;
  preservationDescription?: string;
  units: Array<DomusProUnitModel>;
};
