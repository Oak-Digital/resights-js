/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnalysisMetadataDimensionModel } from './AnalysisMetadataDimensionModel';
import type { AnalysisMetadataFilterModel } from './AnalysisMetadataFilterModel';
import type { AnalysisSourceModel } from './AnalysisSourceModel';
import type { AnalysisStatsMeasureResponse } from './AnalysisStatsMeasureResponse';
export type AnalysisMetadataResponse = {
    title: string;
    table: string;
    dimensions?: Array<AnalysisMetadataDimensionModel>;
    measures?: Array<AnalysisStatsMeasureResponse>;
    filters?: Array<AnalysisMetadataFilterModel>;
    sources?: Array<AnalysisSourceModel>;
};

