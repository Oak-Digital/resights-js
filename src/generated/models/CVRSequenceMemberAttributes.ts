/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequenceMemberAttributesTypesEnum } from './CVRSequenceMemberAttributesTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequenceMemberAttributes = {
  type: CVRSequenceMemberAttributesTypesEnum;
  sequence_number: number;
  value_type: CVRSequenceValueTypesEnum;
  values: Array<CVRValueAttribute>;
};
