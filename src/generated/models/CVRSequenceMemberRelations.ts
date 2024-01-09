/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequenceMemberRelationTypesEnum } from './CVRSequenceMemberRelationTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequenceMemberRelations = {
    type: CVRSequenceMemberRelationTypesEnum;
    sequence_number: number;
    value_type: CVRSequenceValueTypesEnum;
    values: Array<CVRValueAttribute>;
};

