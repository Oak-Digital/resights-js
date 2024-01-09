/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResightsErrorModel } from './ResightsErrorModel';
export type ResightsResponseModel = {
  success: boolean;
  status_code?: number;
  message?: string;
  errors: Array<ResightsErrorModel>;
};
