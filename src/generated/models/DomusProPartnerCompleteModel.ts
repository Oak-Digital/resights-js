/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProClientModel } from './DomusProClientModel';
import type { DomusProCompanyModel } from './DomusProCompanyModel';
import type { DomusProPartnerPackageEnum } from './DomusProPartnerPackageEnum';
import type { DomusProUserModel } from './DomusProUserModel';
export type DomusProPartnerCompleteModel = {
    /**
     * persistence_object_identifier
     */
    id: string;
    /**
     * customerid
     */
    customer_id: string;
    /**
     * name
     */
    name: string;
    /**
     * secret
     */
    secret: string;
    client: DomusProClientModel;
    company: DomusProCompanyModel;
    packages: Array<DomusProPartnerPackageEnum>;
    users: Array<DomusProUserModel>;
};

