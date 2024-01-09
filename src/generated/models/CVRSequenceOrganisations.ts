/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRSequenceOrganisationTypesEnum } from './CVRSequenceOrganisationTypesEnum';
import type { CVRSequenceValueTypesEnum } from './CVRSequenceValueTypesEnum';
import type { CVRValueAttribute } from './CVRValueAttribute';
export type CVRSequenceOrganisations = {
    type: CVRSequenceOrganisationTypesEnum;
    sequence_number: number;
    value_type: CVRSequenceValueTypesEnum;
    values: Array<CVRValueAttribute>;
};

