/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnualReportComplete } from './AnnualReportComplete';
import type { CVRAddress } from './CVRAddress';
import type { CVRAttribute } from './CVRAttribute';
import type { CVRCompanyStats } from './CVRCompanyStats';
import type { CVRCompanyStatusAttribute } from './CVRCompanyStatusAttribute';
import type { CVRCompanyStatusEnum } from './CVRCompanyStatusEnum';
import type { CVRCompanyTypeAttribute } from './CVRCompanyTypeAttribute';
import type { CVRCompanyTypeEnum } from './CVRCompanyTypeEnum';
import type { CVRCompanyUnitTypeEnum } from './CVRCompanyUnitTypeEnum';
import type { CVRContactInfoAttribute } from './CVRContactInfoAttribute';
import type { CVRCreditInformationTextEnum } from './CVRCreditInformationTextEnum';
import type { CVREffectActorEnum } from './CVREffectActorEnum';
import type { CVREmployeesMonth } from './CVREmployeesMonth';
import type { CVREmployeesQuarter } from './CVREmployeesQuarter';
import type { CVREmployeesYear } from './CVREmployeesYear';
import type { CVRIndustryAttribute } from './CVRIndustryAttribute';
import type { CVRKeyRelation } from './CVRKeyRelation';
import type { CVRMemberRelation } from './CVRMemberRelation';
import type { CVRMerger } from './CVRMerger';
import type { CVRNameAttribute } from './CVRNameAttribute';
import type { CVRNetwork } from './CVRNetwork';
import type { CVRPUnitAttribute } from './CVRPUnitAttribute';
import type { CVRRegistrationNumberAttribute } from './CVRRegistrationNumberAttribute';
import type { CVRSequenceCompanyAttributes } from './CVRSequenceCompanyAttributes';
import type { CVRStatusAttribute } from './CVRStatusAttribute';
import type { CVRStatusTextEnum } from './CVRStatusTextEnum';
import type { DARAddress } from './DARAddress';
import type { PortfolioAggs } from './PortfolioAggs';
import type { TimelineDate } from './TimelineDate';
export type CVRCompany = {
    cvr_number: number;
    unit_number: number;
    type: CVRCompanyUnitTypeEnum;
    name?: string;
    marketing_protection: boolean;
    number_p_units: number;
    status: CVRCompanyStatusEnum;
    foundation_date?: string;
    effect_date?: string;
    status_code?: number;
    status_text?: CVRStatusTextEnum;
    company_type_code?: number;
    company_type_text?: CVRCompanyTypeEnum;
    company_type_description?: string;
    responsible_data_provider?: string;
    credit_information_code?: number;
    credit_information_text?: CVRCreditInformationTextEnum;
    industry_code?: number;
    industry_text?: string;
    industry_code_1?: number;
    industry_text_1?: string;
    industry_code_2?: number;
    industry_text_2?: string;
    industry_code_3?: number;
    industry_text_3?: string;
    employees_year?: CVREmployeesYear;
    employees_quarter?: CVREmployeesQuarter;
    employees_month?: CVREmployeesMonth;
    employees_month_erst?: CVREmployeesMonth;
    address_id?: string;
    address?: CVRAddress;
    addresses: Array<CVRAddress>;
    registration_number?: string;
    email?: string;
    mandatory_email?: string;
    website?: string;
    phone_number?: string;
    secondary_phone_number?: string;
    fax_number?: string;
    secondary_fax_number?: string;
    effect_actor?: CVREffectActorEnum;
    industry_responsibility_code?: number;
    data_access: boolean;
    confidential?: boolean;
    error_import: boolean;
    error_description?: string;
    /**
     * Nogle enheder kan ligge med denne værdi, hvis de er blevet registreret som følge af en systemfejl.
     */
    error_registration: boolean;
    has_future_change?: boolean;
    nearest_future_date?: string;
    samt_id: number;
    last_imported: string;
    last_updated: string;
    secondary_name?: Array<string>;
    contact_info: Array<string>;
    names: Array<CVRNameAttribute>;
    secondary_names: Array<CVRNameAttribute>;
    registration_numbers: Array<CVRRegistrationNumberAttribute>;
    statuses: Array<CVRStatusAttribute>;
    company_statuses: Array<CVRCompanyStatusAttribute>;
    company_types: Array<CVRCompanyTypeAttribute>;
    life_courses: Array<CVRAttribute>;
    annual_employment?: Array<CVREmployeesYear>;
    quarterly_employment?: Array<CVREmployeesQuarter>;
    monthly_employment?: Array<CVREmployeesMonth>;
    monthly_employment_erst?: Array<CVREmployeesMonth>;
    postal_adresses: Array<CVRAddress>;
    p_units: Array<CVRPUnitAttribute>;
    emails?: Array<CVRContactInfoAttribute>;
    mandatory_emails?: Array<CVRContactInfoAttribute>;
    websites?: Array<CVRContactInfoAttribute>;
    phone_numbers?: Array<CVRContactInfoAttribute>;
    secondary_phone_numbers?: Array<CVRContactInfoAttribute>;
    fax_numbers?: Array<CVRContactInfoAttribute>;
    secondary_fax_numbers?: Array<CVRContactInfoAttribute>;
    industries: Array<CVRIndustryAttribute>;
    industries_1: Array<CVRIndustryAttribute>;
    industries_2: Array<CVRIndustryAttribute>;
    industries_3: Array<CVRIndustryAttribute>;
    mergers: Array<CVRMerger>;
    demergers: Array<CVRMerger>;
    attributes: Array<CVRSequenceCompanyAttributes>;
    members: Array<CVRMemberRelation>;
    key_members: Array<CVRKeyRelation>;
    address_info?: DARAddress;
    stats: CVRCompanyStats;
    portfolio_aggs: PortfolioAggs;
    financials?: AnnualReportComplete;
    timeline: Array<TimelineDate>;
    network: CVRNetwork;
};
