/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldTypeEnum } from './FieldTypeEnum';
export type StatstidendeMessageTypeFieldAdvanced = {
  field_type: FieldTypeEnum;
  public_key: string;
  is_mandatory: boolean;
  name: string;
  is_mandatory_can_be_suppressed_by_field_public_key?: string;
  list_values_href?: string;
  validation_message?: string;
  validation_pattern?: string;
};
