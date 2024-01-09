/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProAddressModel } from './DomusProAddressModel';
import type { DomusProBuildingModel } from './DomusProBuildingModel';
import type { DomusProCadastreModel } from './DomusProCadastreModel';
export type DomusProPropertyModel = {
    commercialUnits?: number;
    addresses: Array<DomusProAddressModel>;
    buildings: Array<DomusProBuildingModel>;
    cadastres: Array<DomusProCadastreModel>;
    externalVersion: number;
    mixedCommercialArea?: number;
    mixedResidentialArea?: number;
    mixedUnits?: number;
    municipalityIdentifier: number;
    ownershipDescription?: string;
    ownershipIdentifier?: number;
    propertyIdentifier: number;
    propertyValue?: number;
    residentialUnits?: number;
    streetBuildingIdentifier?: string;
    streetIdentifier?: number;
    streetName?: string;
    totalCommercialArea?: number;
    totalFloorArea?: number;
    totalResidentialArea?: number;
    totalUnits?: number;
    unpaddedStreetBuildingIdentifier?: string;
    valuationChangeDate?: string;
    valuationYear?: number;
};

