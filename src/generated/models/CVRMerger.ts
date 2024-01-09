/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CVRNameAttribute } from './CVRNameAttribute';
import type { CVRSequenceMerger } from './CVRSequenceMerger';
export type CVRMerger = {
    unit_number: number;
    organisation_names: Array<CVRNameAttribute>;
    incoming: Array<CVRSequenceMerger>;
    outgoing: Array<CVRSequenceMerger>;
};

