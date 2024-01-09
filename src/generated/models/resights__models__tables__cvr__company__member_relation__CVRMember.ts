/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRAddress } from './CVRAddress';
import type { CVRUnitTypeEnum } from './CVRUnitTypeEnum';
export type resights__models__tables__cvr__company__member_relation__CVRMember = {
    unit_number: number;
    unit_type: CVRUnitTypeEnum;
    cvr_number?: number;
    organisation_type?: string;
    name?: string;
    confidential?: boolean;
    address_secret?: boolean;
    address_secret_exemption?: boolean;
    address_update_stopped?: boolean;
    address?: CVRAddress;
    postal_address?: CVRAddress;
    last_imported: string;
    last_updated?: string;
};

