/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TenantPersonTypeEnum } from './TenantPersonTypeEnum';
export type TenantPersonResponse = {
    id: string;
    name: string;
    type: TenantPersonTypeEnum;
    gender?: string;
    marketing_protection?: boolean;
    address_id?: string;
    address_name?: string;
    address_period_from?: string;
};

