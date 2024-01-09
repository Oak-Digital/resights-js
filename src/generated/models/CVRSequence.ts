/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequenceTypesEnum } from './CVRSequenceTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequence = {
  type: CVRSequenceTypesEnum;
  sequence_number: number;
  value_type: CVRSequenceValueTypesEnum;
  values: Array<CVRValueAttribute>;
};
