/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoligsidenAddress } from './BoligsidenAddress';
import type { ContactName } from './ContactName';
import type { OwnerTypeEnum } from './OwnerTypeEnum';
export type Owner = {
    id: string;
    name: string;
    type: OwnerTypeEnum;
    address: BoligsidenAddress;
    primary_contact: boolean;
    contact_name?: Array<ContactName>;
    marketing_protection: boolean;
    status?: string;
    birth_date?: string;
    lives_on_address?: boolean;
};

