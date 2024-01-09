/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * the values in the list give an implict OR clause.
 * Matches documents which contain at least one of the provided values,
 * with score based on the number of matches
 */
export type TermsQ = {
    field: string;
    value: (Array<number> | Array<string> | Array<boolean>);
};

