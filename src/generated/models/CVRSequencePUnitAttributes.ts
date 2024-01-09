/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequencePUnitAttributesTypesEnum } from './CVRSequencePUnitAttributesTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequencePUnitAttributes = {
  type: CVRSequencePUnitAttributesTypesEnum;
  sequence_number: number;
  value_type: CVRSequenceValueTypesEnum;
  values: Array<CVRValueAttribute>;
};
