/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EJFOwnerTypeEnum } from './EJFOwnerTypeEnum';
import type { EJFStatusEnum } from './EJFStatusEnum';
/**
 * Base class for a model representing and defining a Materialized View.
 */
export type EJFPrimaryOwnerCollection = {
    id?: string;
    type: EJFOwnerTypeEnum;
    name: string;
    ownership_id: string;
    status: EJFStatusEnum;
    primary_contact: boolean;
    marketing_protection?: boolean;
};

