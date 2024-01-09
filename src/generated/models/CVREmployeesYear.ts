/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNumberEmployeesEnum } from './CVRNumberEmployeesEnum';
export type CVREmployeesYear = {
  year: number;
  employees?: number;
  man_years?: number;
  employees_interval_code?: CVRNumberEmployeesEnum;
  man_years_interval_code?: CVRNumberEmployeesEnum;
  updated_at: string;
  employees_including_owners?: number;
  employees_including_owners_interval_code?: CVRNumberEmployeesEnum;
};
