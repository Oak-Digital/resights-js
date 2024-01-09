/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalysisDimensionTypeEnum } from './AnalysisDimensionTypeEnum';
import type { AnalysisMetadataFilterValueModel } from './AnalysisMetadataFilterValueModel';
export type AnalysisMetadataFilterModel = {
    type: AnalysisDimensionTypeEnum;
    title: string;
    field: string;
    min?: (number | boolean | string);
    max?: (number | boolean | string);
    values: Array<AnalysisMetadataFilterValueModel>;
};

