/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRCompanyStatusAttribute } from './CVRCompanyStatusAttribute';
import type { CVRCompanyTypeAttribute } from './CVRCompanyTypeAttribute';
import type { CVRRegistrationNumberAttribute } from './CVRRegistrationNumberAttribute';
import type { CVRStatusAttribute } from './CVRStatusAttribute';
import type { CVRUnitTypeEnum } from './CVRUnitTypeEnum';
export type CVRRelationCompany = {
    cvr_number?: number;
    unit_number: number;
    unit_type: CVRUnitTypeEnum;
    organisation_type?: string;
    name?: string;
    registration_number?: CVRRegistrationNumberAttribute;
    company_status?: CVRCompanyStatusAttribute;
    company_statuses: Array<CVRCompanyStatusAttribute>;
    status?: CVRStatusAttribute;
    company_type?: CVRCompanyTypeAttribute;
    /**
     * Nogle enheder kan ligge med denne værdi, hvis de er blevet registreret som følge af en systemfejl.
     */
    error_registration: boolean;
    last_imported: string;
    last_updated?: string;
};

