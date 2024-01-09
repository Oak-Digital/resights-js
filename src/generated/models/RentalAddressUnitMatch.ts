/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressMatchCategoryEnum } from './AddressMatchCategoryEnum';
import type { AddressTypeEnum } from './AddressTypeEnum';
import type { RentalUnit } from './RentalUnit';
export type RentalAddressUnitMatch = {
    id: string;
    name: string;
    type: AddressTypeEnum;
    category: AddressMatchCategoryEnum;
    street_name: string;
    house_number: string;
    floor?: string;
    door?: string;
    zip_code: number;
    zip_name: string;
    municipality_code?: number;
    lng: number;
    lat: number;
    units?: Array<RentalUnit>;
};

