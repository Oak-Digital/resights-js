/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVREmployeeStats } from './CVREmployeeStats';
export type CVRCompanyStats = {
    address_change?: string;
    capital?: number;
    capital_classes?: boolean;
    ceo_change?: string;
    date_of_dissolvement?: string;
    date_of_bankruptcy?: string;
    director_change?: string;
    employees: CVREmployeeStats;
    has_email: boolean;
    has_phone: boolean;
    has_website: boolean;
    industry_codes: Array<number>;
    is_active: boolean;
    number_members: number;
    number_members_active: number;
    number_members_inactive: number;
    number_p_units: number;
    number_p_units_active: number;
    number_p_units_inactive: number;
};

