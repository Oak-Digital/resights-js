/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequenceCompanyAttributesTypesEnum } from './CVRSequenceCompanyAttributesTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequenceCompanyAttributes = {
  type: CVRSequenceCompanyAttributesTypesEnum;
  sequence_number: number;
  value_type: CVRSequenceValueTypesEnum;
  values: Array<CVRValueAttribute>;
};
