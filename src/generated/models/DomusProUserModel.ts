/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProUserRoleEnum } from './DomusProUserRoleEnum';
export type DomusProUserModel = {
    /**
     * persistence_object_identifier
     */
    id: string;
    /**
     * domuspro_webservice_documentstore_domain_model_user.name
     */
    name?: string;
    /**
     * accountidentifier
     */
    username: string;
    /**
     * authenticationprovidername
     */
    authentication_provider: string;
    /**
     * creationdate
     */
    creation_date: string;
    /**
     * expirationdate
     */
    expiration_date?: string;
    /**
     * roleidentifiers
     */
    roles: Array<DomusProUserRoleEnum>;
    /**
     * lastsuccessfulauthenticationdate
     */
    last_login?: string;
    /**
     * failedauthenticationcount
     */
    failed_authentication_count?: number;
    /**
     * partner
     */
    partner_id: string;
};

