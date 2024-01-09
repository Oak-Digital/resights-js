/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRCompanyStatusEnum } from './CVRCompanyStatusEnum';
import type { TenantCompanyTypeEnum } from './TenantCompanyTypeEnum';
export type TenantCompanyResponse = {
  id: number;
  cvr_number?: number;
  type: TenantCompanyTypeEnum;
  name: string;
  status: CVRCompanyStatusEnum;
  company_type_code?: number;
  industry_text?: string;
  industry_code?: number;
  industry_codes: Array<number>;
  number_employees?: number;
  number_man_years?: number;
  address_id?: string;
  address_name?: string;
  address_period_from?: string;
};
