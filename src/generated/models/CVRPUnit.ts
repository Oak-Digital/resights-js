/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRAddress } from './CVRAddress';
import type { CVRAttribute } from './CVRAttribute';
import type { CVRCompanyRelationAttribute } from './CVRCompanyRelationAttribute';
import type { CVRCompanyStatusEnum } from './CVRCompanyStatusEnum';
import type { CVRContactInfoAttribute } from './CVRContactInfoAttribute';
import type { CVREmployeesMonth } from './CVREmployeesMonth';
import type { CVREmployeesQuarter } from './CVREmployeesQuarter';
import type { CVREmployeesYear } from './CVREmployeesYear';
import type { CVRIndustryAttribute } from './CVRIndustryAttribute';
import type { CVRIndustryTypeEnum } from './CVRIndustryTypeEnum';
import type { CVRNameAttribute } from './CVRNameAttribute';
import type { CVRSequencePUnitAttributes } from './CVRSequencePUnitAttributes';
import type { DARAddress } from './DARAddress';
export type CVRPUnit = {
  unit_number: number;
  cvr_number?: number;
  p_number: number;
  type: CVRIndustryTypeEnum;
  name?: string;
  marketing_protection: boolean;
  status: CVRCompanyStatusEnum;
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
  cvr_number_relation?: number;
  email?: string;
  phone_number?: string;
  fax_number?: string;
  industry_responsibility_code?: number;
  data_access: boolean;
  error_import: boolean;
  error_description?: string;
  /**
   * Nogle enheder kan ligge med denne værdi, hvis de er blevet registreret som følge af en systemfejl.
   */
  error_registration: boolean;
  nearest_future_date?: string;
  samt_id: number;
  last_imported: string;
  last_updated: string;
  contact_info: Array<string>;
  names: Array<CVRNameAttribute>;
  life_courses: Array<CVRAttribute>;
  annual_employment?: Array<CVREmployeesYear>;
  quarterly_employment?: Array<CVREmployeesQuarter>;
  monthly_employment_erst?: Array<CVREmployeesMonth>;
  postal_adresses: Array<CVRAddress>;
  emails?: Array<CVRContactInfoAttribute>;
  phone_numbers?: Array<CVRContactInfoAttribute>;
  fax_numbers?: Array<CVRContactInfoAttribute>;
  industries: Array<CVRIndustryAttribute>;
  industries_1: Array<CVRIndustryAttribute>;
  industries_2: Array<CVRIndustryAttribute>;
  industries_3: Array<CVRIndustryAttribute>;
  attributes: Array<CVRSequencePUnitAttributes>;
  company_relation: Array<CVRCompanyRelationAttribute>;
  address_info?: DARAddress;
};
