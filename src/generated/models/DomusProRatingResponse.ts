/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DomusProRatingDescriptionModel } from './DomusProRatingDescriptionModel';
import type { DomusProRatingFormatModel } from './DomusProRatingFormatModel';
import type { DomusProValueExplanationModel } from './DomusProValueExplanationModel';
export type DomusProRatingResponse = {
    label: string;
    field: string;
    valueExplanation?: DomusProValueExplanationModel;
    description: DomusProRatingDescriptionModel;
    showValue: boolean;
    format?: DomusProRatingFormatModel;
    configurations: Record<string, any>;
};

